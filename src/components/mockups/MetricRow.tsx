import MiniChart from "./MiniChart";
import { metrics, sparkData } from "./mockData";

const chartMap: Record<string, number[]> = {
  "Orders Processed": sparkData.orders,
  "Revenue Recovered": sparkData.revenue,
  "Avg Response": sparkData.response,
};

export default function MetricRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-xl px-4 py-3 border border-white/[0.06]"
          style={{ background: "rgba(15, 31, 61, 0.5)" }}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] text-slate-500 uppercase tracking-wider">{m.label}</span>
            {chartMap[m.label] && (
              <MiniChart data={chartMap[m.label]} color={m.up ? "#22c55e" : "#ef4444"} />
            )}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-white tracking-tight">{m.value}</span>
            <span className={`text-[11px] font-medium ${m.up ? "text-green-400" : "text-red-400"}`}>
              {m.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
