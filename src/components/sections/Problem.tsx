import SectionHeading from "@/components/ui/SectionHeading";

const problems = [
  { reality: "Sales reps spend 60% of time on admin, not selling", cost: "Lost revenue, slow growth", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { reality: "Orders come in via phone, text, email, fax\u2014chaos", cost: "Errors, delays, frustrated customers", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { reality: "AR aging keeps climbing, cash flow suffers", cost: "Working capital tied up in receivables", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { reality: "Pricing inconsistencies erode margins", cost: "1-3% margin leakage you don\u2019t see", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { reality: "Compliance paperwork never ends", cost: "Risk exposure, audit headaches", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { reality: "Customer service calls overwhelm your team", cost: "Churn from slow response times", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
];

export default function Problem() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          tag="The Problem"
          title="Distribution Runs on Razor-Thin Margins"
          subtitle="Every inefficiency directly impacts your bottom line. Here's what's costing you."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {problems.map((row, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 bg-white/[0.02] border border-white/[0.04] hover:border-red-500/20 hover:bg-red-500/[0.02] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/[0.08] flex items-center justify-center mb-4 group-hover:bg-red-500/[0.15] transition-colors">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={row.icon} />
                </svg>
              </div>
              <p className="text-[15px] text-slate-200 font-medium mb-2 leading-snug">{row.reality}</p>
              <p className="text-[13px] text-red-400/70">{row.cost}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-[15px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span>Industry average net margin is <strong className="text-white">2-5%</strong>. A 1% efficiency gain doubles profitability.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
