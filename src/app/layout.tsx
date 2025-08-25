import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { poppins } from "@/utils/fonts";
import Footer from "@/components/Footer";

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
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
