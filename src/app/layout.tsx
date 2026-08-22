import type { Metadata } from "next";
import Header from "@/components/Header";
import { poppins } from "@/utils/fonts";
import Footer from "@/components/Footer";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Capsoool App",
  description: "Take care of yourself with the Capsoool App",
  icons: {
    icon: "/capsoool_logo.png", // Add your favicon here
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
