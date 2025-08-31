import { mauline } from "@/utils/fonts";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-[1200px] mx-auto pt-8 pb-20 px-4">
      <div className="">
        <h3
          className={`text-center text-[2rem] lg:text-[80px] ${mauline.className}`}
        >
          Disclaimer
        </h3>
        <p className="lg:text-xl font-semibold text-center underline decoration-double decoration-blue-300">
          No Legal Advice
        </p>
      </div>

      <div className="max-w-[800px] mx-auto leading-[200%] mt-16 space-y-4">
        <p>
          Capsoool is designed to help users store and share personal letters,
          images, videos, and documents with loved ones. It is not a legally
          binding will, estate plan, or substitute for professional legal
          advice.
        </p>
        <p>
          Users should consult a qualified attorney to create a legally valid
          will or estate plan. Capsoool and Oneredbox Properties assume no
          responsibility for interpreting your stored content as a legal will or
          testamentary instrument.
        </p>
      </div>
    </div>
  );
}
