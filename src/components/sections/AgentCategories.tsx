import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCaseCategories, colorMap } from "@/lib/constants";

const iconPaths: Record<string, string> = {
  "chart-bar": "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  "clipboard-list": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  "currency-dollar": "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  truck: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
  "chat-bubble": "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  banknotes: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
  "shield-check": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
};

export default function AgentCategories() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Agent Platform"
          title="An Agent for Every Function"
          subtitle="40+ specialized agents across 7 core business areas, working 24/7."
          gradient
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {useCaseCategories.map((cat) => {
            const colors = colorMap[cat.color];
            return (
              <Link
                key={cat.slug}
                href={`/use-cases/${cat.slug}`}
                className="group relative rounded-2xl glass p-6 transition-all duration-300 hover:glow-sm hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <svg className={`w-5 h-5 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[cat.icon] || iconPaths["chart-bar"]} />
                    </svg>
                  </div>
                  <span className={`text-[12px] font-semibold ${colors.text} uppercase tracking-wider`}>
                    {cat.agentCount} agents
                  </span>
                </div>

                <h3 className="text-[17px] font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                  {cat.shortTitle}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{cat.description}</p>

                <div className="space-y-1.5">
                  {cat.keyOutcomes.map((outcome, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12px] text-slate-400">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.accent }} />
                      {outcome}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center gap-1 text-[13px] text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore agents
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}

          {/* Custom AI Agents card */}
          <Link
            href="/custom-agents"
            className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-blue-600/10 to-cyan-600/15" />
            <div className="absolute inset-0 border border-purple-500/20 rounded-2xl group-hover:border-purple-500/40 transition-colors" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-3.05a1 1 0 00-1.42.9v6.48a1 1 0 001.42.9l5.1-3.05a1 1 0 000-1.74zM15.42 15.17l-5.1-3.05a1 1 0 00-1.42.9v6.48a1 1 0 001.42.9l5.1-3.05a1 1 0 000-1.74z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4m0 12v4m8-10h-4M8 12H4m13.66-5.66l-2.83 2.83M9.17 14.83l-2.83 2.83m11.32 0l-2.83-2.83M9.17 9.17L6.34 6.34" />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold text-purple-400 uppercase tracking-wider">
                  Custom
                </span>
              </div>

              <h3 className="text-[17px] font-bold text-white mb-2 tracking-tight group-hover:text-purple-400 transition-colors">
                Build Custom Agents
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
                Need something unique? We build bespoke AI agents tailored to your exact workflows and systems.
              </p>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[12px] text-slate-400">
                  <div className="w-1 h-1 rounded-full bg-purple-400" />
                  Your workflows, your rules
                </div>
                <div className="flex items-center gap-2 text-[12px] text-slate-400">
                  <div className="w-1 h-1 rounded-full bg-purple-400" />
                  Any ERP or system integration
                </div>
                <div className="flex items-center gap-2 text-[12px] text-slate-400">
                  <div className="w-1 h-1 rounded-full bg-purple-400" />
                  Dedicated engineering support
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-purple-500/10 flex items-center gap-1 text-[13px] text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
