import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-navy-800/80 to-purple-600/10" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)`
          }} />
          <div className="absolute inset-0 border border-white/[0.06] rounded-3xl" />

          <div className="relative px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.1] tracking-tight mb-5">
              Ready to Put Your Distribution<br className="hidden sm:block" /> Business on Autopilot?
            </h2>
            <p className="text-[17px] text-slate-300/80 max-w-xl mx-auto mb-10 leading-relaxed">
              See how DistroAgents can recover revenue, reduce costs, and free your team to focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/book-demo" size="lg">
                Book a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
              <Button href="/use-cases" variant="secondary" size="lg">
                Explore All Agents
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
