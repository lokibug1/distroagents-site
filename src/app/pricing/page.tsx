import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing. Start with 1 AI agent for $999/mo, add more at $500 each. Live in under 2 weeks.",
};

const features = [
  "1 agent included",
  "$500/mo per additional agent",
  "Full ERP & system integrations",
  "Performance dashboards & reporting",
  "Email & chat support",
  "Standard onboarding",
  "Custom workflows and rules",
];

const enterpriseFeatures = [
  "Unlimited agents",
  "Dedicated integration engineer",
  "24/7 priority support",
  "Custom agent development",
  "SLA guarantees (99.9% uptime)",
  "On-site training & enablement",
  "Multi-location support",
  "Custom reporting & analytics",
];

const faq = [
  { q: "How does the per-agent pricing work?", a: "Your base plan includes 1 agent for $999/mo. Each additional agent is $500/mo. For example, 5 agents would be $999 + (4 × $500) = $2,999/mo." },
  { q: "Can I add or remove agents anytime?", a: "Yes. You can add agents instantly and remove them at the end of any billing cycle. No long-term commitments." },
  { q: "Is there a setup fee?", a: "No setup fee. We handle onboarding, integration, and configuration as part of your plan." },
  { q: "What\u2019s included in the performance pricing option?", a: "For Collections and Pricing agents, you can opt for performance-based pricing where you pay a percentage of recovered revenue or margin improvement. No upfront cost for those agents." },
  { q: "Do you offer annual billing?", a: "Yes. Annual billing comes with a 15% discount compared to monthly pricing." },
  { q: "What integrations are included?", a: "All plans include standard integrations with major ERPs (SAP, Oracle, NetSuite, Epicor), email systems, and common distribution tools. Custom integrations are available on Enterprise plans." },
];

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
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
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-[clamp(16px,2vw,19px)] text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Start with 1 agent, add more as you see results. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Standard Plan */}
            <div className="relative rounded-2xl p-8 flex flex-col glass glow-blue border-blue-500/20">
              <div className="mb-1">
                <span className="text-[13px] font-semibold uppercase tracking-wider text-blue-400">
                  Standard
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-2 mt-2">
                <span className="text-[56px] font-bold text-white leading-none tracking-tight">$999</span>
                <span className="text-[15px] text-slate-500">/mo</span>
              </div>

              <p className="text-[15px] text-slate-400 mb-8">
                Live in under 2 weeks
              </p>

              <ul className="space-y-3.5 mb-8 flex-1">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px]">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-[1px] bg-blue-500/20">
                      <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button href="/book-demo" className="w-full justify-center">
                Get Started
              </Button>
            </div>

            {/* Custom / Enterprise */}
            <div className="relative rounded-2xl p-8 flex flex-col glass hover:glow-sm hover:-translate-y-1 transition-all duration-300">
              <div className="mb-1">
                <span className="text-[13px] font-semibold uppercase tracking-wider text-slate-500">
                  Enterprise
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-2 mt-2">
                <span className="text-[56px] font-bold text-white leading-none tracking-tight">Custom</span>
              </div>

              <p className="text-[15px] text-slate-400 mb-8">
                For large-scale deployments and custom agent development
              </p>

              <ul className="space-y-3.5 mb-8 flex-1">
                {enterpriseFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px]">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-[1px] bg-white/[0.06]">
                      <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button href="/contact" variant="secondary" className="w-full justify-center">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Add-on pricing note */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="rounded-2xl glass p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold text-white mb-1">Scale as you grow</h3>
                  <p className="text-[14px] text-slate-400 leading-relaxed">
                    Start with 1 agent and add more anytime at $500/mo each. Most customers start with 1&ndash;2 agents and scale to 5&ndash;10 within the first quarter.
                  </p>
                </div>
                <div className="shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.06] px-6 py-4 text-center">
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">Example: 5 Agents</div>
                  <div className="text-[28px] font-bold text-white tracking-tight">$2,999<span className="text-[14px] text-slate-500 font-normal">/mo</span></div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-[14px] text-slate-500 max-w-2xl mx-auto">
            <strong className="text-slate-300">Performance Option:</strong>{" "}
            For Collections and Pricing agents, we offer performance-based pricing. You pay a
            percentage of recovered revenue or margin improvement.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion items={faq} />
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
                Ready to Get Started?
              </h2>
              <p className="text-[17px] text-slate-300/80 max-w-xl mx-auto mb-10 leading-relaxed">
                Book a demo and we&apos;ll help you pick the right agents for your operation.
              </p>
              <Button href="/book-demo" size="lg">
                Book a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
