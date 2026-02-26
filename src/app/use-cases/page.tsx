import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useCaseCategories, colorMap } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Use Cases | 40+ AI Agents for Wholesale Distribution",
  description:
    "Explore 40+ purpose-built AI agents across 7 categories: Sales, Orders, Pricing, Operations, Customer Service, Finance, and Compliance.",
};

export default function UseCasesIndex() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[100px] animate-float" />
          <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-purple-500/[0.04] rounded-full blur-[80px] animate-float-delay" />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] mb-8 backdrop-blur-sm">
            <span className="text-[13px] text-slate-300">7 Categories &middot; 40+ Agents</span>
          </div>
          <h1 className="text-[clamp(32px,5vw,60px)] font-bold text-white leading-[1.08] tracking-tight mb-6">
            AI Agents Purpose-Built for{" "}
            <span className="text-gradient">Wholesale Distribution</span>
          </h1>
          <p className="text-[clamp(16px,2vw,19px)] text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Every function in your distribution business has repetitive tasks, manual processes, and
            decisions that can be automated. DistroAgents provide specialized AI for each
            area, working 24/7 to reduce costs, recover revenue, and free your team.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {useCaseCategories.map((cat) => {
              const colors = colorMap[cat.color];
              return (
                <div
                  key={cat.slug}
                  className="rounded-2xl glass overflow-hidden transition-all duration-300 hover:glow-sm"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                      <div>
                        <div
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-medium mb-4"
                          style={{
                            background: `${colors.accent}15`,
                            color: colors.accent,
                          }}
                        >
                          {cat.agentCount} Agents
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                          {cat.title}
                        </h2>
                        <p className="text-[15px] text-slate-400 max-w-xl leading-relaxed">{cat.description}</p>
                      </div>
                      <Button href={`/use-cases/${cat.slug}`} variant="secondary" size="sm">
                        Explore Agents
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>

                    {/* Agent Table */}
                    <div className="overflow-x-auto -mx-2">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/[0.06]">
                            <th className="text-left py-3 px-4 text-[12px] text-slate-500 font-medium uppercase tracking-wider">Agent</th>
                            <th className="text-left py-3 px-4 text-[12px] text-slate-500 font-medium uppercase tracking-wider">What It Does</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cat.agents.map((agent) => (
                            <tr key={agent.name} className="border-b border-white/[0.03] last:border-0">
                              <td className="py-3.5 px-4 text-white font-medium whitespace-nowrap text-[14px]">
                                {agent.name}
                              </td>
                              <td className="py-3.5 px-4 text-slate-400 text-[14px]">{agent.what}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Key Outcomes */}
                    <div className="mt-6 pt-6 border-t border-white/[0.04] flex flex-wrap gap-2">
                      {cat.keyOutcomes.map((outcome, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-[12px] font-medium bg-white/[0.04] border border-white/[0.06] text-slate-300"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not Sure Where to Start */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="Not Sure Where to Start?" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl glass p-8">
              <h3 className="text-[17px] font-bold text-white mb-5">Recommended Starting Points</h3>
              <ul className="space-y-4 text-[14px]">
                {[
                  { label: "Immediate Cash", color: "#4ade80", agents: "Collections Agent + Invoice Reconciliation Agent" },
                  { label: "Labor Savings", color: "#60a5fa", agents: "Voice Order Agent + Order Status Agent" },
                  { label: "Margin Protection", color: "#c084fc", agents: "Margin Protection Agent + Dynamic Pricing Agent" },
                  { label: "Compliance", color: "#f87171", agents: "Traceability Agent (FSMA 204)" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-1.5 w-2 h-2 rounded-full"
                      style={{ background: item.color }}
                    />
                    <div>
                      <span className="font-semibold text-white">{item.label}:</span>{" "}
                      <span className="text-slate-400">{item.agents}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-navy-800/80 to-purple-600/10" />
              <div className="absolute inset-0 border border-white/[0.06] rounded-2xl" />
              <div className="relative p-8 flex flex-col items-center justify-center text-center h-full">
                <h3 className="text-[17px] font-bold text-white mb-3">Talk to Our Team</h3>
                <p className="text-slate-400 text-[14px] mb-6 leading-relaxed">
                  We&apos;ve helped 50+ distributors identify and prioritize their agent deployments.
                </p>
                <Button href="/contact">Book a Consultation</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
