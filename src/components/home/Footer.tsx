import { mauline } from "@/utils/fonts";
import React from "react";

export default function Footer() {
  return (
    <section className="px-4 lg:px-12 py-12">
      <div className="py-[4rem]  px-4 lg:px-20 lg:max-w-[1200px] mx-auto rounded-3xl lg:rounded-[2.5rem] border border-blue-300 bg-blue-500 bg-opacity-10">
        <div className="lg:flex gap-y-6 grid grid-cols-12 justify-between">
          <div className="col-start-1 col-end-13">
            <h2 className={`text-3xl ${mauline.className} text-blue500`}>
              Capsoool
            </h2>
          </div>

          <div className="flex row-start-2 col-start-1 col-end-4 gap-20">
            <div className="">
              <p className={`${mauline.className} mb-5 text-xl`}>Platform</p>

              <div className="flex flex-col gap-3">
                {["Features", "Setup", "FAQs", "Contact"].map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>

            <div className="col-start-4 col-end-8">
              <p className={`${mauline.className} mb-5 text-xl`}>Legal</p>

              <div className="flex flex-col gap-3">
                {["Privacy Policy", "Terms of Service", "Cookies"].map(
                  (item, i) => (
                    <p key={i}>{item}</p>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="col-start-10 col-end-13">
            <div className="">
              <p className={`${mauline.className} mb-5 text-xl`}>Our Socials</p>

              <div className="flex flex-col gap-3">
                {["Instagram", "Facebook", "X"].map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
