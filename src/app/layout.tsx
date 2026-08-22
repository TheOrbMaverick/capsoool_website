import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import { poppins } from "@/utils/fonts";
import Footer from "@/components/Footer";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { GoogleAnalytics } from "@next/third-parties/google";
import JsonLd from "@/components/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.capsoool.com";

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Capsoool - Digital Time Capsule & Memory Preservation App",
    template: "%s | Capsoool",
  },
  description:
    "Capsoool is a safe, secure digital time capsule app. Store letters, photos, videos, and documents to be delivered to your loved ones and trusted persons when it matters most.",
  keywords: [
    "Capsoool",
    "digital time capsule",
    "digital legacy app",
    "preserve memories",
    "letters to loved ones",
    "trusted persons memory delivery",
    "secure memory vault",
    "estate planning messages",
    "future delivery messages",
    "family memories app",
  ],
  authors: [{ name: "Oneredbox Properties Limited" }],
  creator: "Oneredbox Properties Limited",
  publisher: "Oneredbox Properties Limited",
  applicationName: "Capsoool",
  icons: {
    icon: "/capsoool_logo.png",
    shortcut: "/capsoool_logo.png",
    apple: "/capsoool_logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Capsoool - Digital Time Capsule & Memory Preservation App",
    description:
      "Where memories are preserved. Store letters, photos, videos, and documents to be delivered to your loved ones when it matters most.",
    siteName: "Capsoool",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Capsoool - Where Memories Are Preserved",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capsoool - Digital Time Capsule & Memory Preservation App",
    description:
      "Where memories are preserved. Store letters, photos, videos, and documents to be delivered to your loved ones when it matters most.",
    images: ["/opengraph-image.png"],
    creator: "@Capsoool_App",
    site: "@Capsoool_App",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-RW7GGLB4QB";

  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${poppins.className} antialiased w-[100vw] overflow-x-clip `}
      >
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
