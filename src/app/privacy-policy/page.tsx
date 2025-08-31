import { mauline } from "@/utils/fonts";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-[1200px] mx-auto pt-8 pb-20 px-4">
      <div className="">
        <h3
          className={`text-center text-[2rem] lg:text-[80px] ${mauline.className}`}
        >
          Privacy Policy
        </h3>
      </div>

      <div className="max-w-[800px] mx-auto leading-[200%] px-3">
        <div className="">
          <p>
            Oneredbox Properties (“Company,” “we,” “our,” or “us”), doing
            business as Capsoool, values your privacy. This Privacy Policy
            explains how we collect, use, and protect your information when you
            use our application, website, and related services (collectively,
            the “Services”).
          </p>
        </div>

        <ul className="list-decimal mt-3 flex flex-col gap-6">
          <li>
            <p className="font-semibold text-lg">Information We Collect</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>
                Account Information: When you create an account, we collect your
                email address, password, and related registration details.
              </li>
              <li>
                User Content: Letters, images, videos, and documents you upload
                and store in Capsoool.
              </li>
              <li>
                Subscription & Billing Information: Processed through our
                payment providers (Apple, Google, or RevenueCat). We do not
                store your credit card details.
              </li>
              <li>
                Device & Usage Data: Such as device type, operating system, app
                version, IP address, and interaction data, collected
                automatically for functionality and analytics.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">How We Use Information</p>
            <p>We use your information to:</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>Provide, maintain, and improve our Services.</li>
              <li>Securely store your content.</li>
              <li>Process subscriptions and manage account access.</li>
              <li>
                Send notifications related to account activity and important
                updates.
              </li>
              <li>Ensure compliance with our Terms of Service.</li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">Data Storage and Security</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>
                Your content is stored securely using Firebase (Google Cloud)
                infrastructure.
              </li>
              <li>
                We implement industry-standard encryption and access controls.
              </li>
              <li>
                While we take strong measures to protect your data, no online
                service is 100% secure.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">Sharing of Information</p>
            <p>
              We do not sell, rent, or share your personal information or
              content with third parties except in these limited cases:
            </p>
            <ol className="list-disc pl-8 space-y-2">
              <li>
                With service providers (e.g., Firebase, RevenueCat) who process
                data on our behalf.
              </li>
              <li>If required by law, legal process, or government request.</li>
              <li>
                To protect against fraud, security threats, or legal liability.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">Data Retention</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>
                Your content remains stored until you delete it or close your
                account.
              </li>
              <li>
                We may retain some account and transaction data as required by
                law.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">⁠Children’s Privacy</p>
            <p className="mt-3">
              Our Services are intended for users 18 years and older. We do not
              knowingly collect information from anyone under 18.
            </p>
          </li>

          <li>
            <p className="font-semibold text-lg">International Users</p>
            <p className="mt-3">
              Although our company is based in the United States (Arizona), we
              may process data on servers located in other regions, including
              through Firebase (Google Cloud).
            </p>
          </li>

          <li>
            <p className="font-semibold text-lg">Your Rights</p>
            <p className="mt-3">
              Depending on your location, you may have rights to:
            </p>

            <ol className="list-disc pl-8 space-y-2">
              <li>Access, correct, or delete your information.</li>
              <li>Export your data.</li>
              <li>Withdraw consent to certain processing.</li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}
