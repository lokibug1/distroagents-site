import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Order Processing Automation for Distributors | DistroAgents",
  description:
    "From PO intake to order acknowledgment — fully automated. SKU matching, pricing validation, availability checks, and ERP integration for distributors running Sage, NetSuite, SAP B1, and Epicor.",
};

const processSteps = [
  {
    num: "1",
    title: "PO Intake",
    desc: "Orders come in by email, EDI, portal, or fax-to-email. The system picks them up automatically — no matter the format. PDF attachments, email body text, spreadsheet attachments, EDI 850s.",
  },
  {
    num: "2",
    title: "Line Item Parsing",
    desc: "Every line item gets extracted — SKU, quantity, unit of measure, requested ship date. Even messy, handwritten, or non-standard POs your team has been manually deciphering for years.",
  },
  {
    num: "3",
    title: "SKU Matching",
    desc: "Your customers don't use your part numbers. The system maps customer part numbers, aliases, UPCs, and manufacturer numbers to your internal SKUs automatically. New alias? Flagged once, learned permanently.",
  },
  {
    num: "4",
    title: "Pricing Validation",
    desc: "Every line gets checked against contract pricing, volume tiers, promotional pricing, matrix pricing, and customer-specific overrides. Discrepancies get flagged with full context — not silently processed.",
  },
  {
    num: "5",
    title: "Availability Check",
    desc: "Real-time inventory is checked before the order hits your warehouse. Backorders get flagged, substitutes suggested, split shipments recommended. No surprises at the pick stage.",
  },
  {
    num: "6",
    title: "Sales Order Creation",
    desc: "The validated, priced, availability-checked order gets created in your ERP automatically. Same system, same fields, same workflow. Nothing changes downstream.",
  },
  {
    num: "7",
    title: "Order Acknowledgment",
    desc: "Customers get automatic confirmation — confirmed pricing, confirmed availability, expected ship date. No more \"let me check on that and get back to you.\" Minutes, not hours.",
  },
  {
    num: "8",
    title: "Exception Routing",
    desc: "Anything the system can't resolve gets routed to the right person with full context. Not a generic alert — a specific flag like \"Line 3: PO says $14.20, contract price is $14.80.\"",
  },
];

const costTable = [
  {
    item: "Order desk payroll",
    cost: "$55K\u2013$70K per person fully loaded. Most distributors need 1 person per 50-80 orders/day.",
  },
  {
    item: "Overtime",
    cost: "Peak season, month-end, covering call-outs. 10-15% on top of base payroll.",
  },
  {
    item: "Training & turnover",
    cost: "3-6 months to train a new clerk. 25-30% annual turnover. Each departure costs $15K-$25K in lost productivity.",
  },
  {
    item: "Error costs",
    cost: "Each error costs $50-$200 in re-work, credits, and re-ships. At 5% error rate on 200 orders/day, that's $500-$2,000/day.",
  },
  {
    item: "Opportunity cost",
    cost: "Your best people are buried in data entry instead of doing work that grows the business.",
  },
];

const beforeAfter = [
  {
    scenario: "PO arrives by email",
    before: "Someone opens it, reads it, starts keying",
    after: "System picks it up, parses it, starts processing",
  },
  {
    scenario: "Customer uses their own part numbers",
    before: "Manual lookup in a spreadsheet or their head",
    after: "Auto-mapped to your SKUs, new aliases learned",
  },
  {
    scenario: "Pricing validation",
    before: "\"Let me check if they're on contract pricing...\"",
    after: "Auto-validated against contract, tier, and promo pricing. Mismatches flagged instantly",
  },
  {
    scenario: "Availability",
    before: "Discovered at pick stage — too late",
    after: "Checked before order creation, backorders flagged upfront",
  },
  {
    scenario: "Order entry into ERP",
    before: "15-20 minutes of manual keying per order",
    after: "Created automatically in under 2 minutes",
  },
  {
    scenario: "Order acknowledgment",
    before: "\"I'll get back to you\" (hours or next day)",
    after: "Auto-sent within minutes with confirmed details",
  },
  {
    scenario: "Errors",
    before: "5-8% error rate, caught downstream",
    after: "Under 1%, caught before the order hits the warehouse",
  },
  {
    scenario: "Order desk's day",
    before: "80% data entry, 20% customer service",
    after: "15% exception review, 85% real work",
  },
  {
    scenario: "Next time volume grows 30%",
    before: "Post a job listing, wait 3 months to train",
    after: "System handles it. No new hire.",
  },
];

