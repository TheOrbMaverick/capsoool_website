"use client";
import React, { useRef } from "react";
import AndroidButton from "../AndroidButton";
import IOSButton from "../IOSButton";
import { mauline } from "@/utils/fonts";
import Image from "next/image";
import Future from "../abstracts/Future";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

export default function Hero() {
  const futurePortalRef = useRef<HTMLDivElement>(null);
  const heroIntroHeaderRef = useRef<HTMLSpanElement>(null);
  const introDescRef = useRef<HTMLDivElement>(null);
  const topImageRef = useRef<HTMLImageElement>(null);
  const bottomImageRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const introSplit = SplitText.create(introDescRef.current, {
      type: "words",
    });

    const tl = gsap.timeline();
    tl.addLabel("heroHeaderIntro").from(heroIntroHeaderRef.current, {
      y: "100%",
      duration: 1,
      opacity: 0,
    });
    tl.addLabel("introDesc").from(introSplit.words, {
      stagger: 0.01,
      opacity: 0,
      y: 40,
    });
    tl.from(topImageRef.current, { opacity: 0, x: 100 }, "introDesc");
    tl.from(bottomImageRef.current, { opacity: 0, y: 100 }, "heroHeaderIntro");
    // gsap.from(".intro-desc", { y: "100%", stagger: 0.5, delay: 0.8 });
  }, []);
  return (
    <section className="overflow-x-hidden">
      <div className="absolute -z-[2] w-full left-0 text-white text-opacity-5 overflow-x-hidden lg:left-[25%]">
        <div ref={futurePortalRef} className="inline-block">
          <Future
            className="stroke-blue-300/10 scale"
            stroke="rgb(147 197 253 / 0.1)"
          />
        </div>
      </div>
      <div className="absolute top-[30%] w-80 h-80 bg-blue-500 bg-opacity-20 -z-[3] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[30%] w-80 h-80 bg-blue-500 bg-opacity-30 -z-[3] rounded-full"></div>
      <div className="absolute w-full h-full border- bg-blue200 -z-[3] backdrop-blur-[80px]"></div>
      <section className="container lg:max-w-[1200px] mx-auto pt-8 px-4 max-h-[900px] items-center  min-h-[100dvh] overflow-y-hidden lg:grid lg:grid-cols-12 relative">
        <section className="flex flex-col gap-12  flex-1 col-start-1 col-end-8">
          <div className="space-y-6 text-center lg:text-left">
            {/* <p className={`text-[80px] leading-none ${mauline.className}`}>
            All your <span className="text-blue-500 ]">Special Memories</span>{" "}
            in one app
          </p> */}
            <p
              className={`text-[2.5rem] relative overflow-y-clip  lg:text-[80px]  leading-none ${mauline.className}`}
            >
              <span ref={heroIntroHeaderRef} className="inline-block relative">
                Preserve Your <span className="text-blue-500">Memories</span>.
              </span>
              {/* Protect Your Legacy. */}
            </p>
            <div ref={introDescRef} className="max-w-[500px] space-y-2 ">
              <p className="relative overflow-hidden">
                <span className="intro-desc inline-block">
                  We don’t know what the future holds — but with Capsoools, you
                  can leave behind comfort, love, and guidance that lasts a
                  lifetime. Your words and memories will live on, even when you
                  can’t be there.
                </span>
              </p>
              <p className="hidden lg:block relative overflow-hidden">
                <span className="intro-desc inline-block">
                  Capsoools is a safe space to store your most meaningful
                  messages, memories, and moments — to be delivered to your
                  loved ones when it matters most.
                </span>
              </p>
            </div>
          </div>
          <div className=" flex justify-center lg:justify-start gap-4">
            <IOSButton />
            <AndroidButton />
          </div>
        </section>

        <section className="grid grid-cols-12 self-start lg:justify lg:col-start-8 lg:col-end-13 mt-6 lg:mt-12 lg:gap-8 flex-1">
          <div className="flex-1 relative border2 col-start-2  col-end-10 lg:col-start-1 lg:col-end-8">
            {/* <div className="w-full border-2 border-red-500 [mask-image:url('/images/home.jpeg')] [mask-position:center]"> */}
            <Image
              ref={topImageRef}
              src={"/images/home-phone-mockup.png"}
              width={"1000"}
              height={"1000"}
              alt=""
              className="z-[2] scale0"
            />

            <div className="absolute -z-[2] w-full h-full top-20 -right-20">
              <Image
                ref={bottomImageRef}
                src={"/images/security-phone-mockup.png"}
                width={"1000"}
                height={"1000"}
                alt=""
              />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
