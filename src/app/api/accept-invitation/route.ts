/**
 * src/app/api/accept-invitation/route.ts
 *
 * Server-side proxy that calls the Firebase Cloud Function
 * `handleInvitationResponse` on behalf of the browser.
 *
 * Why a proxy instead of calling Firebase directly from the browser?
 *  - Keeps the Firebase project config off the client entirely.
 *  - Lets us add rate-limiting or logging here in the future.
 *  - Avoids CORS issues with the Firebase callable protocol.
 *
 * Firebase callable functions accept a POST to:
 *   https://us-central1-{projectId}.cloudfunctions.net/{functionName}
 * with body `{ "data": { ...params } }` and respond with `{ "result": {...} }`.
 */

import { NextRequest, NextResponse } from "next/server";

const FIREBASE_PROJECT_ID =
  process.env.FIREBASE_PROJECT_ID || "capsoool";
const FIREBASE_REGION =
  process.env.FIREBASE_FUNCTIONS_REGION || "us-central1";

const FUNCTION_URL = `https://${FIREBASE_REGION}-${FIREBASE_PROJECT_ID}.cloudfunctions.net/handleInvitationResponse`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { invitationId, token, action } = body as {
      invitationId?: string;
      token?: string;
      action?: string;
    };

    // ── Input validation ───────────────────────────────────────────────────
    if (!invitationId || typeof invitationId !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing invitationId." },
        { status: 400 }
      );
    }
    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing token." },
        { status: 400 }
      );
    }
    if (action !== "accept" && action !== "reject") {
      return NextResponse.json(
        { success: false, error: "action must be 'accept' or 'reject'." },
        { status: 400 }
      );
    }

    // ── Call Firebase Cloud Function (callable HTTP protocol) ──────────────
    const firebaseResponse = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { invitationId, token, action },
      }),
    });

    const responseText = await firebaseResponse.text();

    // Firebase callable functions respond 200 on success, 4xx/5xx on error.
    if (!firebaseResponse.ok) {
      let errorMessage = "Failed to process invitation.";

      try {
        const errorJson = JSON.parse(responseText);
        // Firebase error format: { "error": { "message": "...", "status": "..." } }
        if (errorJson?.error?.message) {
          errorMessage = errorJson.error.message;
        }
      } catch {
        // response wasn't JSON — use generic message
      }

      // Map Firebase error codes to user-friendly messages
      if (errorMessage.includes("not-found") || errorMessage.includes("NOT_FOUND")) {
        errorMessage =
          "This invitation could not be found. It may have already been processed or expired.";
      } else if (
        errorMessage.includes("deadline-exceeded") ||
        errorMessage.includes("DEADLINE_EXCEEDED")
      ) {
        errorMessage = "This invitation has expired.";
      } else if (
        errorMessage.includes("failed-precondition") ||
        errorMessage.includes("FAILED_PRECONDITION")
      ) {
        errorMessage = "This invitation has already been accepted or declined.";
      } else if (
        errorMessage.includes("unauthenticated") ||
        errorMessage.includes("UNAUTHENTICATED")
      ) {
        errorMessage =
          "This invitation link is invalid or has been tampered with.";
      }

      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: firebaseResponse.status >= 500 ? 502 : 400 }
      );
    }

    // Success — parse result
    const json = JSON.parse(responseText);
    return NextResponse.json({ success: true, action: json?.result?.action ?? action });
  } catch (error) {
    console.error("[accept-invitation API] Unexpected error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