const caseStudies = [
  {
    title: "Regional Electrical Distributor",
    size: "$45M Revenue, 3 Warehouses",
    problem:
      "4-person order desk manually processing 200+ orders/day. Customers using 3,000+ unique part number aliases only the senior clerk could decode. 6% error rate. Overtime every month-end.",
    results: [
      "170 of 200 daily orders processed without human touch (85%)",
      "Error rate dropped from 6% to 0.8%",
      "3,000+ customer part number aliases mapped automatically",
      "Order acknowledgments sent in 5 minutes vs. next-day",
      "Reallocated 2 of 4 order desk staff to customer service",
      "Absorbed 25% volume increase with zero new hires",
    ],
    savings: "Annual savings: $280K (payroll + error reduction)",
    quote:
      "My team isn't doing data entry anymore — they're actually talking to customers. And when our volume spiked in Q4, I didn't have to scramble to hire temps.",
    role: "VP of Operations",
  },
  {
    title: "National HVAC Parts Distributor",
    size: "$120M Revenue, 8 Locations",
    problem:
      "8-person order desk processing 400+ orders/day across email, EDI, and portal. Layered pricing — contract, volume tier, and regional overrides. 6 buyers spending 50%+ of their time chasing vendor PO confirmations.",
    results: [
      "Order processing time: 18 minutes to under 3 minutes",
      "Pricing validation errors eliminated",
      "Order desk reduced from 8 to 3 — 5 moved to account management",
      "Buyer admin time cut from 50% to 12%",
      "AP processing cut by 70% — 94% auto-processed",
      "Opened 2 new locations without adding back-office staff",
    ],
    savings: "Annual savings: $350K+ payroll, $400K in negotiated cost reductions",
    quote:
      "The 5 people we moved into account management generated more revenue in their first quarter than we saved on payroll.",
    role: "COO",
  },
  {
    title: "Specialty Food & Beverage Distributor",
    size: "$22M Revenue, 1 Warehouse",
    problem:
      "Owner personally processing 60-80 orders/day. Every order required checking customer-specific pricing in a spreadsheet. No time for sales or strategic work.",
    results: [
      "Owner reclaimed 25+ hours/week from order processing",
      "Orders processed and confirmed same-day instead of next-day",
      "Pricing errors dropped to near zero",
      "Zero stockouts in first 90 days after adding inventory monitoring",
      "Delayed a $65K/year office hire — indefinitely",
    ],
    savings: "Revenue up 18% ($4M) in the following quarter",
    quote:
      "I spent last quarter selling. Revenue is up 18%. That doesn't happen if I'm sitting at a desk copying line items into QuickBooks.",
    role: "Owner / CEO",
  },
];

const expansionWorkflows = [
  {
    title: "Inventory Monitoring",
    desc: "The system already checks availability on every order. Continuous monitoring — low-stock alerts, reorder recommendations, discrepancy flagging — is a configuration change, not a new project.",
    result: "Monthly close reduced from 8 days to 2",
  },
  {
    title: "Vendor Communication",
    desc: "When orders trigger backorders, the system automatically generates POs to vendors, tracks confirmations, and follows up on shipment status. Your buyers stop chasing emails.",
    result: "12+ hours/week returned to each buyer",
  },
  {
    title: "AP Automation",
    desc: "Vendor invoices get matched to POs the system already created, validated against terms and pricing already known, and routed for approval. Three-way matching becomes automatic.",
    result: "94% of invoices processed without manual intervention",
  },
];

