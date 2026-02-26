import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const features = [
  "1 agent included",
  "$500/mo per additional agent",
  "Full ERP & system integrations",
  "Performance dashboards",
  "Email & chat support",
];

const enterpriseFeatures = [
  "Unlimited agents",
  "Dedicated integration engineer",
  "24/7 priority support",
  "Custom agent development",
  "SLA guarantees",
];

export default function Pricing() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="Start with 1 agent, add more as you see results. No hidden fees."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Standard Plan */}
          <div className="relative rounded-2xl p-8 flex flex-col glass glow-blue border-blue-500/20">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-blue-400 mb-1">Standard</span>

            <div className="flex items-baseline gap-1 mb-2 mt-2">
              <span className="text-[48px] font-bold text-white leading-none tracking-tight">$999</span>
              <span className="text-[15px] text-slate-500">/mo</span>
            </div>

            <p className="text-[14px] text-slate-400 mb-6">
              Live in under 2 weeks
            </p>

            <ul className="space-y-3 mb-8 flex-1">
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

          {/* Enterprise */}
          <div className="relative rounded-2xl p-8 flex flex-col glass hover:glow-sm hover:-translate-y-1 transition-all duration-300">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-slate-500 mb-1">Enterprise</span>

            <div className="flex items-baseline gap-1 mb-2 mt-2">
              <span className="text-[48px] font-bold text-white leading-none tracking-tight">Custom</span>
            </div>

            <p className="text-[14px] text-slate-400 mb-6">
              Large-scale deployments & custom development
            </p>

            <ul className="space-y-3 mb-8 flex-1">
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

        <p className="mt-10 text-center text-[14px] text-slate-500 max-w-2xl mx-auto">
          <strong className="text-slate-300">Performance Option:</strong>{" "}
          For Collections and Pricing agents, pay a percentage of recovered revenue or margin
          improvement. We only win when you win.
        </p>
      </div>
    </section>
  );
}
