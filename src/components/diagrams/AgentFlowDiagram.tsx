import WorkflowDiagram from "./WorkflowDiagram";
import type { WorkflowStep } from "./WorkflowDiagram";

// Agent-specific workflow maps
const agentWorkflows: Record<string, WorkflowStep[]> = {
  "AR Collection Agent": [
    { label: "Monitor AR Aging", icon: "monitor" },
    { label: "Send Reminder", icon: "send" },
    { label: "Track Response", icon: "track" },
    { label: "Escalate or Resolve", icon: "resolve" },
  ],
  "Payment Follow-Up Agent": [
    { label: "Detect Overdue", icon: "monitor" },
    { label: "Auto Follow-Up", icon: "send" },
    { label: "Log Response", icon: "track" },
    { label: "Close or Escalate", icon: "resolve" },
  ],
  "Inbound Voice Order Agent": [
    { label: "Receive Call", icon: "monitor" },
    { label: "Parse Order", icon: "configure" },
    { label: "Validate Items", icon: "track" },
    { label: "Submit to ERP", icon: "deploy" },
  ],
  "Email Order Agent": [
    { label: "Scan Inbox", icon: "monitor" },
    { label: "Extract Order", icon: "configure" },
    { label: "Match SKUs", icon: "track" },
    { label: "Confirm & Submit", icon: "resolve" },
  ],
  "Dynamic Pricing Agent": [
    { label: "Monitor Market", icon: "monitor" },
    { label: "Calculate Price", icon: "configure" },
    { label: "Apply Rules", icon: "track" },
    { label: "Update System", icon: "deploy" },
  ],
  "Margin Protection Agent": [
    { label: "Scan Quotes", icon: "monitor" },
    { label: "Check Margins", icon: "track" },
    { label: "Flag Violations", icon: "send" },
    { label: "Block or Approve", icon: "resolve" },
  ],
};

// Fallback workflow pattern
const defaultWorkflow: WorkflowStep[] = [
  { label: "Monitor", icon: "monitor" },
  { label: "Analyze", icon: "configure" },
  { label: "Act", icon: "deploy" },
  { label: "Report", icon: "resolve" },
];

interface AgentFlowDiagramProps {
  agentName: string;
}

export default function AgentFlowDiagram({ agentName }: AgentFlowDiagramProps) {
  const steps = agentWorkflows[agentName] || defaultWorkflow;
  return <WorkflowDiagram steps={steps} compact />;
}
