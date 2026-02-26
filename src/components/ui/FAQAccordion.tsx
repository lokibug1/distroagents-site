"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl transition-all duration-300 ${
            openIndex === i
              ? "glass glow-sm"
              : "bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08]"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
          >
            <span className={`font-medium pr-4 transition-colors ${openIndex === i ? "text-white" : "text-slate-300"}`}>
              {item.q}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              openIndex === i ? "bg-blue-500/20 rotate-180" : "bg-white/[0.04]"
            }`}>
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <div className={`grid transition-all duration-300 ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-[15px] text-slate-400 leading-relaxed">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
