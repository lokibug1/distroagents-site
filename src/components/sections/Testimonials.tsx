import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote: "We were drowning in phone orders. The Order Agent now handles 70% of incoming orders automatically. My team finally has time to actually sell.",
    name: "VP of Sales",
    role: "Regional Food Distributor, NJ",
  },
  {
    quote: "The Collections Agent recovered $340K in aging receivables in the first 90 days. It paid for itself 10x over.",
    name: "CFO",
    role: "Beverage Distributor, PA",
  },
  {
    quote: "Pricing used to be a black box. Now I can see margin impact in real-time and my reps can't give away the farm anymore.",
    name: "Owner",
    role: "Specialty Foods Distributor, NY",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-section-alt">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Testimonials"
          title="What Distributors Are Saying"
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} quote={t.quote} name={t.name} role={t.role} />
          ))}
        </div>
      </div>
    </section>
  );
}
