import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    title: "Food & Beverage",
    features: ["Perishable inventory management", "FSMA/FDA compliance automation", "Lot tracking and recall readiness", "Temperature monitoring integration"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Broadline & Specialty",
    features: ["Multi-category catalog management", "Complex pricing tiers", "Restaurant and foodservice workflows", "Menu-driven demand forecasting"],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Paper, Packaging & Jan-San",
    features: ["High-SKU catalog navigation", "Contract pricing management", "Scheduled delivery optimization", "Sustainability reporting"],
    gradient: "from-orange-500 to-orange-600",
  },
  {
    title: "Produce & Perishables",
    features: ["Market-based pricing updates", "Quality grading integration", "FIFO/expiration management", "Shrink reduction"],
    gradient: "from-cyan-500 to-cyan-600",
  },
];

export default function IndustryFocus() {
  return (
    <section className="py-24 lg:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Industries"
          title="Built for How You Actually Distribute"
          subtitle="Industry-specific workflows, not generic templates."
        />
        <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {industries.map((industry) => (
            <div key={industry.title} className="group relative rounded-2xl glass p-8 hover:glow-sm transition-all duration-300">
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${industry.gradient} opacity-30 group-hover:opacity-60 transition-opacity`} />
              <h3 className="text-[18px] font-bold text-white mb-5 tracking-tight">{industry.title}</h3>
              <ul className="space-y-3">
                {industry.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-slate-400">
                    <svg className="w-4 h-4 text-green-400/70 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
