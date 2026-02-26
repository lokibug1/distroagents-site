import SectionHeading from "@/components/ui/SectionHeading";
import MetricCard from "@/components/ui/MetricCard";

const metrics = [
  { value: "47%", label: "Reduction in order processing time" },
  { value: "$127K", label: "Average annual AR recovery" },
  { value: "23%", label: "Decrease in pricing errors" },
  { value: "3.2x", label: "Increase in outbound sales touches" },
  { value: "89%", label: "Inquiries resolved without human" },
  { value: "12 days", label: "Average reduction in DSO" },
];

export default function Metrics() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Results"
          title="By the Numbers"
          subtitle="Real results from real distributors using DistroAgents."
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
