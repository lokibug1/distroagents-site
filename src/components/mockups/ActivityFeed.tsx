import { activities } from "./mockData";

const agentColors: Record<string, string> = {
  Collections: "text-orange-400",
  "Voice Order": "text-blue-400",
  "Margin Protection": "text-purple-400",
  Compliance: "text-cyan-400",
};

export default function ActivityFeed() {
  return (
    <div className="space-y-1">
      <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-3 font-medium">
        Live Activity
      </div>
      {activities.map((a, i) => (
        <div
          key={i}
          className="group flex gap-3 py-2.5 px-3 rounded-lg transition-colors hover:bg-white/[0.02] border-b border-white/[0.03] last:border-0"
        >
          <div className="shrink-0 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2 mb-0.5">
              <span className={`text-[11px] font-medium ${agentColors[a.agent] || "text-slate-400"}`}>
                {a.agent}
              </span>
              <span className="text-[11px] text-slate-600">{a.time}</span>
            </div>
            <p className="text-[12px] text-slate-300 leading-relaxed">{a.action}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">{a.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
