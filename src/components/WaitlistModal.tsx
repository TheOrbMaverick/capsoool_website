"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "react-toastify";
import { X, Mail, User, Loader2, Sparkles } from "lucide-react";
import { mauline } from "@/utils/fonts";
import { event as trackMetaEvent } from "@/utils/metaPixel";

// ─── Schema ────────────────────────────────────────────────────────────────
const waitlistSchema = z.object({
  name: z.string().optional(),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

// ─── Trigger ────────────────────────────────────────────────────────────────
interface WaitlistTriggerProps {
  className?: string;
  children?: React.ReactNode;
}

export function WaitlistTrigger({ className, children }: WaitlistTriggerProps) {
  return (
    <Dialog.Trigger asChild>
      <button
        id="join-waitlist-trigger"
        className={
          className ??
          `bg-blue-500 px-6 py-2 font-semibold hover:bg-transparent transition-all duration-300
           outline-2 outline-none hover:outline-blue-500 text-white rounded-full`
        }
      >
        {children ?? "Join Waitlist"}
      </button>
    </Dialog.Trigger>
  );
}

// ─── Modal Root ─────────────────────────────────────────────────────────────
interface WaitlistModalProps {
  children?: React.ReactNode;
}

export default function WaitlistModal({ children }: WaitlistModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { name: "", email: "" },
  });

  async function onSubmit(values: WaitlistFormValues) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (data.success) {
        trackMetaEvent("Lead", { content_name: "Waitlist Signup" });
        toast("🎉 You're on the list! We'll be in touch soon.", {
          type: "success",
          autoClose: 4000,
        });
        reset();
        setIsOpen(false);
      } else {
        toast(data.error ?? "Something went wrong. Please try again.", {
          type: "error",
          autoClose: 4000,
        });
      }
    } catch {
      toast("Network error. Please check your connection and try again.", {
        type: "error",
        autoClose: 4000,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      {children}

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Content */}
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[9999] w-[90vw] max-w-[480px] -translate-x-1/2 -translate-y-1/2
            rounded-3xl border border-blue-300/20 bg-[#0f0f1a]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.15)]
            p-8 focus:outline-none
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
            data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
            data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]
            duration-200"
        >
          {/* Glow accent */}
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 right-8 w-32 h-32 bg-red-400/10 rounded-full blur-2xl" />

          {/* Close button */}
          <Dialog.Close asChild>
            <button
              id="waitlist-modal-close"
              aria-label="Close waitlist modal"
              className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full
                bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all duration-200"
            >
              <X size={16} />
            </button>
          </Dialog.Close>

          {/* Header */}
          <div className="mb-7 relative">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-blue-400" />
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
                Early Access
              </span>
            </div>
            <Dialog.Title
              className={`${mauline.className} text-3xl bg-gradient-to-br from-blue-400 to-red-400 bg-clip-text text-transparent leading-tight`}
            >
              Join the Waitlist
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-white/60 leading-relaxed">
              Be the first to know when Capsoool launches. We&apos;ll send you
              an exclusive early access invite — no spam, ever.
            </Dialog.Description>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="space-y-5">
              {/* Name field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="waitlist-name"
                  className="text-sm font-medium text-white/80 flex items-center gap-1.5"
                >
                  <User size={13} className="text-blue-400" />
                  Name
                  <span className="text-white/30 font-normal text-xs">
                    (optional)
                  </span>
                </label>
                <div className="relative">
                  <input
                    id="waitlist-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    {...register("name")}
                    className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-white
                      placeholder:text-white/30 focus:outline-none focus:border-blue-500/60 focus:bg-white/8
                      transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="space-y-1.5">
                <label
                  htmlFor="waitlist-email"
                  className="text-sm font-medium text-white/80 flex items-center gap-1.5"
                >
                  <Mail size={13} className="text-blue-400" />
                  Email address
                  <span className="text-red-400 text-xs">*</span>
                </label>
                <div className="relative">
                  <input
                    id="waitlist-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    className={`w-full h-12 rounded-xl bg-white/5 border px-4 text-white
                      placeholder:text-white/30 focus:outline-none focus:bg-white/8
                      transition-all duration-200 text-sm
                      ${
                        errors.email
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-white/10 focus:border-blue-500/60"
                      }`}
                  />
                </div>
                {errors.email && (
                  <p
                    id="waitlist-email-error"
                    role="alert"
                    className="text-red-400 text-xs flex items-center gap-1"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* CTA */}
              <button
                id="waitlist-submit"
                type="submit"
                disabled={submitting}
                className="w-full h-12 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50
                  disabled:cursor-not-allowed text-white font-semibold text-sm
                  transition-all duration-200 flex items-center justify-center gap-2
                  shadow-[0_4px_24px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_32px_rgba(59,130,246,0.5)]
                  mt-2"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    Join the Waitlist
                  </>
                )}
              </button>

              <p className="text-center text-white/30 text-xs">
                By joining, you agree to receive product updates from Capsoool.
                Unsubscribe anytime.
              </p>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
