"use client";
import { IFeatures } from "@/constants/features";
import { mauline } from "@/utils/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

export default function FeatureContainer({
  index,
  feature,
}: {
  index: number;
  feature: IFeatures;
}) {
  // const isEven = index % 2 === 0;
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const descTitleRef = useRef<HTMLHeadingElement>(null);
  const descTextRef = useRef<HTMLParagraphElement>(null);
  const descIconRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.registerPlugin(SplitText);

  //   const split = SplitText.create(descRef.current, { type: "lines" });
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top center",
  //       end: "top center",
  //       // scrub: true,
  //     },
  //   });
  //   tl.from(imageContainerRef.current, {
  //     opacity: 0,
  //     y: 300,
  //     scale: 0.5,
  //     x: 100,
  //   }).from(titleRef.current, { y: -50, opacity: 0 }, "0");
  //   tl.from(
  //     split.lines,
  //     { y: 100, opacity: 0, duration: 1, stagger: 0.1 },
  //     "0"
  //   );
  // }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "10% bottom",
        end: `center center`,
        scrub: true,
      },
    });
    tl.from(descriptionRef.current, { y: 200 }).from(
      imageContainerRef.current,
      { y: 500 },
      "0"
    );
  }, []);
  return (
    <div
      ref={containerRef}
      className={`flex gap-3 lg:gap-20 items-stretch flex-col relative  ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div
        ref={descriptionRef}
        className={`flex-1 w-full textcenter px-5 py-6 rounded-3xl justify-between flex flex-col overflow-y-clip ${
          index % 2 === 0
            ? "[background:linear-gradient(to_bottom_right,rgba(59,130,246,0.1)_30%,rgba(255,0,0,0.05))_20%]"
            : "[background:linear-gradient(to_bottom_left,rgba(0,0,0,0.4)_70%,rgba(255,0,0,0.1))_20%]"
        } shadow-[6px_6px_20px_rgba(255,255,255,0.05)]`}
      >
        <div
          ref={descIconRef}
          className={`w-16 border h-16 flex mb-12 lg:mb-0 justify-center items-center rounded-full border-red-200`}
        >
          <LayoutDashboard size={32} />
        </div>
        <div className="flex flex-col">
          <h3
            ref={descTitleRef}
            className={`${mauline.className} font-bold  text-2xl lg:text-[36px] w-full  leading-none mb-8 `}
          >
            {feature.title}
          </h3>
          <p
            ref={descTextRef}
            className="leading-[150%] lg:text-xl hidde lgblock"
          >
            {feature.description}
          </p>
        </div>
      </div>
      <div
        ref={imageContainerRef}
        className={`flex-1 w-[200] overflow-hidden border-blue-500 hidden lg:flex justify-center ${
          index % 2 == 0 ? "justifystart" : "justifyend"
        }`}
      >
      <div className="border-[10px] border-[#0b0c16] rounded-[2rem] overflow-hidden">

        <Image
          src={`/images/mocks/${feature.image}`}
          // fill
          width={"200"}
          height={"1000"}
          alt={feature.title}
          className="object-cover"
        />
      </div>
      </div>
      <div className="lg: hidden mt-4 text-center">
        <p className="leading-[150%]">{feature.description}</p>
      </div>
    </div>
  );
}
