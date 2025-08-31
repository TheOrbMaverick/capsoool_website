import { mauline } from "@/utils/fonts";
import { Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="px-4 lg:px-12 py-12">
      <div className="py-[4rem]  px-4 lg:px-20 lg:max-w-[1200px] mx-auto rounded-3xl lg:rounded-[2.5rem] border border-blue-300 bg-blue-500 bg-opacity-10">
        <div className="lg:flex gap-y-6 grid grid-cols-12 justify-between">
          <div className="col-start-1 col-end-13 ">
            <div className="">
              <Link href={"/"} className="">
                <Image
                  src={"/images/logo.png"}
                  width={200}
                  height={10}
                  alt="Capsoool Logo"
                  className=""
                />
              </Link>
            </div>
            <p className="lg:max-w-[200px] mt-3">
              A Platform to Preserve you Most Precious Memories with{" "}
              <span className={`${mauline.className} text-blue-500 text-xl`}>
                Loved Ones
              </span>
            </p>
          </div>

          <div className="flex row-start-2 col-start-1 col-end-3 gap-20">
            <div className="">
              <p className={`${mauline.className} mb-5 text-xl`}>Platform</p>

              <div className="flex flex-col gap-3">
                {["Features", "Setup", "FAQs", "Contact us"].map((item, i) => (
                  <Link
                    href={`/#${item.split(" ").join("-").toLowerCase()}`}
                    key={i}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-start-5 border2 col-end-8">
            <p className={`${mauline.className} mb-5 text-xl`}>Legal</p>

            <div className="flex flex-col gap-3">
              {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
                (item, i) => (
                  <p key={i} className="text-nowrap">
                    <Link href={`${item.split(" ").join("-").toLowerCase()}`}>
                      {item}
                    </Link>
                  </p>
                )
              )}
            </div>
          </div>

          <div className="col-start-1 col-end-6 md:col-start-10 md:col-end-13">
            <div className="">
              <p
                className={`${mauline.className} hidden md:block mb-5 text-xl`}
              >
                Our Socials
              </p>

              <div className=" mt-4 flex items-center lg:grid lg:grid-cols-2 gap-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}
