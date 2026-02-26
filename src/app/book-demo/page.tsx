"use client";

import { useEffect } from "react";

export default function BookDemoPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-12 overflow-hidden bg-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[25%] w-[400px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[100px] animate-float" />
          <div className="absolute top-[35%] right-[20%] w-[300px] h-[300px] bg-cyan-500/[0.04] rounded-full blur-[80px] animate-float-delay" />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[clamp(32px,5vw,56px)] font-bold text-white leading-[1.08] tracking-tight mb-5">
            Book a <span className="text-gradient">Demo</span>
          </h1>
          <p className="text-[clamp(16px,2vw,19px)] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            See DistroAgents in action. Pick a time that works for you and we&apos;ll show you
            exactly which agents can drive the most impact for your business.
          </p>
        </div>
      </section>

      {/* Calendly + Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr,340px] gap-10 max-w-6xl mx-auto">
            {/* Calendly Embed */}
            <div className="rounded-2xl glass overflow-hidden min-h-[680px]">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/hello-distroagents/30min?hide_gdpr_banner=1&background_color=0a1628&text_color=e2e8f0&primary_color=3b82f6"
                style={{ minWidth: "320px", height: "680px", width: "100%" }}
              />
            </div>

            {/* Side Info */}
            <div className="space-y-6">
              <div className="rounded-2xl glass p-7">
                <h3 className="text-[17px] font-bold text-white mb-4">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    { time: "0-10 min", text: "We learn about your distribution business and pain points" },
                    { time: "10-20 min", text: "Live demo of the agents most relevant to you" },
                    { time: "20-30 min", text: "ROI assessment and recommended deployment plan" },
                  ].map((item) => (
                    <div key={item.time} className="flex items-start gap-3">
                      <span className="text-[12px] font-mono font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded shrink-0">
                        {item.time}
                      </span>
                      <span className="text-[14px] text-slate-400 leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl glass p-7">
                <h3 className="text-[17px] font-bold text-white mb-4">You&apos;ll Walk Away With</h3>
                <div className="space-y-3">
                  {[
                    "Clear understanding of which agents fit your business",
                    "Projected ROI based on your volume and margins",
                    "Recommended deployment timeline",
                    "No commitment required",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[14px] text-slate-400">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 mt-0.5">
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
                <div className="relative p-7">
                  <h3 className="text-[15px] font-bold text-white mb-2">Prefer to chat first?</h3>
                  <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
                    Drop us a message and we&apos;ll get back to you within 24 hours.
                  </p>
                  <a
                    href="/contact"
                    className="text-[13px] text-blue-400 font-medium hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                  >
                    Go to Contact
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
