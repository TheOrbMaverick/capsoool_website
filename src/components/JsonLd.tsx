import React from "react";
import { faqs } from "@/constants/faqs";

export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://capsoool.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Capsoool",
    legalName: "Oneredbox Properties Limited",
    url: siteUrl,
    logo: `${siteUrl}/capsoool_logo.png`,
    sameAs: [
      "https://www.instagram.com/capsoool_app",
      "https://x.com/Capsoool_App",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@capsoool.com",
      contactType: "customer support",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Capsoool",
    url: siteUrl,
    description:
      "Capsoool is a safe space to store your most meaningful messages, memories, and moments — to be delivered to your loved ones when it matters most.",
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Capsoool",
    operatingSystem: "iOS, Android",
    applicationCategory: "LifestyleApplication",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image.png`,
    description:
      "A digital time capsule app to preserve and deliver letters, photos, videos, and documents to trusted persons and loved ones.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareAppSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
