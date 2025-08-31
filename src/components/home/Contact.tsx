import { mauline } from "@/utils/fonts";
import { Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact-us"
      className="container lg:max-w-[1200px] mx-auto px-4 py-[5rem]"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <p
            className={`${mauline.className} mb-4 lg:mb-12 text-[2.5rem] lg:text-[80px] leading-none`}
          >
            Get in Touch
          </p>

          <div className="space-y-4">
            <p className="max-w-[450px] text-lg leading-[200%]">
              Have questions or feedback about Capsoools? We’d love to hear from
              you. Reach out and let’s build a future where memories last
              forever.
            </p>
          </div>

          <div className="flex mt-4 lg:mt-12 gap-8">
            <Link
              href={"mailto:support@capsoool.com"}
              className="w-10 h-10 inline-block border rounded-xl p-1 border-blue-300 bg-blue-500 bg-opacity-10 text-blue-300"
            >
              <Mail width={"100%"} height={"100%"} />
            </Link>
            <Link
              href={"https://www.instagram.com/capsoool_app"}
              target="_"
              className="w-10 h-10 inline-block border rounded-xl p-1 border-blue-300 bg-blue-500 bg-opacity-10 text-blue-300"
            >
              <Instagram width={"100%"} height={"100%"} />
            </Link>
            <Link
              href={"https://x.com/Capsoool_App"}
              target="_"
              className="w-10 h-10 inline-block border rounded-xl p-1 border-blue-300 bg-blue-500 bg-opacity-10 text-blue-300"
            >
              <Twitter width={"100%"} height={"100%"} />
            </Link>
          </div>
        </div>

        <div className="flex-1 border-2 border-blue-300 border-opacity-50 px-6 lg:px-12 py-10 rounded-3xl bg-blue-500 bg-opacity-10 w-full max-w-[550px]">
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
