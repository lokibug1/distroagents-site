import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

const faqItems = [
  { q: "How long does implementation take?", a: "Most customers are live with their first agent in 2-3 weeks. Full deployment typically takes 4-8 weeks depending on integration complexity." },
  { q: "Do I need to replace my current systems?", a: "No. DistroAgents integrate with your existing ERP, WMS, and ordering systems. We work alongside your current tech stack." },
  { q: "What if an agent makes a mistake?", a: "All agents have configurable guardrails and approval thresholds. High-value or unusual actions can be flagged for human review. You control the level of autonomy." },
  { q: "Is my data secure?", a: "Yes. SOC 2 Type II certified. Data encrypted in transit and at rest. We never share your data with competitors or use it to train models for other customers." },
  { q: "Can I start with just one agent?", a: "Absolutely. Many customers start with a single high-impact agent (like Collections or Order Management) and expand from there." },
  { q: "Do you support EDI?", a: "Yes. We support EDI 850, 855, 856, 810 and other common document types. Our agents can read, process, and generate EDI transactions." },
];

export default function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading tag="FAQ" title="Frequently Asked Questions" />
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
