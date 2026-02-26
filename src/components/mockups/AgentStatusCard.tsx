import type { Agent } from "./mockData";

const statusColors: Record<Agent["status"], { dot: string; label: string; bg: string }> = {
  active: { dot: "bg-green-400", label: "text-green-400", bg: "bg-green-500/10" },
  processing: { dot: "bg-blue-400 animate-pulse", label: "text-blue-400", bg: "bg-blue-500/10" },
  idle: { dot: "bg-slate-500", label: "text-slate-500", bg: "bg-slate-500/10" },
};

interface AgentStatusCardProps {
  agent: Agent;
}

export default function AgentStatusCard({ agent }: AgentStatusCardProps) {
  const sc = statusColors[agent.status];

  return (
    <div
      className="rounded-xl px-4 py-3 border border-white/[0.06] transition-colors hover:border-white/[0.1]"
      style={{ background: "rgba(15, 31, 61, 0.4)" }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[13px] font-medium text-white">{agent.name}</span>
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
          <span className={`text-[11px] capitalize ${sc.label}`}>{agent.status}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-slate-400">{agent.metric}</span>
        {agent.trend && (
          <span className="text-[11px] font-medium text-green-400">{agent.trend}</span>
        )}
      </div>
    </div>
  );
}
