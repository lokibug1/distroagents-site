import Button from "@/components/ui/Button";
import HeroDashboard from "@/components/mockups/HeroDashboard";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-hero">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-blue-500/[0.07] rounded-full blur-[120px] animate-float" style={{ transform: "scale(1.1)" }} />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-purple-500/[0.05] rounded-full blur-[100px] animate-float-delay" style={{ transform: "scale(1.05)" }} />
        <div className="absolute bottom-[20%] left-[40%] w-[300px] h-[300px] bg-cyan-500/[0.04] rounded-full blur-[80px]" />
        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-dots opacity-40" />
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-[13px] text-slate-300">Trusted by 50+ distributors across the USA</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(36px,6vw,76px)] font-bold text-white leading-[1.05] tracking-tight mb-6">
            Your Distribution Business{" "}
            <span className="text-gradient">on Autopilot</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[clamp(16px,2vw,20px)] text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Purpose-built AI agents that handle sales, operations, finance, and
            customer service, end to end.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/use-cases" size="lg">
              See All Agents
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
            <Button href="/book-demo" variant="secondary" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Product Dashboard Mockup */}
        <HeroDashboard />

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden glass max-w-3xl mx-auto">
          {[
            { value: "40+", label: "Specialized Agents" },
            { value: "7", label: "Business Functions" },
            { value: "50+", label: "Distributors Served" },
            { value: "2-5%", label: "Margin Recovery" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-6 px-4 ${
                i < 3 ? "border-r border-white/[0.04]" : ""
              } ${i < 2 ? "border-b md:border-b-0 border-white/[0.04]" : i === 2 ? "border-b md:border-b-0 border-white/[0.04]" : ""}`}
            >
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="text-[12px] text-slate-500 mt-1.5 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
