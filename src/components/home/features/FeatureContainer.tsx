import { IFeatures } from "@/constants/features";
import { mauline } from "@/utils/fonts";
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
      className={`flex gap-3 lg:gap-20 items-center flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="flex-1">
        <h3 className={`${mauline.className} text-3xl leading-none mb-4 `}>
          {feature.title}
        </h3>
        <p className="leading-[150%] hidden lg:block">{feature.description}</p>
      </div>
      <div className="border flex-1 w-full min-h-[400px] rounded-3xl"></div>
      <div className="lg:hidden">
        <p className="leading-[150%]">{feature.description}</p>
      </div>
    </div>
  );
}
