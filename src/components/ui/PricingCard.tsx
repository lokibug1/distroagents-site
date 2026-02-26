import Button from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
  ctaHref?: string;
}

export default function PricingCard({
  name,
  price,
  period = "/mo",
  features,
  highlighted = false,
  cta = "Get Started",
  ctaHref = "/contact",
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
        highlighted
          ? "glass glow-blue border-blue-500/20 scale-[1.02]"
          : "glass hover:glow-sm hover:-translate-y-1"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-[12px] font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-1">
        <span className={`text-[13px] font-semibold uppercase tracking-wider ${highlighted ? "text-blue-400" : "text-slate-500"}`}>
          {name}
        </span>
      </div>

      <div className="flex items-baseline gap-1 mb-6 mt-2">
        <span className="text-[48px] font-bold text-white leading-none tracking-tight">{price}</span>
        {price !== "Custom" && <span className="text-[15px] text-slate-500">{period}</span>}
      </div>

      <ul className="space-y-3.5 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-[14px]">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-[1px] ${highlighted ? "bg-blue-500/20" : "bg-white/[0.06]"}`}>
              <svg className={`w-3 h-3 ${highlighted ? "text-blue-400" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Button href={ctaHref} variant={highlighted ? "primary" : "secondary"} className="w-full justify-center">
        {cta}
      </Button>
    </div>
  );
}
