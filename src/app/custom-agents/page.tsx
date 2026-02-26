import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Custom AI Agents | Built for Your Exact Workflows",
  description:
    "Need something unique? We build bespoke AI agents tailored to your exact distribution workflows, systems, and business rules.",
};

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We map your workflows, identify automation opportunities, and define success metrics with your team.",
    color: "#60a5fa",
  },
  {
    step: "02",
    title: "Design",
    description: "Our engineers design the agent architecture, integration points, guardrails, and approval workflows.",
    color: "#06b6d4",
  },
  {
    step: "03",
    title: "Build & Test",
    description: "We build your custom agent, integrate with your systems, and test against real data in a sandbox.",
    color: "#a855f7",
  },
  {
    step: "04",
    title: "Deploy & Monitor",
    description: "Launch with configurable autonomy levels. We monitor performance and iterate based on results.",
    color: "#22c55e",
  },
];

const useCases = [
  {
    title: "Proprietary Workflows",
    description: "Automate processes unique to your business that off-the-shelf agents can\u2019t handle.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 5.205l-.75-1.3m12.643 12.88l-1.149-.964M6.254 8.821l-1.149-.964m15.352 3.22l-1.41-.514M4.954 13.565l-1.41-.514" />
      </svg>
    ),
  },
  {
    title: "Legacy System Integration",
    description: "Connect AI agents to older ERPs, custom databases, or proprietary systems with complex APIs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Industry-Specific Compliance",
    description: "Build agents that handle your specific regulatory requirements, certifications, or audit processes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Multi-System Orchestration",
    description: "Agents that coordinate across your ERP, WMS, TMS, CRM, and other systems in real-time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Specialized Analytics",
    description: "Custom reporting agents that generate the exact insights and dashboards your business needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Voice & Conversational AI",
    description: "Custom phone agents, chatbots, or messaging bots trained on your products, policies, and tone.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

export default function CustomAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[20%] w-[450px] h-[450px] bg-purple-500/[0.07] rounded-full blur-[100px] animate-float" />
          <div className="absolute top-[35%] right-[15%] w-[350px] h-[350px] bg-blue-500/[0.05] rounded-full blur-[80px] animate-float-delay" />
          <div className="absolute bottom-[20%] left-[50%] w-[300px] h-[300px] bg-cyan-500/[0.04] rounded-full blur-[80px]" />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 backdrop-blur-sm">
            <span className="text-[13px] text-purple-300">Enterprise &middot; Custom Development</span>
          </div>
          <h1 className="text-[clamp(32px,5vw,64px)] font-bold text-white leading-[1.05] tracking-tight mb-6">
            AI Agents Built for{" "}
            <span className="text-gradient">Your Exact Workflows</span>
          </h1>
          <p className="text-[clamp(16px,2vw,19px)] text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Off-the-shelf doesn&apos;t always cut it. Our engineering team builds bespoke AI agents
            tailored to your unique systems, processes, and business rules.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/book-demo" size="lg">
              Schedule a Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <Button href="/use-cases" variant="secondary" size="lg">
              View Standard Agents
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            tag="What We Build"
            title="Custom Agent Use Cases"
            subtitle="From legacy integrations to industry-specific compliance, we build agents for any challenge."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((item) => (
              <Card key={item.title} hover={false} className="p-7">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-[17px] font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[14px] text-slate-400 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Process"
            title="From Idea to Production"
            subtitle="A proven 4-step process to get your custom agent live."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((step, i) => (
              <div key={step.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+2px)] w-[calc(100%-52px)] h-px bg-gradient-to-r from-white/10 to-transparent" />
                )}
                <Card hover={false} className="p-7">
                  <div
                    className="text-[32px] font-bold mb-4 tracking-tight"
                    style={{ color: step.color }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-[14px] text-slate-400 leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="What\u2019s Included" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Dedicated Engineering Team", items: ["Senior AI engineer assigned to your project", "Weekly sync calls and progress updates", "Direct Slack/Teams channel for communication"] },
              { title: "Full Production Package", items: ["Custom agent with your business logic", "Integration with your ERP, WMS, and other systems", "Admin dashboard for monitoring and control"] },
              { title: "Testing & Guardrails", items: ["Sandbox testing with your real data", "Configurable approval workflows", "Rollback capabilities and kill switches"] },
              { title: "Ongoing Support", items: ["90-day warranty on all custom work", "Performance monitoring and optimization", "Priority support and bug fixes"] },
            ].map((section) => (
              <Card key={section.title} hover={false} className="p-7">
                <h3 className="text-[17px] font-bold text-white mb-4 tracking-tight">{section.title}</h3>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14px] text-slate-400">
                      <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-navy-800/80 to-blue-600/15" />
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(168,85,247,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)`
            }} />
            <div className="absolute inset-0 border border-white/[0.06] rounded-3xl" />

            <div className="relative px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Have a Unique Challenge?<br className="hidden sm:block" /> Let&apos;s Build the Solution.
              </h2>
              <p className="text-[17px] text-slate-300/80 max-w-xl mx-auto mb-10 leading-relaxed">
                Tell us about your workflow and we&apos;ll scope out a custom agent solution. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/book-demo" size="lg">
                  Schedule a Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Send a Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
