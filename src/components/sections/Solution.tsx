import SectionHeading from "@/components/ui/SectionHeading";
import {
  DistributionMockup,
  AgentActionMockup,
  ROIMockup,
} from "@/components/mockups/PillarMockups";

const pillars = [
  {
    title: "Distribution-Native",
    description: "Understands SKUs, cases, pallets, catch weights, and lot tracking. Speaks your language.",
    features: [
      "SKUs, cases, pallets, catch weights, lot tracking",
      "FOB, delivered pricing, bill-backs, MCBs",
      "Integration-ready for major ERPs",
    ],
    gradient: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-500/[0.1]",
    iconColor: "text-blue-400",
    Mockup: DistributionMockup,
  },
  {
    title: "Agents, Not Chatbots",
    description: "Autonomous execution, not just answers. Take real actions in your systems.",
    features: [
      "Place orders, send invoices, update inventory",
      "Make outbound calls and send follow-ups",
      "Human escalation when needed",
    ],
    gradient: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-500/[0.1]",
    iconColor: "text-purple-400",
    Mockup: AgentActionMockup,
  },
  {
    title: "Measurable ROI",
    description: "Track every dollar saved and every hour recovered with built-in dashboards.",
    features: [
      "Performance dashboards per agent",
      "Dollar-level ROI tracking",
      "Pay-for-performance options",
    ],
    gradient: "from-cyan-500 to-cyan-600",
    iconBg: "bg-cyan-500/[0.1]",
    iconColor: "text-cyan-400",
    Mockup: ROIMockup,
  },
];

export default function Solution() {
  return (
    <section className="py-24 lg:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          tag="The Solution"
          title="AI Agents That Actually Understand Distribution"
          subtitle="Unlike generic AI tools, DistroAgents are purpose-built for wholesale distribution workflows."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group relative rounded-2xl glass p-8 hover:glow-sm transition-all duration-300 hover:-translate-y-1">
              {/* Top gradient line */}
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${pillar.gradient} opacity-40 group-hover:opacity-80 transition-opacity`} />

              <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} flex items-center justify-center mb-5`}>
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${pillar.gradient}`} />
              </div>

              <h3 className="text-[20px] font-bold text-white mb-2 tracking-tight">{pillar.title}</h3>
              <p className="text-[14px] text-slate-400 mb-6 leading-relaxed">{pillar.description}</p>

              <ul className="space-y-3">
                {pillar.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-400">
                    <svg className={`w-4 h-4 ${pillar.iconColor} shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Mini mockup */}
              <pillar.Mockup />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
