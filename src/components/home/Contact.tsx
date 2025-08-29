import { mauline } from "@/utils/fonts";
import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section className="container lg:max-w-[1200px] mx-auto px-4 py-[5rem]">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <p
            className={`${mauline.className} mb-4 lg:mb-12 text-[2.5rem] lg:text-[80px] leading-none`}
          >
            Reach Out to Us
          </p>

          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              deleniti ratione, voluptatem ad soluta delectus quasi dolore
              accusamus nam ullam?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              optio nesciunt dolor error numquam libero, quam corrupti
              dignissimos architecto sed deserunt cumque quas modi odio.
            </p>
          </div>

          <div className="flex mt-4 lg:mt-12 gap-8">
            <span className="w-10 h-10 inline-block">
              <Instagram width={"100%"} height={"100%"} />
            </span>
            <span className="w-10 h-10 inline-block">
              <Twitter width={"100%"} height={"100%"} />
            </span>

            <span className="w-10 h-10 inline-block">
              <Facebook width={"100%"} height={"100%"} />
            </span>
          </div>
        </div>

        <div className="flex-1 border-2 border-blue-500 border-opacity-50 px-6 lg:px-12 py-10 rounded-3xl bg-blue-500 bg-opacity-10 w-full max-w-[550px]">
          <p className={`${mauline.className} text-2xl lg:text-3xl mb-8`}>
            Help us improve your experience
          </p>
          <div className="space-y-5">
            <div className="space-y-1">
              <p className="text-lg font-medium">Name</p>
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent px-4 border-2 border-gray-500 w-full h-14 rounded-xl "
              />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-medium">Email</p>
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent px-4 border-2 border-gray-500 w-full h-14 rounded-xl "
              />
            </div>

            <div className="space-y-1">
              <p className="text-lg font-medium">Message</p>
              <textarea
                placeholder="Enter your message"
                className="bg-transparent px-4 py-2 border-2 border-gray-500 w-full min-h-40 rounded-xl "
              />
            </div>

            <button className="bg-blue-500 px-4 py-3 rounded-lg font-semibold w-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
