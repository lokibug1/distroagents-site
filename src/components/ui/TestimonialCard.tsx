interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="relative rounded-2xl glass p-8 flex flex-col">
      <div className="absolute top-6 right-8 text-blue-500/[0.08]">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
        </svg>
      </div>
      <p className="text-[15px] text-slate-300 leading-relaxed mb-8 flex-1 relative">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
          <span className="text-[13px] font-bold text-blue-400">
            {name.split(" ").map((w) => w[0]).join("")}
          </span>
        </div>
        <div>
          <p className="text-[14px] font-semibold text-white">{name}</p>
          <p className="text-[12px] text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
