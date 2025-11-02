"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HamburgerMenu from "./Hamburger";

export default function Header() {
  return (
    <>
      <div className="bg-">
        <div className="border4 lg:block  hidden n fixed w-full pt-3 z-50">
          <header className="max-w-[1200px] mx-auto flex items-center backdrop-blur-2xl justify-between bg-white/10  py-3 px-4 rounded-3xl">
            <Link href={"/"} className="flex items-center">
              <Image
                src={"/images/logo.png"}
                width={200}
                height={"20"}
                alt="Capsoool Logo"
              />
            </Link>
            <div className="flex items-center gap-12">
              <nav>
                <ul className="flex items-center gap-8 text-blue-500">
                  {["Features", "Pricing", "Contact Us"].map((link, index) => (
                    <li
                      key={index}
                      className=" px-4 py-1 hover:bg-white/10 transition-all duration-300 text-lg font-medium rounded-full"
                    >
                      <Link
                        href={`/#${link.split(" ").join("-").toLowerCase()}`}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <button
                className={`bg-blue-500 px-6 py-2 font-semibold roundedlg hover:bg-transparent transition-all duration-300 outline-2 outline-none hover:outline-blue-500 text-white rounded-full`}
              >
                Download
              </button>
            </div>
          </header>
        </div>

        <header className="px-[1rem]  py-4 flex lg:hidden bg-white/10 fixed items-center justify-between w-full backdrop-blur-2xl z-[100] overflow-x-clip">
          <Link href={"/"} className="flex items-center">
            <Image
              src={"/images/logo.png"}
              width={120}
              height={10}
              alt="Capsoool Logo"
            />
          </Link>
          <HamburgerMenu />
        </header>
      </div>
    </>
  );
}
