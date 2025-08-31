import { mauline } from "@/utils/fonts";
import { Dot } from "lucide-react";
import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="">
      <section className="max-w-[1200px] mx-auto py-[4rem] lg:py-[9rem] px-4">
        <div className="mb-16">
          <h3
            className={`${mauline.className} text-[2rem] lg:text-[80px] text-center`}
          >
            Pricing Plans
          </h3>

          <p className={`text-lg text-white text-center mt-4`}>
            Choose the Right Plan for Your Memories
          </p>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="border4 rounded-[2rem] bg-white bg-opacity-20 border-l border-b bg-gradient-tobr tobackground fromblue-500/30 shadow-[-8px_8px_8px_rgba(59,130,246,0.1)]    h[700px] bg-opacity50  px-6 py-8 relative overflow-hidden">
                <div className="">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className={`${mauline.className} text-[2rem]`}>
                      {plans.basic.title}
                    </h4>
                  </div>

                  <p className="text-lg font-medium">{plans.basic.subtitle}</p>
                </div>
                <div className="h-[1px] bg-blue-500 bg-opacity-30 my-6"></div>
                <div className="">
                  <p className="font-semibold mb-4">Features Included</p>
                  <ul className="flex flex-col gap-4 font-semibold">
                    {plans.basic.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <span>
                          <Dot />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p>{plans.basic.summary}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="border4 rounded-[2rem] bg-gradient-to-br to-background from-blue-500/30 shadow-[8px_8px_8px_rgba(59,130,246,0.2)]  outline-blue-300 outlin outline-2  h[700px] bg-opacity-50  px-6 py-8 relative overflow-hidden">
                <div className="absolute w-full h-full top-0 left-0 bg-ed-500 -z-[1] backdrop-blur-2xl"></div>
                <div className="absolute w-full h-full top-0 left-0 bg-red-500/20 scale-[80%] -z-[2]"></div>
                <div className="w-40 h-40 rounded-bl-full bg-blue-500/50 -z-[2] absolute"></div>
                <div className="w-40 h-40 rounded-bl-full bg-blue-500 -z-[2] absolute bottom-0 right-4"></div>
                <div className="">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className={`${mauline.className} text-[2rem]`}>
                      {plans.standard.title}
                    </h4>
                    <span
                      className={`${mauline.className} tracking-wider bg-gradient-to-br from-blue-500 to-blue-300 px-4 rounded-full py-1 font-semibold`}
                    >
                      Popular
                    </span>
                  </div>

                  <p className="text-lg font-medium">
                    {plans.standard.subtitle}
                  </p>
                </div>
                <div className="h-[1px] bg-blue-500 bg-opacity-30 my-6"></div>
                <div className="">
                  <p className="font-semibold mb-4">Features Included</p>
                  <ul className="flex flex-col gap-4 font-semibold">
                    {plans.standard.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <span>
                          <Dot />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p>{plans.standard.summary}</p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="relative">
              <div className="border4 rounded-[2rem] bg-white bg-opacity-20 border-r border-b bg-gradient-tobr tobackground fromblue-500/30 shadow-[8px_8px_8px_rgba(59,130,246,0.1)]    h[700px] bg-opacity50  px-6 py-8 relative overflow-hidden">
                <div className="">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className={`${mauline.className} text-[2rem]`}>
                      {plans.premium.title}
                    </h4>
                  </div>

                  <p className="text-lg font-medium">
                    {plans.premium.subtitle}
                  </p>
                </div>
                <div className="h-[1px] bg-blue-500 bg-opacity-30 my-6"></div>
                <div className="">
                  <p className="font-semibold mb-4">Features Included</p>
                  <ul className="flex flex-col gap-4 font-semibold">
                    {plans.premium.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <span>
                          <Dot />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p>{plans.premium.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

const plans = {
  basic: {
    title: "Basic Tier",
    subtitle: "A Place to Begin",
    summary:
      "Perfect for those who want to start small and preserve their most important words and memories.",
    features: [
      "2 full Capsoools",
      "Up to 2 letters",
      "Up to 2 images",
      "Up to 2 videos",
      "Up to 2 documents",
    ],
  },

  standard: {
    title: "Standard Tier",
    subtitle: "More Memories, More Connections",
    summary:
      "A balanced plan for preserving multiple memories across different people or moments.",
    features: [
      "4 full Capsoools",
      "Up to 4 letters",
      "Up to 4 images",
      "Up to 4 videos",
      "Up to 4 documents",
    ],
  },

  premium: {
    title: "Premium Tier",
    subtitle: "Unlimited Memories, Unlimited Love",
    summary:
      "The complete experience — create as many Capsoools as you like and preserve your legacy without limits.",
    features: [
      "Unlimited Capsoools",
      "Unlimited letters",
      "Unlimited images",
      "Unlimited videos",
      "Unlimited documents",
    ],
  },
};

console.log(plans);
