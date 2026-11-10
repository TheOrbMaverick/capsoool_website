import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accept Invitation | Capsoool",
  description:
    "Review and respond to your Capsoool invitation. Accept or decline your role as a recipient or trusted person.",
  robots: { index: false, follow: false }, // Don't index — unique token links
};

export { default } from "./AcceptInvitationClient";
