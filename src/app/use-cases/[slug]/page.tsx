import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCaseCategories, colorMap } from "@/lib/constants";
import AgentFlowDiagram from "@/components/diagrams/AgentFlowDiagram";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return useCaseCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = useCaseCategories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.title} Agents`,
    description: category.description,
  };
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params;
  const category = useCaseCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const colors = colorMap[category.color];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-mesh">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full blur-[100px] animate-float"
            style={{ background: `${colors.accent}10` }}
          />
          <div className="absolute top-[40%] right-[15%] w-[300px] h-[300px] bg-purple-500/[0.04] rounded-full blur-[80px] animate-float-delay" />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Link
            href="/use-cases"
            className="inline-flex items-center gap-1.5 text-[13px] text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Use Cases
          </Link>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-medium mb-5"
            style={{
              background: `${colors.accent}15`,
              color: colors.accent,
            }}
          >
            {category.agentCount} Agents
          </div>
          <h1 className="text-[clamp(30px,5vw,56px)] font-bold text-white leading-[1.08] tracking-tight mb-5">
            {category.tagline}
          </h1>
          <p className="text-[clamp(15px,2vw,18px)] text-slate-400 max-w-3xl mb-8 leading-relaxed">
            {category.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {category.keyOutcomes.map((outcome, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full text-[13px] font-medium bg-white/[0.04] border border-white/[0.06] text-slate-300"
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="The Challenge" centered={false} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl">
            {category.challenge.map((row, i) => (
              <div
                key={i}
                className="group rounded-xl glass p-5 transition-all duration-200 hover:border-red-500/10 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-[15px] font-medium text-white leading-snug">{row.problem}</h3>
                </div>
                <p className="text-[13px] text-red-400/60 leading-relaxed pl-11">{row.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="The Agents" centered={false} />
          <div className="space-y-6">
            {category.agents.map((agent, i) => (
              <Card key={agent.name} hover={false} className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-8">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl font-bold text-lg shrink-0"
                    style={{
                      background: `${colors.accent}15`,
                      color: colors.accent,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{agent.name}</h3>
                    <p className="text-[15px] text-slate-400 mt-1.5 leading-relaxed">{agent.what}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      How It Works
                    </h4>
                    <p className="text-[14px] text-slate-400 leading-relaxed mb-4">{agent.how}</p>
                    <AgentFlowDiagram agentName={agent.name} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {agent.features.map((f, j) => (
                        <li key={j} className="text-[14px] text-slate-400 flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/[0.04]">
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Pain Points Solved
                    </h4>
                    <ul className="space-y-2">
                      {agent.painPoints.map((p, j) => (
                        <li key={j} className="text-[14px] text-slate-400 flex items-start gap-2.5">
                          <span className="text-green-400 shrink-0 mt-0.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {agent.metrics.map((m, j) => (
                        <li key={j} className="text-[14px] font-medium text-white flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                            style={{ background: colors.accent }}
                          />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="ROI Calculator" centered={false} />
          <div className="rounded-2xl glass overflow-hidden max-w-4xl">
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left py-4 px-6 text-[11px] text-slate-500 font-medium uppercase tracking-wider">Metric</th>
                    <th className="text-left py-4 px-6 text-[11px] text-slate-500 font-medium uppercase tracking-wider">Before</th>
                    <th className="text-left py-4 px-6 text-[11px] text-slate-500 font-medium uppercase tracking-wider">After</th>
                    <th className="text-left py-4 px-6 text-[11px] text-slate-500 font-medium uppercase tracking-wider">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {category.roi.map((row, i) => (
                    <tr key={i} className="border-b border-white/[0.03] last:border-0">
                      <td className="py-4 px-6 text-white font-medium">{row.metric}</td>
                      <td className="py-4 px-6 text-slate-400">{row.before}</td>
                      <td className="py-4 px-6 text-green-400">{row.after}</td>
                      <td className="py-4 px-6 text-white font-semibold">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading title="Getting Started" centered={false} />
            <div className="space-y-4 mb-8">
              {[
                { label: "Recommended First Agent", value: category.recommendedFirst, bold: true },
                { label: "Why", value: category.recommendedWhy, bold: false },
                { label: "Typical Deployment Time", value: category.deploymentTime, bold: true },
              ].map((item) => (
                <div key={item.label} className="rounded-xl glass p-6">
                  <p className="text-[12px] text-slate-500 uppercase tracking-wider mb-1.5">{item.label}</p>
                  <p className={item.bold ? "text-white font-semibold" : "text-slate-300 leading-relaxed"}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion items={category.faq} />
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
                Ready to Deploy {category.shortTitle} Agents?
              </h2>
              <p className="text-[17px] text-slate-300/80 max-w-xl mx-auto mb-10 leading-relaxed">
                See how DistroAgents can transform your {category.shortTitle.toLowerCase()} operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/book-demo" size="lg">
                  Book a Demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button href="/use-cases" variant="secondary" size="lg">
                  View All Use Cases
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
