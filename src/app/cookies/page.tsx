import { Metadata } from "next";
import { mauline } from "@/utils/fonts";
import React from "react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how Capsoool uses cookies and similar tracking technologies to provide, protect, and improve our services.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <div className="max-w-[1200px] mx-auto pt-8 pb-20 md:pt-20 px-4">
      <div>
        <h1
          className={`text-center text-[2rem] lg:text-[80px] ${mauline.className}`}
        >
          Cookie Policy
        </h1>
      </div>

      <div className="max-w-[800px] mx-auto leading-[200%] px-3">
        <p className="mb-6">
          This Cookie Policy explains how Oneredbox Properties Limited
          (&quot;Capsoool,&quot; &quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;) uses cookies and similar technologies when you visit
          our website or use the Capsoool application.
        </p>

        <ul className="list-decimal mt-3 flex flex-col gap-6">
          <li>
            <p className="font-semibold text-lg">What Are Cookies?</p>
            <p>
              Cookies are small text files stored on your device (computer,
              tablet, or mobile) when you visit websites. They help websites
              recognize your device, store user preferences, and ensure smooth
              functionality.
            </p>
          </li>

          <li>
            <p className="font-semibold text-lg">Types of Cookies We Use</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Necessary for the proper
                functioning of the site, enabling core features like navigation
                and secure access.
              </li>
              <li>
                <strong>Analytics & Performance Cookies:</strong> Help us
                analyze site traffic and usage patterns (e.g., via Google
                Analytics) so we can improve user experience.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences
                and custom settings for a seamless experience.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">How We Use Cookies</p>
            <p>We use cookies to:</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>
                Keep you signed in and authenticate session states safely.
              </li>
              <li>
                Understand how users interact with our features and pages.
              </li>
              <li>
                Ensure data security and protect against fraudulent activity.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">
              Managing Your Cookie Preferences
            </p>
            <p>
              Most web browsers allow you to control or disable cookies through
              browser settings. However, disabling essential cookies may impact
              the availability or performance of certain app features.
            </p>
          </li>

          <li>
            <p className="font-semibold text-lg">Contact Us</p>
            <p>
              If you have any questions about our Cookie Policy, please contact
              us at <strong>support@capsoool.com</strong>.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
