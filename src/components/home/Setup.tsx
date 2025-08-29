"use client";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import QrScan from "../icons/qr-scan";
import { useRef } from "react";
import Image from "next/image";
import { mauline, poppins } from "@/utils/fonts";
// import { maulineLocal, poppins } from "@/constants/fonts";

export default function SetupSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className={`m min-h-[100dvh] 2xl:min-h-[auto] max-h- [56.25rem] font-sans  z-[2] text-bento-purple-dark relative py[3rem] xl: py-[5rem] px-4 md:px-8 2xl:py-[9rem] lg:px-16 2xl:px-32 setup-section bg-blue-500  bg-opacity-5`}
    >
      <div>
        <div className="text-center">
          <h2
            className={`mb-4 lg:mb-8 text-center text-[2.5rem] leading-none lg:text-[80px] md:header-1 ${mauline.className}`}
          >
            Easy Setup
          </h2>
          <p
            className={`b3-regular md:b1-regular text-shadow text-bento-purple-dark ${poppins.className}`}
          >
            It is as easy as 1-2-3
          </p>
        </div>
        <div
          className={`flex justify-center  relative text-[] ${mauline.className}`}
        >
          <div className="absolute hidden md:block w-full h-full">
            <div className="w-full h-full flex px[6rem] justify-between items-center z-40">
              <div className="max-w-[266px] 2xl:max-w-[400px] font-mauline step-title">
                <h2 className={`header-4 ${mauline.className}`}>
                  Step <span className="step-step">1</span>
                </h2>
                <div
                  className={`header-2 leading-tight relative ${mauline.className}`}
                >
                  <div className="setup-header-0">
                    Create an Account
                    <div className="mt-3"></div>
                  </div>
                  <p className="setup-header-1 opacity-0 absolute top-0">
                    Create Your First Capsoool
                  </p>
                  <p className="setup-header-2 opacity-0 absolute top-0">
                    Add Recipients
                  </p>
                </div>
              </div>

              <div className="max-w-[296px] text-shadow  2xl:max-w-[420px] b2-regular relative font-sans">
                <div
                  className={`absolute step-content step-2 top-0 left-0 opacity-0 ${poppins.className}`}
                >
                  <p className="">
                    Choose who each Capsoool will be delivered to.
                  </p>
                  <br />
                  {/* <br /> */}
                  <p className="">
                    Family, friends, or loved ones — only you decide who
                    receives it.
                  </p>
                </div>

                <div
                  className={`absolute top-0 step-content step-1 left-0 opacity-0 ${poppins.className}`}
                >
                  <p className="">
                    Write a message, add photos, record a video, or upload
                    documents.
                  </p>
                  <br />
                  {/* <br /> */}
                  <p className="">
                    Each Capsoool is your personal memory capsule — unique and
                    timeless.
                  </p>
                </div>

                <div
                  className={`step-content step-0 opacity0 ${poppins.className}`}
                >
                  <p className="">
                    Sign up in seconds and set up your profile.
                  </p>
                  <br />
                  {/* <br /> */}
                  <p className="">
                    This is your secure space for preserving memories and
                    messages.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center mt-10 md:mt-0 md:gap-8">
            <div className="text-[80px] cursor-pointer prev w-9 h-9 md:w-14 md:h-14 flex justify-center items-center bg-blue-500 bg-opacity-10 border border-blue-300 rounded-full shadow-md">
              <div className="w-7 h-7 md:w-10 md:h-10 text-blue-500">
                <ChevronLeft width={"100%"} height={"100%"} />
              </div>
            </div>

            <div className=" max-w-[255px] md:max-w-full">
              <div className="max-w[266px] text-center md:hidden font-mauline step-title">
                <h2 className={`header-5 mb-2 ${mauline.className}`}>
                  Step <span className="step-step">1</span>:
                </h2>
                <div
                  className={`header-4 text-center leading-tight relative ${mauline.className}`}
                >
                  <p className="setup-header-0 ">Create an Account</p>
                  <p className="setup-header-1 opacity-0  w-full absolute top-0">
                    Create Your First Capsoool
                  </p>
                  <p className="setup-header-2 opacity-0 w-full absolute top-0">
                    Add Recipients
                  </p>
                </div>
              </div>
              <div className="w-[247px]  md:w-[21.9375rem] h-[456px] relative mx-auto   md:h-[40.4375rem]  flex justify-center items-center overflow-hidden">
                <div className="absolute  w-[210px] h-[420px] md:w-[290px]   md:h-[590px] ">
                  <div
                    className="w-full h-full"
                    // style={{ borderWidth: 4, borderColor: "red" }}
                  >
                    <Swiper
                      modules={[Navigation]}
                      navigation={{
                        enabled: true,
                        nextEl: ".next",
                        prevEl: ".prev",
                      }}
                      className="absolute"
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // overflow: "visible",
                        // borderWidth: 4,
                      }}
                      slidesPerView={1}
                      onSlideChange={(e) => {
                        console.log(e.activeIndex);
                        gsap.to(".step-step", {
                          text: `${e.activeIndex + 1}`,
                        });
                        if (e.activeIndex === 0) {
                          gsap.to(".step-0", { opacity: 1 });
                          gsap.to(".step-1", { opacity: 0 });
                          gsap.to(".step-2", { opacity: 0 });
                          gsap.to(".setup-header-0", { opacity: 1 });
                          gsap.to(".setup-header-1", { opacity: 0 });
                          gsap.to(".setup-header-2", { opacity: 0 });
                          // gsap.to(containerRef.current, {
                          //   backgroundColor: bgColors[0],
                          // });
                          // gsap.to(containerRef.current, { color: "#27005A" });
                        }

                        if (e.activeIndex === 1) {
                          gsap.to(".step-0", { opacity: 0 });
                          gsap.to(".step-1", { opacity: 1 });
                          gsap.to(".step-2", { opacity: 0 });
                          gsap.to(".setup-header-0", { opacity: 0 });
                          gsap.to(".setup-header-1", { opacity: 1 });
                          gsap.to(".setup-header-2", { opacity: 0 });
                          // gsap.to(containerRef.current, {
                          //   backgroundColor: bgColors[1],
                          // });
                          // gsap.to(containerRef.current, { color: "#503500" });
                        }

                        if (e.activeIndex === 2) {
                          gsap.to(".step-0", { opacity: 0 });
                          gsap.to(".step-1", { opacity: 0 });
                          gsap.to(".step-2", { opacity: 1 });
                          gsap.to(".setup-header-0", { opacity: 0 });
                          gsap.to(".setup-header-1", { opacity: 0 });
                          gsap.to(".setup-header-2", { opacity: 1 });
                          // gsap.to(containerRef.current, {
                          //   backgroundColor: bgColors[2],
                          // });
                          // gsap.to(containerRef.current, { color: "#163600" });
                        }

                        if (e.activeIndex == 2) {
                          gsap.to(".third-slide-container", {
                            right: 0,
                            duration: 0.3,
                          });
                        } else {
                          gsap.to(".third-slide-container", {
                            right: "-100%",
                            duration: 0.3,
                          });
                        }
                      }}
                    >
                      <SwiperSlide style={{ height: 500 }}>
                        <Image
                          src={"/images/security-phone-mockup.png"}
                          width={"1000"}
                          height={"1000"}
                          alt="Secure"
                        />
                      </SwiperSlide>
                      <SwiperSlide style={{ height: 500 }}>
                        <Image
                          src={"/images/home-phone-mockup.png"}
                          width={"1000"}
                          height={"1000"}
                          alt="Secure"
                        />
                      </SwiperSlide>
                      <SwiperSlide style={{ height: 500 }}>
                        <Image
                          src={"/images/home-phone-mockup.png"}
                          width={"1000"}
                          height={"1000"}
                          alt="Secure"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[80px] next cursor-pointer w-9 h-9 md:w-14 md:h-14 flex justify-center items-center bg-blue-500 bg-opacity-10 border border-blue-300 rounded-full shadow-md">
              <div className="w-7 h-7 md:w-10 md:h-10 text-blue-500">
                <ChevronRight width={"100%"} height={"100%"} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[360px] mx-auto mt-4 text-center md:hidden md:text-[18px] relative font-sans">
          <div className="absolute step-content step-2 top-0 left-0 opacity-0">
            <p className="">Choose who each Capsoool will be delivered to.</p>
            <br />
            {/* <br /> */}
            <p className="">
              Family, friends, or loved ones — only you decide who receives it.
            </p>
          </div>

          <div className="absolute top-0 step-content step-1 left-0 opacity-0">
            <p className="">
              Write a message, add photos, record a video, or upload documents.
            </p>
            <br />
            {/* <br /> */}
            <p className="">
              Each Capsoool is your personal memory capsule — unique and
              timeless.
            </p>
          </div>

          <div className="step-content step-0 opacity0">
            <p className="">Sign up in seconds and set up your profile.</p>
            <br />
            {/* <br /> */}
            <p className="">
              This is your secure space for preserving memories and messages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