const faqItems = [
  {
    q: "Does this work with our ERP?",
    a: "If you're on Sage 100, Sage 300, Sage X3, NetSuite, SAP Business One, Epicor Prophet 21, Epicor Eclipse, or Distribution One — yes. Running something else? We've connected to 15+ ERP systems across distribution.",
  },
  {
    q: "Our customers all use different part numbers. Can it handle that?",
    a: "That's specifically what this is built for. The system maps customer part numbers, aliases, UPCs, and manufacturer numbers to your internal SKUs. When it encounters a new alias, it flags it once and learns it permanently.",
  },
  {
    q: "Our pricing is complicated — contract, volume tiers, promos. Can it validate all that?",
    a: "Yes. We configure the system to check against your full pricing structure. When a PO comes in at the wrong price, it flags the specific discrepancy and routes it to the right person for a decision.",
  },
  {
    q: "We get orders by email, EDI, and a customer portal. Can it handle all three?",
    a: "Yes. The system ingests POs from any channel — email attachments, EDI 850s, web portal exports, even fax-to-email. Different customers can use different channels and formats.",
  },
  {
    q: "How do you handle exceptions and edge cases?",
    a: "We build your exception rules during setup. When the system hits something new, it flags it with full context — it doesn't guess. Over time, the exception rate drops as the system learns your patterns.",
  },
  {
    q: "Can my team still see everything if a customer calls?",
    a: "Yes. Every order and action lives in your ERP exactly where it always has. The order looks the same whether the system entered it or a person did.",
  },
  {
    q: "Is our data safe?",
    a: "Your data stays in your systems. We connect via secure APIs. We don't store your customer data, pricing, or order history on our servers.",
  },
  {
    q: "How is this different from ERP vendor automation?",
    a: "Your ERP vendor sells software features. We deliver outcomes. Our system handles the full cycle autonomously — PO intake, SKU matching, pricing validation, availability, order creation, and customer confirmation. You just get the results.",
  },
  {
    q: "We tried automation before and it didn't work.",
    a: "Probably because it was generic. We're built for distributors. We know what a three-way match is, we understand customer part number aliases, we've handled matrix pricing and drop-ship POs. The reason it failed before is usually that the people building it didn't understand your workflow.",
  },
  {
    q: "Can we start with just order processing and add more later?",
    a: "That's what most distributors do. Start with order processing — highest volume, highest impact. Once it's running, expanding to inventory, vendor communication, or AP is straightforward because the integrations are already in place.",
  },
];

