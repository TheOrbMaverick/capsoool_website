"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CTAButton from "./CTAButton";
import { poppins } from "@/utils/fonts";
import HamburgerMenu from "./Hamburger";

export default function Header() {
  return (
    <section>
      <header className="px-[5rem] hidden  py-2 lg:flex items-center justify-between ">
        <Link href={"/"} className="flex items-center">
          <h1
            className={`flex items-center text-3xl font-semibold ${poppins.className}`}
          >
            Caps
            <span>
              {" "}
              <Image
                src={"/images/capsoool_stroke_logo.png"}
                width={50}
                height={100}
                alt="Capsoool Logo"
              />
            </span>
            l
          </h1>
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

      <header className="px-[1rem]  py-2 flex lg:hidden items-center justify-between ">
        <Link href={"/"} className="flex items-center">
          <h1
            className={`flex items-center text-3xl font-semibold ${poppins.className}`}
          >
            Caps
            <span>
              {" "}
              <Image
                src={"/images/capsoool_stroke_logo.png"}
                width={50}
                height={100}
                alt="Capsoool Logo"
              />
            </span>
            l
          </h1>
        </Link>

        {/* <div
          id="hamburger-container"
          className="fixed z-[100] w-[100vw] h-[100dvh] bg-black bg-opacity-50 flex justify-end top-0 right-0"
        >
          <div
            id="hamburger"
            className="w-[80vw] h-[100dvh] bg-white flex flex-col relative px-4 py-4"
          >
            <div className="text-red-500 self-end cursor-pointer">
              <X />
            </div>

            <div className="mt-12">
              <nav>
                <ul className="flex flex-col items-center gap-8">
                  {["Features", "Pricing", "Contact Us"].map((link, index) => (
                    <li
                      key={index}
                      className=" px-4 py-1 hover:bg-gray-300 text-[#222] transition-all duration-300 rounded-full"
                    >
                      <Link
                        href={`/${link.split(" ").join("-").toLowerCase()}`}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div> */}
        <HamburgerMenu />

        {/* <div className="flex items-center gap-12">
          <nav>
            <ul className="flex items-center gap-8">
              {["Features", "Pricing", "Contact Us"].map((link, index) => (
                <li
                  key={index}
                  className=" px-4 py-1 hover:bg-white/10 transition-all duration-300 rounded-full"
                >
                  <Link href={`/${link.split(" ").join("-").toLowerCase()}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <CTAButton text="Download App" onPress={() => {}} />
        </div> */}
        {/* <div
          onClick={() => {
            console.log("Hamburger");
            hamburgerCtrl?.play();
          }}
          className="cursor-pointer"
        >
          <Menu />
        </div> */}
      </header>
    </section>
  );
}
