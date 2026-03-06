import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "AI for Inside Sales Teams at Industrial Distributors | DistroAgents",
  description:
    "Help inside sales teams quote faster, onboard reps in days instead of months, and stop losing deals to slow response times. Purpose-built for industrial and electrical distributors.",
};

const solutions = [
  {
    title: "Quote Builder",
    desc: "Customer request comes in. The system pulls the right SKUs, applies the correct pricing tier, checks inventory across your warehouses, and generates a formatted quote.",
    highlight: "What used to take 45 minutes takes 4.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Substitution Engine",
    desc: "Part's out of stock? The system knows which alternatives are compatible, which vendors can ship fastest, and what your customer has accepted before.",
    highlight: "No more calling the warehouse or guessing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Follow-Up Autopilot",
    desc: "Open quotes get tracked automatically. Follow-up emails get drafted in your rep's voice. Stale opportunities get flagged before they die.",
    highlight: "Nothing falls through the cracks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Rep Onboarding System",
    desc: "Every piece of institutional knowledge from your best reps — captured, organized, and available on demand. New hires ask the system instead of interrupting your closers.",
    highlight: "Ramp time: 6 months to 6 weeks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const results = [
  { metric: "Quote turnaround", before: "4 hours", after: "4 minutes" },
  { metric: "New rep ramp time", before: "6 months", after: "6 weeks" },
  { metric: "Quotes per rep per day", before: "15", after: "50+" },
  {
    metric: "Lost institutional knowledge when senior reps leave",
    before: "Everything",
    after: "Zero",
  },
];

const objections = [
  {
    objection: "We already use an ERP/CRM.",
    response:
      "Good. We don't replace your systems — we sit on top of them. Your reps keep working where they already work. The AI handles the busywork between the tools.",
  },
  {
    objection: "My team isn't technical.",
    response:
      "That's the point. They talk to it like they'd talk to a coworker. \"What's the lead time on 3/4-inch EMT from Southwire?\" No training manual required.",
  },
  {
    objection: "What about data security?",
    response:
      "Your data stays in your environment. We use enterprise-grade AI platforms with SOC 2 compliance. Nothing gets shared, nothing gets used to train public models.",
  },
  {
    objection: "We tried AI before and it didn't stick.",
    response:
      "Because it was generic. We build on your actual processes with your actual data. It works because it already knows how your team operates.",
  },
  {
    objection: "This sounds expensive.",
    response:
      "One inside sales rep costs you $60-80K/year fully loaded. We don't replace reps — we make each one 2-3x more productive. The ROI is usually visible in the first month.",
  },
];

const faqItems = [
  {
    q: "How long does implementation take?",
    a: "Most teams are live within 30 days. We spend the first week documenting your workflows and building the system. Week two and three are building and testing. Week four is deployment and training.",
  },
  {
    q: "Does this work with our ERP?",
    a: "If you're on Sage, NetSuite, SAP B1, Epicor, or most other distribution ERPs — yes. We integrate with your existing pricing, inventory, and customer data.",
  },
  {
    q: "What happens when pricing changes?",
    a: "We keep your systems current — pricing updates, new product lines, vendor changes, ongoing optimization. That's part of the service.",
  },
  {
    q: "Will my reps actually use this?",
    a: "Yes, because it's built from their actual workflows, not a generic template. They ask it questions in plain English and get real answers with real data. Most reps are power users within the first week.",
  },
  {
    q: "Can I start with just one piece?",
    a: "Absolutely. Most clients start with the Quote Builder since it has the most immediate impact. You can add the Substitution Engine, Follow-Up Autopilot, and Rep Onboarding over time.",
  },
  {
    q: "What if a senior rep leaves tomorrow?",
    a: "That's exactly the scenario we prevent. Once their knowledge is captured in the system, it stays — regardless of who walks out the door.",
  },
];

export default function InsideSalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-blue-500/[0.07] rounded-full blur-[120px] animate-float" />
          <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-cyan-500/[0.05] rounded-full blur-[100px] animate-float-delay" />
          <div className="absolute inset-0 bg-dots opacity-40" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-36 pb-24 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
              </span>
              <span className="text-[13px] text-slate-300">
                Purpose-built for industrial & electrical distributors
              </span>
            </div>

            <h1 className="text-[clamp(36px,6vw,72px)] font-bold text-white leading-[1.05] tracking-tight mb-6">
              Your Best Rep&apos;s Knowledge{" "}
              <span className="text-gradient">
                Shouldn&apos;t Retire When They Do
              </span>
            </h1>

            <p className="text-[clamp(16px,2vw,20px)] text-slate-400 max-w-3xl mb-10 leading-relaxed">
              We help inside sales teams at industrial and electrical distributors
              quote faster, onboard reps in days instead of months, and stop losing
              deals to slow response times.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button href="/book-demo" size="lg">
                Book a Free Workflow Assessment
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
              <Button href="/use-cases/sales-customer-acquisition" variant="secondary" size="lg">
                See All Sales Agents
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="Your Inside Sales Team Is Running on Muscle Memory"
            centered={false}
          />

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {[
              {
                title: "Quoting takes too long",
                desc: "Reps spend 3-4 hours a day looking up pricing, checking stock across warehouses, finding substitutions, and formatting quotes. Customers wait. Deals go cold.",
              },
              {
                title: "Knowledge lives in people's heads",
                desc: "Your senior reps know which customers get which pricing tiers, which vendors ship fastest, and which parts are interchangeable. None of it is written down.",
              },
              {
                title: "New reps take 6-12 months to ramp",
                desc: "Not because the job is hard — because there's no system. They learn by shadowing, asking questions, and making mistakes on live orders.",
              },
              {
                title: "Everyone's using AI wrong",
                desc: "Half your team has personal ChatGPT accounts. No shared context. No company data. No consistency. They're using the most powerful technology of the decade like a Google search bar.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl glass p-6 transition-all duration-200 hover:border-red-500/10 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[17px] font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[14px] text-slate-400 leading-relaxed pl-11">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="We Turn Your Team's Expertise Into an AI Operating System"
            subtitle="We document your sales team's actual workflows — how they quote, what they check, who they call, what shortcuts they use — and build AI systems that any rep can use from day one."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {solutions.map((sol) => (
              <div
                key={sol.title}
                className="rounded-2xl glass p-8 transition-all duration-200 hover:border-blue-500/15 hover:-translate-y-0.5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {sol.title}
                </h3>
                <p className="text-[15px] text-slate-400 leading-relaxed mb-4">
                  {sol.desc}
                </p>
                <p className="text-[14px] text-blue-400 font-medium">
                  {sol.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="From Chaos to System in 30 Days"
          />

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Record",
                desc: "We embed with your sales team for one week. We record workflows, transcribe calls, and document every process and shortcut they run on autopilot. We capture what your best people actually do — not what the training manual says.",
              },
              {
                step: "2",
                title: "Build",
                desc: "We turn those processes into AI agents purpose-built for your team. Not generic chatbots. Not one-size-fits-all templates. Systems trained on your pricing, your inventory, your customers, your way of doing things.",
              },
              {
                step: "3",
                title: "Deploy",
                desc: "Your team gets a dashboard that runs their day. Quotes, follow-ups, stock checks, customer history — all in one place. They react to their business instead of manually running it.",
              },
              {
                step: "4",
                title: "Maintain",
                desc: "Pricing changes. New vendors come on. Products get discontinued. We keep your systems current so they stay useful, not stale.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 font-bold text-lg shrink-0">
                    {item.step}
                  </div>
                  {i < 3 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-blue-500/20 to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="What This Looks Like in Practice" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {results.map((r) => (
              <div key={r.metric} className="rounded-2xl glass p-6 text-center">
                <p className="text-[12px] text-slate-500 uppercase tracking-wider mb-3">
                  {r.metric}
                </p>
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-slate-500 line-through text-[15px]">
                    {r.before}
                  </span>
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  <span className="text-2xl font-bold text-white">
                    {r.after}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection Handling */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="You Might Be Thinking..."
          />

          <div className="space-y-4 max-w-3xl mx-auto">
            {objections.map((obj, i) => (
              <div key={i} className="rounded-2xl glass p-6">
                <p className="text-[15px] text-white font-semibold mb-3">
                  &ldquo;{obj.objection}&rdquo;
                </p>
                <p className="text-[15px] text-slate-400 leading-relaxed">
                  {obj.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-navy-800/80 to-cyan-600/10" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(6,182,212,0.1) 0%, transparent 50%)`,
              }}
            />
            <div className="absolute inset-0 border border-white/[0.06] rounded-3xl" />

            <div className="relative px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Your Competitors Are Still{" "}
                <span className="text-gradient">Quoting Manually</span>
              </h2>
              <p className="text-[17px] text-slate-300/80 max-w-xl mx-auto mb-10 leading-relaxed">
                Book a 30-minute workflow assessment. We&apos;ll show you exactly where
                your inside sales team is losing hours every week — and what it
                would look like to get them back.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/book-demo" size="lg">
                  Book Your Free Assessment
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </div>
              <p className="mt-6 text-[13px] text-slate-500">
                No commitment. No pitch deck. Just a conversation about how your
                team actually works and where AI fits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
