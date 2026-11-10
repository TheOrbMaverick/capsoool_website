"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type InvitationType = "recipient" | "trusted_person";
type Action = "accept" | "reject";
type Stage =
  | "loading"       // resolving invitation type
  | "confirm"       // showing the confirmation prompt
  | "processing"    // API call in flight
  | "success"       // processed OK
  | "error"         // something went wrong
  | "already-done"  // invitation already accepted/rejected
  | "invalid";      // missing / malformed URL params

// ─── Role content ─────────────────────────────────────────────────────────────

function getRoleLabel(type: InvitationType): string {
  return type === "trusted_person" ? "Trusted Person" : "Capsool Recipient";
}

function getRoleSubtitle(type: InvitationType): string {
  return type === "trusted_person"
    ? "You've been asked to be a Trusted Person on Capsoool"
    : "You've been asked to be a Capsool Recipient";
}

function getAcceptDescription(type: InvitationType, inviterName: string | null): string {
  const from = inviterName ? `${inviterName} has` : "Someone has";
  if (type === "trusted_person") {
    return (
      `${from} added you as a Trusted Person in their Capsoool account. ` +
      "As a Trusted Person, you may be contacted in the future to help verify or action important events related to their account. " +
      "By accepting, you give consent for your name and email to be securely stored for this purpose."
    );
  }
  return (
    `${from} designated you as a Capsool Recipient. ` +
    "This means you may receive personal messages, photos, videos, or documents they have prepared for you at a future date they choose. " +
    "By accepting, you give consent for your name and email to be securely stored for this purpose."
  );
}

function getRejectDescription(type: InvitationType): string {
  return `You are about to decline the invitation to become a ${getRoleLabel(type)}. Your contact details will not be stored and the invitation will be permanently removed.`;
}

function getAcceptBullets(type: InvitationType): string[] {
  if (type === "trusted_person") {
    return [
      "Your name and email will be securely stored in Capsoool.",
      "You will only be contacted if an important event requires your attention.",
      "You can be removed at any time by the person who invited you.",
    ];
  }
  return [
    "Your name and email will be securely stored in Capsoool.",
    "You will receive capsools only when the person who invited you decides to send them.",
    "You can be removed at any time by the person who invited you.",
  ];
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#10B981" opacity="0.15" />
      <circle cx="12" cy="12" r="10" fill="#10B981" opacity="0.25" />
      <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#6B7280" opacity="0.15" />
      <circle cx="12" cy="12" r="10" fill="#6B7280" opacity="0.2" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="#9CA3AF" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#EF4444" opacity="0.15" />
      <circle cx="12" cy="12" r="10" fill="#EF4444" opacity="0.2" />
      <path d="M12 7v5M12 16.5v.5" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function CapsooolLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 mb-10">
      <Image src="/images/logo.png" alt="Capsoool" width={140} height={32} priority />
    </Link>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl backdrop-blur-xl">
      {children}
    </div>
  );
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner({ label = "Loading…" }: { label?: string }) {
  return (
    <Card>
      <div className="flex flex-col items-center gap-4 py-6 text-center">
        <div className="w-10 h-10 rounded-full border-2 border-green-400 border-t-transparent animate-spin" />
        <p className="text-gray-400 text-sm">{label}</p>
      </div>
    </Card>
  );
}

// ─── Main inner component ─────────────────────────────────────────────────────

