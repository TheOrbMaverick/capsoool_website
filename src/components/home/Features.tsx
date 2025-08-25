import { mauline } from "@/utils/fonts";
import React from "react";
import FeatureContainer from "./features/FeatureContainer";
import { features } from "@/constants/features";

export default function Features() {
  return (
    <section className="container  mx-auto min-h-[100dvh] py-[5rem]">
      <section>
        <div className="">
          <h3
            className={`${mauline.className} text-[2.5rem] lg:text-[80px] leading-none text-center`}
          >
            Your <span className="text-blue-500">Memories</span> <br />
            safely Preserved
          </h3>
        </div>
      </section>

      <section className="mt-12">
        <div className=" px-4 lg:px-[12rem] flex flex-col gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <FeatureContainer key={index} index={index} feature={feature} />
          ))}
        </div>
      </section>
    </section>
  );
}
