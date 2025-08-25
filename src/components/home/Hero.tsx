import React from "react";
import AndroidButton from "../AndroidButton";
import IOSButton from "../IOSButton";
import { mauline } from "@/utils/fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto pt-8 px-4 max-h-[900px] items-center  min-h-[100dvh] overflow-y-hidden lg:grid lg:grid-cols-12">
      <section className="flex flex-col gap-12  flex-1 col-start-1 col-end-8">
        <div className="space-y-6 text-center lg:text-left">
          {/* <p className={`text-[80px] leading-none ${mauline.className}`}>
            All your <span className="text-blue-500 ]">Special Memories</span>{" "}
            in one app
          </p> */}
          <p
            className={`text-[2.5rem] lg:text-[80px]  leading-none ${mauline.className}`}
          >
            Preserve Your <span className="text-blue-500">Memories</span>.
            {/* Protect Your Legacy. */}
          </p>
          <div className="max-w-[500px] space-y-2">
            <p className="">
              We don’t know what the future holds — but with Capsoools, you can
              leave behind comfort, love, and guidance that lasts a lifetime.
              Your words and memories will live on, even when you can’t be
              there.
            </p>
            <p>
              Capsoools is a safe space to store your most meaningful messages,
              memories, and moments — to be delivered to your loved ones when it
              matters most.
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
            src={"/images/phone-mockup.webp"}
            width={"1000"}
            height={"1000"}
            alt=""
            className="z-[2]"
          />
          <div className="absolute top-[4%] px-6 -z-[1] w-full h-full overflow-hidden ">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image
                src={"/images/home.jpeg"}
                width={"1000"}
                height={"1000"}
                alt=""
                // className="object-cove"
              />
            </div>
          </div>
          {/* </div> */}

          <div className="absolute -z-[2] w-full h-full top-20 -right-20">
            <Image
              src={"/images/phone-mockup.webp"}
              width={"1000"}
              height={"1000"}
              alt=""
            />
          </div>
        </div>
      </section>
    </section>
  );
}
