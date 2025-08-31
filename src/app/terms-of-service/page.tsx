import { mauline } from "@/utils/fonts";
import React from "react";

export default function TermsOfService() {
  return (
    <div className="max-w-[1200px] mx-auto pt-8 pb-20 px-4">
      <div className="">
        <h3
          className={`text-center text-[2rem] lg:text-[80px] ${mauline.className}`}
        >
          Terms Of Service
        </h3>
      </div>

      <div className="max-w-[800px] mx-auto leading-[200%]">
        <div className="">
          <p>
            Welcome to Capsoool. By using our Services, you agree to these Terms
            of Service (“Terms”). Please read carefully.
          </p>
        </div>

        <ul className="list-decimal mt-3 flex flex-col gap-6 px-3">
          <li>
            <p className="font-semibold text-lg"> ⁠Eligibility</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>You must be at least 18 years old to use Capsoool.</li>
              <li>
                By creating an account, you represent that you meet this
                requirement.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">User Accounts</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>
                You are responsible for maintaining the confidentiality of your
                login credentials.
              </li>
              <li>You are responsible for all activity under your account.</li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">Services</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>Free Tier: Allows storage of letters only.</li>
              <li>
                Subscription Tier: Allows storage of letters, images, videos,
                and documents.
              </li>
              <li>Features may evolve over time.</li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">Subscriptions and Payments</p>
            <p>
              Subscriptions are billed via Apple App Store, Google Play Store,
              and RevenueCat.
            </p>
            <ol className="list-disc pl-8 space-y-2">
              <li>
                Subscriptions automatically renew unless canceled before the
                renewal date.
              </li>
              <li>
                You may cancel at any time through your app store account
                settings.
              </li>
              <li>
                We do not provide refunds except as required by law or by the
                app store policies.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">⁠⁠User Content</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>
                You retain ownership of the letters, images, videos, and
                documents you upload.
              </li>
              <li>
                By uploading content, you grant us a limited license to securely
                store and deliver it as part of the Services.
              </li>
              <li>
                You are responsible for ensuring your content does not violate
                any law, infringe on rights, or contain harmful material.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">No Legal Advice</p>
            <p className="mt-3">
              Capsoool provides a platform for storing and sharing content.
            </p>
            <ol className="list-disc pl-8 space-y-2">
              <li>
                Capsoool is not a legal will, trust, or estate planning service.
              </li>
              <li>We do not provide legal advice.</li>
              <li>
                You should consult a licensed attorney for legally binding
                estate planning.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">Termination</p>
            <p className="mt-3">We may suspend or terminate accounts that:</p>
            <ol className="list-disc pl-8 space-y-2">
              <li>Violate these Terms.</li>
              <li>Are used for fraudulent, illegal, or abusive purposes.</li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">Limitation of Liability</p>
            <p className="mt-3">To the maximum extent permitted by law:</p>

            <ol className="list-disc pl-8 space-y-2">
              <li>
                Capsoool and Oneredbox Properties are not liable for indirect,
                incidental, or consequential damages.
              </li>
              <li>
                Our liability is limited to the amount paid by you in the 12
                months preceding the claim.
              </li>
            </ol>
          </li>

          <li>
            <p className="font-semibold text-lg">Governing Law</p>
            <p className="mt-3">
              These Terms are governed by the laws of the State of Arizona,
              United States.
            </p>
          </li>

          <li>
            <p className="font-semibold text-lg">⁠Changes to Terms</p>
            <p className="mt-3">
              We may update these Terms occasionally. Continued use of the
              Services means you accept the revised Terms.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
