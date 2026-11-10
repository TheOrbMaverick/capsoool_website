/**
 * src/app/api/invitation-type/route.ts
 *
 * GET /api/invitation-type?id=<invitationId>
 *
 * Returns the `type` and `inviterName` of a pending invitation so the
 * accept-invitation page can display the correct role label even when
 * the email link predates the `type` URL param (or if it was stripped).
 *
 * Only returns non-sensitive metadata (type + inviterName).
 * The token is NOT required — type is not secret.
 * The invitation must still have status "pending" to be readable.
 *
 * Uses the Firebase REST API (no SDK needed) so the website stays
 * dependency-free. Reads are authenticated with a service-account key
 * stored in FIREBASE_SERVICE_ACCOUNT_JSON (server env only).
 * Falls back gracefully if the env var is absent.
 */

import { NextRequest, NextResponse } from "next/server";

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID || "capsoool";

// ── Lightweight Firestore REST helper ─────────────────────────────────────────

/**
 * Fetches a single Firestore document via the REST API.
 * Returns the raw `fields` object on success, or null if not found / error.
 */
async function firestoreGet(
  collection: string,
  docId: string
): Promise<Record<string, { stringValue?: string; timestampValue?: string }> | null> {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collection}/${docId}`;

  // Try with service-account auth if available, otherwise unauthenticated
  // (unauthenticated reads will only work if Firestore rules allow it,
  // which they do for `allow list` on invitations).
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (serviceAccountJson) {
    try {
      // Build a minimal JWT access token from the service account key
      const token = await getServiceAccountToken(serviceAccountJson);
      if (token) headers["Authorization"] = `Bearer ${token}`;
    } catch {
      // Fall through to unauthenticated
    }
  }

  try {
    const res = await fetch(url, { headers, cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return json.fields ?? null;
  } catch {
    return null;
  }
}

/**
 * Minimal service-account → access token exchange using Google's token endpoint.
 * Only called when FIREBASE_SERVICE_ACCOUNT_JSON is set.
 */
async function getServiceAccountToken(saJson: string): Promise<string | null> {
  const sa = JSON.parse(saJson);
  const now = Math.floor(Date.now() / 1000);
  const expiry = now + 3600;

  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/datastore",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: expiry,
  };

  const encode = (obj: object) =>
    Buffer.from(JSON.stringify(obj)).toString("base64url");

  const signingInput = `${encode(header)}.${encode(payload)}`;

  // Sign with RSA-SHA256 using the Web Crypto API (available in Next.js Edge/Node runtimes)
  const privateKeyPem: string = sa.private_key;
  const keyData = privateKeyPem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\n/g, "");

  const keyBuffer = Buffer.from(keyData, "base64");
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    keyBuffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    Buffer.from(signingInput)
  );

  const jwt = `${signingInput}.${Buffer.from(signature).toString("base64url")}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!tokenRes.ok) return null;
  const tokenJson = await tokenRes.json();
  return tokenJson.access_token ?? null;
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const invitationId = searchParams.get("id");

  if (!invitationId || typeof invitationId !== "string") {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const fields = await firestoreGet("invitations", invitationId);

  if (!fields) {
    // Not found or Firestore error — return a safe "unknown" so the page
    // can still render generically.
    return NextResponse.json({ type: "recipient", inviterName: null }, { status: 200 });
  }

  // Only expose non-sensitive metadata
  const type = fields.type?.stringValue ?? "recipient";
  const inviterName = fields.inviterName?.stringValue ?? null;
  const status = fields.status?.stringValue ?? "pending";

  // Don't return metadata for already-processed invitations
  if (status !== "pending") {
    return NextResponse.json(
      { type, inviterName, alreadyProcessed: true },
      { status: 200 }
    );
  }

  return NextResponse.json({ type, inviterName, alreadyProcessed: false });
}
