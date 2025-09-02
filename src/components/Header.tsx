"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CTAButton from "./CTAButton";
import HamburgerMenu from "./Hamburger";

export default function Header() {
  return (
    <div className="max-w-[1200px] mx-auto py-8">
      <header className="px[5rem] hidden lg:flex items-center justify-between">
        <Link href={"/"} className="flex items-center">
          <Image
            src={"/images/logo.png"}
            width={200}
            height={100}
            alt="Capsoool Logo"
          />
        </Link>

        <div className="flex items-center gap-12">
          <nav>
            <ul className="flex items-center gap-8">
              {["Features", "Pricing", "Contact Us"].map((link, index) => (
                <li
                  key={index}
                  className=" px-4 py-1 hover:bg-white/10 transition-all duration-300 rounded-full"
                >
                  <Link href={`/#${link.split(" ").join("-").toLowerCase()}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <CTAButton text="Download App" onPress={() => {}} />
        </div>
      </header>

      <header className="px-[1rem]  py-4 flex lg:hidden items-center justify-between relative overflow-x-clip">
        <Link href={"/"} className="flex items-center">
          <Image
            src={"/images/logo.png"}
            width={120}
            height={100}
            alt="Capsoool Logo"
          />
        </Link>
        <HamburgerMenu />
      </header>
    </div>
  );
}
