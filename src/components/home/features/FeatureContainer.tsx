import { IFeatures } from "@/constants/features";
import { mauline } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

export default function FeatureContainer({
  index,
  feature,
}: {
  index: number;
  feature: IFeatures;
}) {
  return (
    <div
      className={`flex gap-3 lg:gap-20 items-center flex-col  ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className={`flex-1  w-full `}>
        <h3
          className={`${mauline.className} text-3xl w-full  leading-none mb-4 `}
        >
          {feature.title}
        </h3>
        <p className="leading-[150%] hidden lg:block">{feature.description}</p>
      </div>
      <div
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
