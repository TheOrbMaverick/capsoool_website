"use client";
import { IFeatures } from "@/constants/features";
import { mauline } from "@/utils/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import React, { useRef } from "react";

export default function FeatureContainer({
  index,
  feature,
}: {
  index: number;
  feature: IFeatures;
}) {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    const split = SplitText.create(descRef.current, { type: "lines" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "0% bottom",
        end: "top center",
        // scrub: true,
      },
    });
    tl.from(imageContainerRef.current, {
      opacity: 0,
      y: 300,
      scale: 0.5,
      x: 100,
    }).from(titleRef.current, { y: -50, opacity: 0 }, "0");
    tl.from(
      split.lines,
      { y: 100, opacity: 0, duration: 1, stagger: 0.1 },
      "0"
    );
  }, []);
  return (
    <div
      ref={containerRef}
      className={`flex gap-3 lg:gap-20 items-center flex-col  ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className={`flex-1  w-full `}>
        <h3
          ref={titleRef}
          className={`${mauline.className} text-[36px] w-full  leading-none mb-8 `}
        >
          {feature.title}
        </h3>
        <p ref={descRef} className="leading-[150%] text-xl hidden lg:block">
          {feature.description}
        </p>
      </div>
      <div
        ref={imageContainerRef}
        className={`${
          index % 2 === 0 ? "border-t border-l" : "border-t border-r"
        } shadow-[4px_8px_20px_rgba(59,130,246,0.2)] border-blue-300 relative flex-1 w-full min-h-[400px] lg:h-[400px] rounded-3xl overflow-hidden`}
      >
        <Image
          src={`/images/${feature.image}`}
          fill
          alt={feature.title}
          className="object-cover"
        />
      </div>
      <div className="lg:hidden mt-4 text-center">
        <p className="leading-[150%]">{feature.description}</p>
      </div>
    </div>
  );
}