function AcceptInvitationInner() {
  const params = useSearchParams();

  const token = params.get("token");
  const invitationId = params.get("id");
  const actionParam = params.get("action") as Action | null;
  const typeParam = params.get("type") as InvitationType | null;

  const [stage, setStage] = useState<Stage>("loading");
  const [action, setAction] = useState<Action>("accept");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Resolved invitation metadata
  const [invitationType, setInvitationType] = useState<InvitationType>("recipient");
  const [inviterName, setInviterName] = useState<string | null>(null);

  // ── On mount: validate params then resolve invitation type ─────────────────
  useEffect(() => {
    if (!token || !invitationId) {
      setStage("invalid");
      return;
    }
    if (actionParam !== "accept" && actionParam !== "reject") {
      setStage("invalid");
      return;
    }

    setAction(actionParam);

    // If the URL already carries the type (new emails), use it immediately.
    // Otherwise, fetch from the API (old emails / stripped params).
    if (typeParam === "recipient" || typeParam === "trusted_person") {
      setInvitationType(typeParam);
      setStage("confirm");
    } else {
      // Fallback: resolve from server
      fetch(`/api/invitation-type?id=${encodeURIComponent(invitationId)}`)
        .then((r) => r.json())
        .then((data) => {
          const resolvedType: InvitationType =
            data.type === "trusted_person" ? "trusted_person" : "recipient";
          setInvitationType(resolvedType);
          setInviterName(data.inviterName ?? null);
          if (data.alreadyProcessed) {
            setStage("already-done");
          } else {
            setStage("confirm");
          }
        })
        .catch(() => {
          // Network/API error — still show the page but with generic copy
          setInvitationType("recipient");
          setStage("confirm");
        });
    }
  }, [token, invitationId, actionParam, typeParam]);

  // ── Process the action ─────────────────────────────────────────────────────
  async function processAction(chosenAction: Action) {
    setStage("processing");

    try {
      const res = await fetch("/api/accept-invitation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invitationId, token, action: chosenAction }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        const msg: string = json.error || "Something went wrong. Please try again.";
        if (msg.toLowerCase().includes("already")) {
          setStage("already-done");
        } else {
          setErrorMessage(msg);
          setStage("error");
        }
        return;
      }

      setAction(chosenAction);
      setStage("success");
    } catch {
      setErrorMessage("A network error occurred. Please check your connection and try again.");
      setStage("error");
    }
  }

  // ── Stages ─────────────────────────────────────────────────────────────────

  if (stage === "loading") return <Spinner label="Loading your invitation…" />;

  if (stage === "invalid") {
    return (
      <Card>
        <div className="flex flex-col items-center gap-5 text-center">
          <ErrorIcon />
          <div>
            <h1 className="text-xl font-semibold text-white mb-2">Invalid Link</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              This invitation link is missing required information. Please use the
              original link from your email.
            </p>
          </div>
          <Link href="/" className="mt-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors">
            Go to Capsoool →
          </Link>
        </div>
      </Card>
    );
  }

  if (stage === "already-done") {
    return (
      <Card>
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden>
              <path d="M13 16h-1v-4h-1m1-4h.01" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="9" stroke="#60A5FA" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white mb-2">Already Processed</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              This invitation has already been accepted or declined. No further action is needed.
            </p>
          </div>
          <Link href="/" className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors">
            Go to Capsoool →
          </Link>
        </div>
      </Card>
    );
  }

  if (stage === "error") {
    return (
      <Card>
        <div className="flex flex-col items-center gap-5 text-center">
          <ErrorIcon />
          <div>
            <h1 className="text-xl font-semibold text-white mb-2">Something went wrong</h1>
            <p className="text-gray-400 text-sm leading-relaxed">{errorMessage}</p>
          </div>
          <div className="flex flex-col gap-3 w-full mt-2">
            <button
              onClick={() => setStage("confirm")}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/10"
            >
              ← Try again
            </button>
            <Link href="/" className="text-gray-500 hover:text-gray-400 text-sm text-center transition-colors">
              Go to Capsoool
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  if (stage === "success") {
    const accepted = action === "accept";
    return (
      <Card>
        <div className="flex flex-col items-center gap-5 text-center">
          {accepted ? <CheckIcon /> : <XIcon />}
          <div>
            <h1 className="text-2xl font-semibold text-white mb-3">
              {accepted ? "Invitation Accepted!" : "Invitation Declined"}
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              {accepted
                ? `You've successfully accepted the invitation to become a ${getRoleLabel(invitationType)}. The person who invited you has been notified.`
                : `You've declined the ${getRoleLabel(invitationType)} invitation. Your contact details have been removed and the person who invited you has been notified.`}
            </p>
          </div>
          {accepted && (
            <div className="w-full bg-green-500/5 border border-green-500/20 rounded-xl p-4 text-left">
              <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-1">
                What happens next?
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                If you don&apos;t already have the Capsoool app, you can download it
                from the App Store or Google Play. Your account will be linked when
                the time comes.
              </p>
            </div>
          )}
          <Link
            href="/"
            className="mt-1 w-full py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white text-sm font-semibold transition-colors text-center block"
          >
            Go to Capsoool
          </Link>
        </div>
      </Card>
    );
  }

  // ── Confirm stage ──────────────────────────────────────────────────────────
  const isAccept = action === "accept";
  const roleLabel = getRoleLabel(invitationType);
  const isProcessing = stage === "processing";

  return (
    <Card>
      <div className="flex flex-col gap-6">
        {/* Role badge */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                isAccept
                  ? "bg-green-500/10 border-green-500/30 text-green-400"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}
            >
              {isAccept ? "✓ Accept Invitation" : "✗ Decline Invitation"}
            </span>

            {/* Role type pill */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                invitationType === "trusted_person"
                  ? "bg-purple-500/10 border-purple-500/30 text-purple-400"
                  : "bg-blue-500/10 border-blue-500/30 text-blue-400"
              }`}
            >
              {roleLabel}
            </span>
          </div>

          <h1 className="text-2xl font-bold text-white leading-tight">
            {isAccept ? getRoleSubtitle(invitationType) : `Decline ${roleLabel} Invitation`}
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed">
            {isAccept
              ? getAcceptDescription(invitationType, inviterName)
              : getRejectDescription(invitationType)}
          </p>
        </div>

        {/* Info bullets */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <ul className="space-y-2 text-sm text-gray-400">
            {isAccept ? (
              getAcceptBullets(invitationType).map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                  {bullet}
                </li>
              ))
            ) : (
              <>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5 shrink-0">•</span>
                  Your contact details will not be stored.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5 shrink-0">•</span>
                  The invitation will be permanently removed.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5 shrink-0">•</span>
                  The person who invited you will be notified.
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => processAction(action)}
            disabled={isProcessing}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
              isAccept
                ? "bg-green-500 hover:bg-green-400 active:bg-green-600 text-white shadow-lg shadow-green-500/20"
                : "bg-red-500/80 hover:bg-red-500 active:bg-red-600 text-white"
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                Processing…
              </span>
            ) : isAccept ? (
              `Confirm & Accept as ${roleLabel}`
            ) : (
              `Confirm & Decline`
            )}
          </button>

          {/* Let users switch action */}
          <button
            onClick={() => setAction(isAccept ? "reject" : "accept")}
            disabled={isProcessing}
            className="w-full py-3 rounded-xl text-gray-500 hover:text-gray-400 text-sm font-medium transition-colors disabled:opacity-50"
          >
            {isAccept ? "I want to decline instead" : "I want to accept instead"}
          </button>
        </div>

        <p className="text-gray-600 text-xs text-center leading-relaxed">
          By using this page you agree to Capsoool&apos;s{" "}
          <Link href="/privacy-policy" className="underline hover:text-gray-400 transition-colors">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-service" className="underline hover:text-gray-400 transition-colors">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </Card>
  );
}

// ─── Default export ───────────────────────────────────────────────────────────

export default function AcceptInvitationClient() {
  return (
    <main className="min-h-screen bg-[#0F0F1A] flex flex-col items-center justify-center px-4 py-24">
      <CapsooolLogo />
      <Suspense fallback={<Spinner label="Loading your invitation…" />}>
        <AcceptInvitationInner />
      </Suspense>
      <p className="mt-8 text-gray-600 text-xs text-center max-w-xs leading-relaxed">
        This page is only accessible via a personal invitation link. If you
        arrived here by mistake, you can safely close this tab.
      </p>
    </main>
  );
}
