import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About",
  description:
    "DistroAgents was founded to bring enterprise-grade AI to the wholesale distribution industry.",
};

const differentiators = [
  {
    title: "Distribution-First",
    description:
      "Every agent is designed for distribution workflows. We understand your ERP, your pricing structures, and your customer relationships.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Agents, Not Tools",
    description:
      "Our agents take action autonomously. They don\u2019t just surface insights\u2014they place orders, make calls, send invoices, and manage processes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Measurable Impact",
    description:
      "Every agent comes with built-in performance tracking. You see exactly what\u2019s working, what\u2019s not, and the ROI in real dollars.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[20%] w-[450px] h-[450px] bg-blue-500/[0.06] rounded-full blur-[100px] animate-float" />
          <div className="absolute top-[30%] right-[15%] w-[350px] h-[350px] bg-purple-500/[0.04] rounded-full blur-[80px] animate-float-delay" />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-[clamp(32px,5vw,60px)] font-bold text-white leading-[1.08] tracking-tight mb-6">
              Built by People Who{" "}
              <span className="text-gradient">Know Distribution</span>
            </h1>
            <p className="text-[clamp(16px,2vw,19px)] text-slate-400 leading-relaxed">
              DistroAgents was founded with a simple observation: wholesale distribution is one of
              the most important industries in America, and one of the most underserved by
              technology. While other industries got purpose-built AI solutions, distributors were
              left with generic tools that don&apos;t understand their business.
            </p>
          </div>
        </div>
      </section>

      {/* Why Distribution */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="Why Distribution?" centered={false} />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Card hover={false} className="p-8">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-white mb-3">The Problem We Saw</h3>
              <p className="text-[15px] text-slate-400 leading-relaxed">
                Distributors operate on 2-5% net margins. Every inefficiency compounds. Sales reps
                spend more time on admin than selling. Collections fall through the cracks. Orders
                come in through a dozen channels. Compliance paperwork never ends. The industry
                hasn&apos;t had access to the AI revolution. Until now.
              </p>
            </Card>
            <Card hover={false} className="p-8">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-white mb-3">Our Mission</h3>
              <p className="text-[15px] text-slate-400 leading-relaxed">
                We&apos;re building the AI infrastructure layer for wholesale distribution. Not
                generic chatbots. Not one-size-fits-all automation. Purpose-built agents that
                understand SKUs, catch weights, lot tracking, EDI, and the hundred other
                distribution-specific concepts that generic tools miss.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="What Sets Us Apart" />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentiators.map((item) => (
              <Card key={item.title} hover={false} className="p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-[17px] font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[14px] text-slate-400 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-navy-800/80 to-purple-600/10" />
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)`
            }} />
            <div className="absolute inset-0 border border-white/[0.06] rounded-3xl" />

            <div className="relative px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Ready to Transform Your{" "}
                <br className="hidden sm:block" />
                Distribution Operations?
              </h2>
              <p className="text-[17px] text-slate-300/80 max-w-xl mx-auto mb-10 leading-relaxed">
                Join 50+ distributors who are already running smarter with DistroAgents.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/book-demo" size="lg">
                  Book a Demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button href="/use-cases" variant="secondary" size="lg">
                  Explore Agents
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