export default function OrderProcessingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-green-500/[0.07] rounded-full blur-[120px] animate-float" />
          <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-blue-500/[0.05] rounded-full blur-[100px] animate-float-delay" />
          <div className="absolute inset-0 bg-dots opacity-40" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-36 pb-24 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[13px] text-slate-300">
                Live in 14 days. 30+ hours/week saved guaranteed.
              </span>
            </div>

            <h1 className="text-[clamp(36px,6vw,72px)] font-bold text-white leading-[1.05] tracking-tight mb-6">
              Your Order Desk Is Your{" "}
              <span className="text-gradient">Biggest Margin Leak</span>
            </h1>

            <p className="text-[clamp(16px,2vw,20px)] text-slate-400 max-w-3xl mb-10 leading-relaxed">
              We automate the entire order-to-acknowledgment cycle for wholesale
              distributors — from the moment a PO hits your inbox to the moment a
              confirmed sales order lives in your ERP. No re-keying. No pricing
              errors. No human touch required.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button href="/book-demo" size="lg">
                Book a Free Operations Review
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
              <Button href="/use-cases/order-management" variant="secondary" size="lg">
                See All Order Agents
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <SectionHeading
              title="Every Order Costs You More Than It Should"
              centered={false}
            />
            <div className="space-y-6 text-[17px] text-slate-400 leading-relaxed">
              <p>
                A PO comes in by email. Someone on your order desk opens it, reads
                the line items, looks up the SKUs — because the customer uses their
                own part numbers, not yours. Then they check pricing. Is this
                customer on contract pricing? A volume tier? A promo? The PO says
                one price, your system says another. Now it&apos;s a phone call.
              </p>
              <p>Twenty minutes later, they&apos;ve keyed one order into Sage.</p>
              <p className="text-white font-medium">
                They do this 100, 150, 200 times a day.
              </p>
              <p>
                And every time someone fat-fingers a quantity, misses a price
                override, or doesn&apos;t catch a backorder — it cascades. Wrong pick.
                Wrong shipment. Credit memo. Customer call. More time burned.
              </p>
              <p>
                A 4-person order desk is $200K\u2013$280K/year in fully loaded payroll.
                Add overtime during peak season. Add the cost of errors — credits,
                re-ships, customer churn. Add the 3-6 months it takes to train a
                replacement every time someone leaves. You&apos;re spending $300K+ per
                year on a process that&apos;s 85% mechanical.
              </p>
              <div className="rounded-xl glass p-6 mt-8">
                <p className="text-white font-semibold text-lg">
                  The problem isn&apos;t your people. It&apos;s that you&apos;re paying people to
                  do machine work — and every year you need more of them to keep up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Step Process */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Entire Order-to-Acknowledgment Cycle, Automated"
            subtitle="We plug into your existing ERP — Sage, NetSuite, SAP B1, Epicor, whatever you're running — and handle inbound order processing end to end."
          />

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl glass p-6 transition-all duration-200 hover:border-green-500/15 hover:-translate-y-0.5 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/10 text-green-400 font-bold text-lg shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="rounded-2xl glass p-8">
              <p className="text-[17px] text-slate-300 leading-relaxed">
                Your team handles the{" "}
                <span className="text-white font-semibold">
                  15% that needs human judgment
                </span>
                . The system handles the{" "}
                <span className="text-green-400 font-semibold">
                  85% that doesn&apos;t
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Doing Nothing */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Real Cost of Doing Nothing"
            subtitle="Your back-office payroll is scaling with your revenue. It shouldn't be."
          />

          <div className="rounded-2xl glass overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left py-4 px-6 text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                      Line Item
                    </th>
                    <th className="text-left py-4 px-6 text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                      What You&apos;re Actually Paying
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {costTable.map((row) => (
                    <tr
                      key={row.item}
                      className="border-b border-white/[0.03] last:border-0"
                    >
                      <td className="py-4 px-6 text-white font-medium whitespace-nowrap">
                        {row.item}
                      </td>
                      <td className="py-4 px-6 text-slate-400">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-[17px] text-slate-300 leading-relaxed">
              Revenue goes up 20%, you hire another person. Revenue goes up again,
              you hire again. Your top line grows but your operating margin stays
              flat.{" "}
              <span className="text-white font-semibold">
                The question isn&apos;t whether you can afford to automate. It&apos;s whether
                you can afford another year of scaling headcount linearly with
                volume.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Expansion Workflows */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="Order Processing Is the Starting Point"
            subtitle="Once your order cycle is automated, adjacent workflows become natural extensions — because the data and integrations are already in place."
            centered={false}
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {expansionWorkflows.map((wf) => (
              <div
                key={wf.title}
                className="rounded-2xl glass p-6 flex flex-col"
              >
                <h3 className="text-[17px] font-semibold text-white mb-3">
                  {wf.title}
                </h3>
                <p className="text-[14px] text-slate-400 leading-relaxed mb-4 flex-1">
                  {wf.desc}
                </p>
                <div className="rounded-lg bg-green-500/10 px-4 py-2.5">
                  <p className="text-[13px] text-green-400 font-medium">
                    {wf.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[15px] text-slate-500 max-w-2xl">
            Most distributors start with order processing, see the results, and
            expand from there. Each workflow builds on the one before it.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="Live in 14 Days"
            subtitle="No disruption. No new software. No rip-and-replace."
          />

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "Day 1",
                title: "Operations Review",
                desc: "We sit with your order desk and watch how orders actually flow. Where do POs come in? What formats? How does your team handle pricing lookups, customer part numbers, and exceptions? We map the real workflow.",
              },
              {
                step: "Days 2\u201310",
                title: "Build & Connect",
                desc: "We configure the system for your specific setup — your ERP, your pricing structures, your customer part number mappings, your exception rules. We connect to your email, EDI feed, and portal. Nothing gets ripped out.",
              },
              {
                step: "Days 11\u201314",
                title: "Parallel Run",
                desc: "The system runs alongside your current process. Every order gets processed by both. You compare results side by side. We tune pricing rules, SKU mappings, and exception thresholds until you're confident.",
              },
              {
                step: "Day 14+",
                title: "Go Live + Ongoing",
                desc: "The system takes over. We monitor daily, handle maintenance, and improve performance monthly. Your team shifts from processing every order to reviewing exceptions only.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 font-bold text-sm shrink-0">
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

      {/* Before & After */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Changes in the First 30 Days"
          />

          <div className="rounded-2xl glass overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left py-4 px-6 text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                      Scenario
                    </th>
                    <th className="text-left py-4 px-6 text-[11px] text-red-400/60 font-medium uppercase tracking-wider">
                      Before
                    </th>
                    <th className="text-left py-4 px-6 text-[11px] text-green-400/60 font-medium uppercase tracking-wider">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {beforeAfter.map((row) => (
                    <tr
                      key={row.scenario}
                      className="border-b border-white/[0.03] last:border-0"
                    >
                      <td className="py-4 px-6 text-white font-medium">
                        {row.scenario}
                      </td>
                      <td className="py-4 px-6 text-slate-500">{row.before}</td>
                      <td className="py-4 px-6 text-green-400">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="Distributors We've Done This For"
          />

          <div className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((cs, i) => (
              <div key={i} className="rounded-2xl glass p-8 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[12px] font-medium">
                    Case Study {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {cs.title}
                </h3>
                <p className="text-[14px] text-slate-500 mb-5">{cs.size}</p>

                <div className="mb-6">
                  <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    The Problem
                  </h4>
                  <p className="text-[15px] text-slate-400 leading-relaxed">
                    {cs.problem}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {cs.results.map((r, j) => (
                      <li
                        key={j}
                        className="text-[14px] text-slate-300 flex items-start gap-2.5"
                      >
                        <svg
                          className="w-4 h-4 text-green-400 shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-green-500/[0.06] px-5 py-3 mb-6">
                  <p className="text-[14px] text-green-400 font-semibold">
                    {cs.savings}
                  </p>
                </div>

                <blockquote className="border-l-[3px] border-blue-500/40 pl-5 py-1">
                  <p className="text-[15px] text-slate-400 italic leading-relaxed mb-2">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                  <p className="text-[13px] text-slate-500 font-medium">
                    — {cs.role}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading
            title="Built for Distributors. Nobody Else."
            centered={false}
          />

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {[
              "You're doing $10M\u2013$500M in revenue and your order volume has outgrown your team",
              "Your order desk spends 20+ hours/week re-keying POs into your ERP",
              "Your back-office payroll keeps growing but margin per order isn't improving",
              "Your customers use their own part numbers and your team spends half their time on lookups",
              "Pricing errors are showing up on invoices and costing you credits and disputes",
              "You're running Sage, NetSuite, SAP B1, or Epicor and not looking to replace it",
              "You've looked at automation before but it was too generic for distribution",
              "You're about to hire another order clerk and wondering if there's a better way",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl glass p-5 flex items-start gap-3"
              >
                <svg
                  className="w-5 h-5 text-green-400 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-[14px] text-slate-300 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-navy-800/80 to-blue-600/10" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)`,
              }}
            />
            <div className="absolute inset-0 border border-white/[0.06] rounded-3xl" />

            <div className="relative px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Your Next Order Desk Hire Costs $70K.
                <br />
                <span className="text-gradient">This Outperforms Your Whole Team.</span>
              </h2>
              <p className="text-[17px] text-slate-300/80 max-w-xl mx-auto mb-10 leading-relaxed">
                The operations review is free, takes 45 minutes, and you&apos;ll walk
                away with a clear picture of what can be automated — whether you
                work with us or not.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/book-demo" size="lg">
                  Book Your Free Operations Review
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
                No contracts. Live in 14 days. 30+ hours/week saved guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
