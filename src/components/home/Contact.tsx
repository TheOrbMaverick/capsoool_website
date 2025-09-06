"use client";
import { mauline } from "@/utils/fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { toast } from "react-toastify";

emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! });

const formSchema = z.object({
  name: z.string().nullable(),
  email: z.email({ error: "Enter a valid Email Address" }),
  message: z.string().min(2, { error: "Provide message content to send" }),
});

export default function Contact() {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);
  const captchaRef = useRef<ReCAPTCHA>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onCaptchaChange(value: string | null) {
    try {
      const { data } = await axios.post("/api/verify-captcha", {
        response: value,
      });
      if (data.success) {
        setIsCaptchaVerified(true);
        toast("Captcha Verified", { type: "success", autoClose: 1000 });
      } else {
        captchaRef.current?.reset();
        toast("Captcha Verification failed.", {
          type: "error",
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.log("Error Occured", error);
      toast("Captcha Verification failed.", {
        type: "error",
        autoClose: 1000,
      });
    }
  }

  async function submitMessage(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    try {
      const { name, email, message } = values;
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name,
          email,
          message,
        }
      );
      toast("Message Sent Successfully", { type: "success" });
      setValue("name", "");
      setValue("email", "");
      setValue("message", "");
    } catch (error) {
      console.log("Error", error);
      toast("Error! Message not Sent", { type: "error" });
    } finally {
      setSubmitting(false);
    }
  }
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
          <form onSubmit={handleSubmit(submitMessage)}>
            <div className="space-y-5">
              <div className="space-y-1">
                <p className="text-lg font-medium">Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent px-4 border-2 border-gray-500 w-full h-14 rounded-xl "
                  {...register("name")}
                />
                <p>{errors.name?.message}</p>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-medium">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent px-4 border-2 border-gray-500 w-full h-14 rounded-xl "
                  {...register("email")}
                />
                <p className="text-red-400 text-sm lg:text-base">
                  {errors.email?.message}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-lg font-medium">Message</p>
                <textarea
                  placeholder="Enter your message"
                  className="bg-transparent px-4 py-2 border-2 border-gray-500 w-full min-h-40 rounded-xl "
                  {...register("message")}
                />
                <p className="text-red-400 text-sm lg:text-base">
                  {errors.message?.message}
                </p>
              </div>

              {!isCaptchaVerified && (
                <div className="">
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY!}
                    onChange={onCaptchaChange}
                  />
                  <p className="text-red-500 text-sm">
                    Verify Captcha to continue
                  </p>
                  {/*  */}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting || !isCaptchaVerified}
                className="bg-blue-500 disabled:bg-blue-300/70 px-4 py-3 disabled:cursor-not-allowed rounded-lg font-semibold w-full"
              >
                {!submitting ? "Submit" : "Submitting..."}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
