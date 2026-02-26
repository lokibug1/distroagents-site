interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
  tag?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  gradient = false,
  tag,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/[0.08] border border-blue-500/[0.12] mb-5 ${centered ? "" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          <span className="text-[12px] font-medium text-blue-300 uppercase tracking-wider">{tag}</span>
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] tracking-tight mb-4 ${
          gradient ? "text-gradient" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[17px] text-slate-400 leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
