import DashboardShell from "./DashboardShell";
import MetricRow from "./MetricRow";
import AgentStatusCard from "./AgentStatusCard";
import ActivityFeed from "./ActivityFeed";
import { agents } from "./mockData";

export default function HeroDashboard() {
  return (
    <div className="relative mt-16 lg:mt-20 animate-fade-in">
      {/* Glow behind dashboard */}
      <div className="absolute -inset-8 bg-blue-500/[0.06] rounded-3xl blur-3xl pointer-events-none" />

      <div
        className="relative"
        style={{
          perspective: "1200px",
        }}
      >
        <div
          style={{
            transform: "rotateX(2deg) rotateY(0deg)",
            transformOrigin: "center bottom",
          }}
        >
          <DashboardShell className="glow-md">
            {/* Metric row */}
            <MetricRow />

            {/* Main content: agents + activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              {/* Agent cards */}
              <div
                className="rounded-xl border border-white/[0.06] px-4 py-3 flex flex-col"
                style={{ background: "rgba(15, 31, 61, 0.3)" }}
              >
                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-medium mb-2">
                  Agent Status
                </div>
                <div className="space-y-2 flex-1">
                  {agents.map((agent) => (
                    <AgentStatusCard key={agent.name} agent={agent} />
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div
                className="rounded-xl border border-white/[0.06] px-4 py-3 flex flex-col"
                style={{ background: "rgba(15, 31, 61, 0.3)" }}
              >
                <ActivityFeed />
              </div>
            </div>
          </DashboardShell>
        </div>
      </div>
    </div>
  );
}
