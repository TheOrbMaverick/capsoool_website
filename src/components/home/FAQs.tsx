import { faqs } from "@/constants/faqs";
import { mauline } from "@/utils/fonts";
import { ChevronDown } from "lucide-react";
import React from "react";
import Accordion from "../Accordion";

export default function FAQs() {
  return (
    <section className="container mx-auto py-[5rem]">
      <div
        className={`${mauline.className} text-[2.5rem] lg:text-[80px] leading-none text-center`}
      >
        <p>Got Questions?</p>
        <p>
          We've Got <span className="text-blue-500">Answers</span>
        </p>
      </div>

      <div className="flex flex-col items-center mt-12 px-4 gap-4 lg:gap-8">
        {faqs.map(({ question, answer }, index) => (
          <Accordion content={answer} triggerText={question} key={index} />
        ))}
      </div>
    </section>
  );
}
