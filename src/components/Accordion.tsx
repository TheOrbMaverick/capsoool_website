"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
// import ArrowDown from "./icons/arrow-down";
import { poppins } from "@/utils/fonts";
import { ChevronDown } from "lucide-react";

interface IAccordion {
  triggerText: string;
  content: string;
}

export default function Accordion({ triggerText, content }: IAccordion) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const accordionContentRef = useRef<HTMLDivElement>(null);
  const accordionContainerRef = useRef<HTMLDivElement>(null);

  const openAccordion = gsap.to(accordionContentRef.current, {
    height: accordionContentRef.current?.scrollHeight,
    paused: true,
    duration: 0.5,
    marginTop: "24px",
    //   delay: 1.4,
  });
  const closeAccordion = gsap.to(accordionContentRef.current, {
    height: 0,
    marginTop: 0,
    paused: true,
    duration: 0.5,
    //   delay: 1.4,
  });

  const accordionContainerAnimation1 = gsap.to(accordionContainerRef.current, {
    // background: "#f8f1f4",
    paused: true,
    duration: 0.5,
  });
  const accordionContainerAnimation2 = gsap.to(accordionContainerRef.current, {
    // background: "white",
    paused: true,
    duration: 0.5,
  });

  function toggleAccordionFunc() {
    const open = isOpen;
    if (!open) {
      openAccordion.play();
      accordionContainerAnimation1.play();
      setIsOpen(true);
    } else {
      closeAccordion.play();
      accordionContainerAnimation2.play();
      setIsOpen(false);
    }
  }

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div
      className={`cursor-pointer w-full max-w-[800px] accordion-container bg-blue-500 bg-opacity-10 border- border-blue-200 border-opacity-50 bgblue-500 py-3 md:py-4 px-2 md:px-6 rounded-xl mdLrounded-3xl lg:rounded-[16px] shadow-[4px_6px_4px_rgba(59,130,246,0.2)] ${
        isOpen && "shadow-lg border-2"
      }`}
      onClick={() => toggleAccordionFunc()}
      ref={accordionContainerRef}
    >
      <div className="flex items-center gap-4">
        <div className="self-start md:mt-2 items-center justify-center ">
          <span
            className={`${
              isOpen && "rotate-[180deg]"
            } transition-all [transition-duration:0.5s] inline-flex`}
          >
            <ChevronDown className="w-6 md:w-6" />
          </span>
        </div>
        <div>
          <div
            className={`accordion-trigger text-sm sm:text-base md:text-2xl 2xl:text-xl 2xl:leading-[1.4] font-medium ${poppins.className}`}
            onClick={toggleAccordionFunc}
          >
            {triggerText}
          </div>

          <div
            ref={accordionContentRef}
            className="accordion-content h-0  overflow-hidden"
          >
            <div className={` 2xl:text-base ${poppins.className}`}>
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
