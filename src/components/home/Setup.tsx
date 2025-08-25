"use client";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, Heart, MapPin, Scan } from "lucide-react";
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
      className={`m min-h-[100dvh] 2xl:min-h-[auto] max-h- [56.25rem] font-sans  z-[2] text-bento-purple-dark relative py[3rem] xl: py-[5rem] px-4 md:px-8 2xl:py-[9rem] lg:px-16 2xl:px-32 setup-section bg-white  bg-opacity-5`}
    >
      <div>
        <div className="text-center">
          <h2
            className={`mb-4 lg:mb-8 text-center text-[2.5rem] leading-none lg:text-[80px] md:header-1 ${mauline.className}`}
          >
            A Glimpse inside <span className="text-blue-500">Capsoools</span>
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
            <div className="text-[80px] cursor-pointer prev w-9 h-9 md:w-14 md:h-14 flex justify-center items-center bg-white rounded-full shadow-md">
              <div className="w-7 h-7 md:w-10 md:h-10">
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
              <div className="w-[247px]  md:w-[21.9375rem] h-[456px] relative mx-auto  md:h-[40.4375rem]  flex justify-center items-center overflow-hidden">
                <div className="absolute  -right-full third-slide-container w-full h-full flex justify-center items-center">
                  <div className="w-[250px] h-[543px] relative">
                    <div className="absolute top-[90px] -right-0 md:-right-8 z-[10000] ">
                      <div className="p-1 px-2 md:p-3 rounded-full bg-white flex items-center gap-2 shadow-md">
                        <Image
                          width={16}
                          height={16}
                          src="/images/fire.png"
                          alt="fire illustration"
                          className="md:hidden"
                        />
                        <Image
                          width={24}
                          height={24}
                          src="/images/fire.png"
                          alt="fire illustration"
                          className="hidden md:block"
                        />
                        <p className="text-sm md:text-base">
                          2764 photos shared
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-[180px] left-0 md:-left-7 z-50 ">
                      <div className="p-1 px-2 md:p-3 rounded-full bg-white flex items-center gap-2 shadow-md">
                        <Image
                          width={16}
                          height={16}
                          src="/images/party-popper.png"
                          alt="party pop"
                          className="md:hidden"
                        />
                        <Image
                          width={24}
                          height={24}
                          src="/images/party-popper.png"
                          alt="party pop"
                          className="hidden md:block"
                        />
                        <p className="text-sm md:text-base">
                          231 wishes shared
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-24 md:bottom-8 -right-0 md:-right-10 z-50 ">
                      <div className="p-1 px-2 md:p-3 rounded-full bg-white flex items-center gap-2 shadow-md">
                        <Image
                          width={16}
                          height={16}
                          src="/images/red-heart.png"
                          alt="party pop"
                          className="md:hidden"
                        />
                        <Image
                          width={24}
                          height={24}
                          src="/images/red-heart.png"
                          alt="party pop"
                          className="hidden md:block"
                        />
                        <p className="text-xs md:text-base">
                          183 guests liked this video
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute  w-[210px] h-[420px] md:w-[290px] border-4 border-blue-600  md:h-[590px] [mask-image:url('/images/Rectangle112.png')] z[100000] [mask-size:cover] [mask-position:center] [mask-repeat:no-repeat] ">
                  <div
                    className="w-full h-full border-4 border-blue-600"
                    style={{ borderWidth: 4, borderColor: "red" }}
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
                      <SwiperSlide
                        className=""
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          // width: "250px",
                          // height: "543px",
                        }}
                      >
                        <div className="w-full h-full md:w-[250px] md:h-[543px] rounded3xl  bg-[url('/images/step1-bg.webp')] bg-opacity-10 bg-blend-darken bg-[length:200%_100%] bg-center bg-no-repeat relative overflow-hidden">
                          <div className="absolute bg-white bg-opacity-85 z-30 w-full h-full flex flex-col justify-end pb-6 items-center ">
                            <div className="flex flex-col scale-75 md:scale-100 relative top-[20%] md:top-0  items-center w-full">
                              <div className="flex flex-col items-center">
                                <div className="w-[46px] h-[46px] rounded-full bg-[#9747FF] flex justify-center items-center">
                                  <Heart
                                    fill="#fcf3f5"
                                    stroke="#fcf3f5"
                                    width={24}
                                    height={24}
                                  />
                                </div>
                                <div className="h-8 inline-block w-[5px] rounded-full bg-[#9747FF] -translate-y-[5%]"></div>
                              </div>

                              <div className="">
                                <h3 className="text-[#2E0464] text-[18px] text-center">
                                  Will &amp; Janet
                                </h3>
                              </div>

                              <div className="flex flex-col items-center">
                                <div className="h-8 inline-block w-[5px] rounded-full bg-[#9747FF] translate-y-[5%]"></div>
                                <div className="w-[46px] h-[46px] rounded-full bg-[#9747FF] flex justify-center items-center">
                                  <MapPin
                                    stroke="#fcf3f5"
                                    width={24}
                                    height={24}
                                  />
                                </div>
                                <div className="h-8 inline-block w-[5px] rounded-full bg-[#9747FF] -translate-y-[5%]"></div>
                              </div>

                              <h3 className="text-[18px] text-[#2E0464]">
                                The Wildflower Ridge
                              </h3>

                              <div className="flex flex-col items-center w-full">
                                <div className="h-8 inline-block w-[5px] rounded-full bg-[#9747FF] translate-y-[5%]"></div>
                                <div className="relative w-full flex justify-center">
                                  <div className="absolute w-full h-full flex z-[100  ] items-center px-4">
                                    <div className="flex justify-between w-full">
                                      <div className="w-6 h-6 rounded-full bg-[#CB006D4D] bg-opacity-30"></div>
                                      <div className="w-6 h-6 rounded-full bg-[#73B760]"></div>
                                      <div className="w-[24px] h-[24px] rounded-full z-50 relative bg-[#FFAA00]"></div>
                                      <div className="w-[24px] h-[24px] rounded-full z-50 relative bg-[#DFC8FF]"></div>
                                      <div className="w-[24px] h-[24px] rounded-full bg-[#9AAEFF]"></div>
                                    </div>
                                  </div>
                                  <div className="w-[46px] h-[46px] relative rounded-full border-[5px] border-[#9747FF] bg-[#FCFCFC] flex justify-center items-center overflow-hidden"></div>
                                </div>
                                <div className="h-8 inline-block w-[5px] rounded-full bg-[#9747FF] -translate-y-[5%]"></div>
                              </div>
                              <h3 className="text-center text-[#2E0464]">
                                Yellow Theme
                              </h3>
                            </div>
                            <button className="px-4 py-1 md:px-8 md:py-2 rounded-lg bg-[#9747FF] mt-10 text-white">
                              Set Up
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className=""
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div className="w-full h-full md:w-[250px] relative md:h-[543px] overflow-hidden ">
                          <div className="absolute w-full h-full inset-[0%]">
                            <div className="w-full h-full rounded3xl bg-center  bg-[url('/images/step2.webp')] bg-opacity-40 bg-blend-darken bg-cover  p-4 bg-no-repeat flex items-end justify-center relative overflow-hidden">
                              <div className="absolute w-full h-full bg-black bg-opacity-10"></div>
                              <div className="p-4 w-full flex justify-center flex-col items-center bg-black bg-opacity-25 rounded-2xl text-white text-center">
                                <h3 className="font-sacramento text-[24px] md:text-[32px]">
                                  Will &amp; Janet
                                </h3>
                                {/* <QrScan /> */}
                                <Scan />
                                <p className="text-sm">Scan to Join the Fun!</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 4,
                          borderColor: "blue",
                        }}
                      >
                        <>
                          <div className="absolute top-1 left-1 right-1 md:top-4 bottom-0">
                            <Image
                              fill
                              src="/images/setup/3.jpg"
                              alt="content"
                              className="w-full h-full"
                            />
                          </div>
                          <div className=" h-[543px] relative z-40  overflow-y-hidden w-full md:w-[250px]"></div>
                        </>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="relative -z-10 w-[214px] md:w-[304px] h-[415px] items-center md:h-[589px]  flex justify-center border4 border-green-400 mx-auto">
                  <Image
                    fill
                    src="/images/Rectangle11.webp"
                    alt="Mockup"
                    className=" setuphone w-full relative z-[10] h-full"
                  />
                </div>
              </div>
            </div>

            <div className="text-[80px] next cursor-pointer w-9 h-9 md:w-14 md:h-14 flex justify-center items-center bg-white rounded-full shadow-md">
              <div className="w-7 h-7 md:w-10 md:h-10">
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
