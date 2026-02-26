import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Integrate with your existing ERP, WMS, or ordering system. We support all major platforms.",
    details: ["NetSuite, SAP, Dynamics", "Sage, Acumatica, QuickBooks", "Produce Pro, Seasoft, BlueLink", "EDI, API, or flat-file"],
  },
  {
    number: "02",
    title: "Configure",
    description: "Choose which agents to deploy. Set your business rules and guardrails.",
    details: ["Margin thresholds", "Approval workflows", "Escalation triggers", "Customer segmentation"],
  },
  {
    number: "03",
    title: "Deploy",
    description: "Agents go live in days, not months. Start with one or deploy the full suite.",
    details: ["Start with 1-3 agents", "Prove value, then expand", "2-4 week go-live", "Full rollout support"],
  },
  {
    number: "04",
    title: "Optimize",
    description: "Real-time dashboards show performance. Continuous learning improves results.",
    details: ["Per-agent dashboards", "ROI tracking built-in", "Continuous improvement", "Regular optimization"],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Process"
          title="How It Works"
          subtitle="Up and running in weeks, not months. No rip-and-replace required."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+4px)] w-[calc(100%-56px)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-transparent" />
                </div>
              )}

              <div className="relative rounded-2xl glass p-6 h-full hover:glow-sm transition-all duration-300">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/[0.1] flex items-center justify-center">
                    <span className="text-[14px] font-bold text-blue-400">{step.number}</span>
                  </div>
                  <h3 className="text-[18px] font-bold text-white tracking-tight">{step.title}</h3>
                </div>

                <p className="text-[14px] text-slate-400 mb-5 leading-relaxed">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-[12px] text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-blue-500/50" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
