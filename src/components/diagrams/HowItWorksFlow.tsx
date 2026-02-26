import WorkflowDiagram from "./WorkflowDiagram";
import type { WorkflowStep } from "./WorkflowDiagram";

const steps: WorkflowStep[] = [
  {
    label: "Connect",
    description: "Integrate your ERP, WMS, or ordering system",
    icon: "connect",
  },
  {
    label: "Configure",
    description: "Choose agents and set business rules",
    icon: "configure",
  },
  {
    label: "Deploy",
    description: "Go live in days, not months",
    icon: "deploy",
  },
  {
    label: "Optimize",
    description: "Real-time dashboards and continuous learning",
    icon: "optimize",
  },
];

export default function HowItWorksFlow() {
  return <WorkflowDiagram steps={steps} />;
}
