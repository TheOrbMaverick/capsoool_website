"use client";
import { useEffect, useRef, useState } from "react";
// import { LogIn } from "lucide-react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { mauline } from "@/utils/fonts";
// import { SignUpButton } from "./buttons";

export default function HamburgerMenu() {
  const location = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const slideInRef = useRef<gsap.core.Tween | null>(null);
  const slideOutRef = useRef<gsap.core.Tween | null>(null);

  // Init animations on mount
  useEffect(() => {
    if (menuRef.current) {
      slideInRef.current = gsap.to(menuRef.current, {
        x: 0,
        right: 0,
        paused: true,
        duration: 0.5,
        ease: "power2.out",
      });
      slideOutRef.current = gsap.to(menuRef.current, {
        x: "120%",
        right: "100%",
        paused: true,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    if (!menuOpen) {
      slideInRef.current?.restart();
      setMenuOpen(true);
    } else {
      slideOutRef.current?.restart();
      setMenuOpen(false);
    }
    // setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuOpen) {
      slideOutRef.current?.play();
      setMenuOpen(false);
    }
  }, [location]);

  return (
    <div className="relative z-[10000000]">
      <div
        className="w-[18px] flex flex-col gap-[10px] cursor-pointer"
        onClick={toggleMenu}
        role="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        tabIndex={0}
      >
        <div
          className={`h-[3px] bg-white origin-left rounded-full transition-all duration-300 ${
            menuOpen ? "rotate-[45deg]" : ""
          }`}
        ></div>
        <div
          className={`h-[3px] bg-white origin-left rounded-full transition-all duration-300 ${
            menuOpen ? "-rotate-45" : ""
          }`}
        ></div>
      </div>

      <div
        ref={menuRef}
        className="absolute w-[85vw] max-w-[400px] hamburger h-[80dvh] bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] -right-full translate-x-[110%] -bottom-6 translate-y-full  rounded-3xl p-[24px_1rem_2rem_2.5rem]"
      >
        <div className="h-full flex flex-col items-start">
          <div className="flex flex-col gap-6">
            <Link href={"/"}>
              <h2 className={`${mauline.className} text-[2rem] text-blue-500`}>
                Capsoool
              </h2>
            </Link>
            <div className="">
              <nav className="flex flex-col text-[#222] gap-[10px]">
                {["Features", "Pricing", "Contact Us"].map((item, i) => (
                  <Link
                    href={`/#${item.split(" ").join("-").toLowerCase()}`}
                    key={i}
                    className="p-[10px] hover:bg-gray-200 rounded-full"
                    onClick={() => {
                      slideOutRef.current?.restart();
                      setMenuOpen(false);
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <Link
            href={"/contact"}
            className="inline-flex relative px-4 rounded-lg py-4 gap-2 items-center font-bold text-white bg-primary hover:bg-button-hover active:bg-button-pressed  mt-auto"
          >
            {/* <LogIn className="stroke-primary" /> */}
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
