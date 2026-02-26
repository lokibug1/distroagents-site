"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  const inputStyles =
    "w-full px-4 py-3 rounded-xl glass text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/30 transition-all duration-200 text-[14px]";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[25%] w-[400px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[100px] animate-float" />
          <div className="absolute top-[35%] right-[20%] w-[300px] h-[300px] bg-cyan-500/[0.04] rounded-full blur-[80px] animate-float-delay" />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[clamp(32px,5vw,60px)] font-bold text-white leading-[1.08] tracking-tight mb-5">
            Let&apos;s Talk About Your{" "}
            <span className="text-gradient">Distribution Goals</span>
          </h1>
          <p className="text-[clamp(16px,2vw,19px)] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re ready to deploy or just exploring, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            {/* Form Side */}
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-8">Get in Touch</h2>

              {submitted ? (
                <div className="rounded-2xl glass p-10 text-center glow-sm">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-[15px] leading-relaxed">
                    We&apos;ll get back to you within 24 hours. Looking forward to speaking with
                    you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-[13px] font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      className={inputStyles}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-[13px] mt-1.5">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      className={inputStyles}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-[13px] mt-1.5">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-slate-300 mb-2">
                        Company
                      </label>
                      <input
                        {...register("company")}
                        className={inputStyles}
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-slate-300 mb-2">
                        Phone
                      </label>
                      <input
                        {...register("phone")}
                        className={inputStyles}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className={`${inputStyles} resize-none`}
                      placeholder="Tell us about your distribution business and what you're looking to improve..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="space-y-6">
              <div className="rounded-2xl glass p-8">
                <h3 className="text-[17px] font-bold text-white mb-5">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] text-slate-500 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-white text-[15px]">{siteConfig.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-white text-[15px]">{siteConfig.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl glass p-8">
                <h3 className="text-[17px] font-bold text-white mb-4">Book a Demo</h3>
                <p className="text-[14px] text-slate-400 mb-6 leading-relaxed">
                  See DistroAgents in action with a personalized demo tailored to your distribution
                  business. We&apos;ll show you exactly which agents can drive the most impact.
                </p>
                <div className="space-y-3">
                  {[
                    "30-minute personalized demo",
                    "ROI assessment for your business",
                    "No commitment required",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-[14px] text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 to-cyan-600/10" />
                <div className="absolute inset-0 border border-blue-500/10 rounded-2xl" />
                <div className="relative p-8">
                  <h3 className="text-[17px] font-bold text-white mb-3">Quick Start</h3>
                  <p className="text-[14px] text-slate-400 leading-relaxed">
                    Most customers are live with their first agent in{" "}
                    <strong className="text-white">2-3 weeks</strong>. Full deployment typically
                    takes 4-8 weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
