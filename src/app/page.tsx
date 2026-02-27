import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import AgentCategories from "@/components/sections/AgentCategories";
import HowItWorks from "@/components/sections/HowItWorks";
import Metrics from "@/components/sections/Metrics";
import IndustryFocus from "@/components/sections/IndustryFocus";
import Integrations from "@/components/sections/Integrations";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DistroAgents",
  url: "https://distroagents.com",
  description:
    "Purpose-built AI agents for wholesale distributors. Automate sales, orders, collections, pricing, and compliance.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most customers are live with their first agent in 2-3 weeks. Full deployment typically takes 4-8 weeks depending on integration complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to replace my current systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. DistroAgents integrate with your existing ERP, WMS, and ordering systems. We work alongside your current tech stack.",
      },
    },
    {
      "@type": "Question",
      name: "What if an agent makes a mistake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All agents have configurable guardrails and approval thresholds. High-value or unusual actions can be flagged for human review. You control the level of autonomy.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SOC 2 Type II certified. Data encrypted in transit and at rest. We never share your data with competitors or use it to train models for other customers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I start with just one agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Many customers start with a single high-impact agent (like Collections or Order Management) and expand from there.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support EDI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support EDI 850, 855, 856, 810 and other common document types. Our agents can read, process, and generate EDI transactions.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Problem />
      <Solution />
      <AgentCategories />
      <HowItWorks />
      <Metrics />
      <IndustryFocus />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
