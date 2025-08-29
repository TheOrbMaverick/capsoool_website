import { mauline } from "@/utils/fonts";
import React from "react";
import FeatureContainer from "./features/FeatureContainer";
import { features } from "@/constants/features";
import BurstCircle from "../abstracts/BurstCircle";
import BurstPucker from "../abstracts/BurstPucker";

export default function Features() {
  return (
    <section className="container lg:max-w-[1200px] relative  mx-auto min-h-[100dvh] py-[5rem]">
      <section>
        <div className="px-4">
          <h3
            className={`${mauline.className} text-[2.5rem] to-blue-500 lg:text-[80px] leading-none lg:text-center`}
          >
            Your <span className="text-blue-500">Memories</span> <br />
            safely Preserved
          </h3>
        </div>
      </section>
      <div className="absolute top-1/2 left-[40%] -z-1 -translate-x-1/2 ">
        <BurstCircle
          className="hidden lg:block lg:scale-[200%]"
          stroke="#93c5fd"
          fill="rgb(147 197 253 / 0.1)"
        />
      </div>

      <div className="absolute right-0 lg:left-0 -z-[2]">
        <BurstPucker className="scale-[30%] lg:scale-50" />
      </div>

      <div className="absolute left-[45%] top-[20%]">
        <BurstPucker className="scale-[30%]" />
      </div>
      <div className="absolute right-[10%] top-[50%]">
        <BurstPucker className="scale-[30%]" />
      </div>
      <section className="mt-12 lg:mt-32">
        <div className=" px-4 lg:px-[8rem] flex flex-col gap-16 lg:gap-16">
          {features.map((feature, index) => (
            <FeatureContainer key={index} index={index} feature={feature} />
          ))}
        </div>
      </section>
    </section>
  );
}
