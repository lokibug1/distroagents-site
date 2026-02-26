// Mini mockup screens for the 3 Solution pillars

function PillarFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-lg border border-white/[0.06] overflow-hidden mt-6"
      style={{ background: "rgba(10, 22, 40, 0.5)" }}
    >
      <div className="p-3">{children}</div>
    </div>
  );
}

/** Pillar 1: Distribution SKU view */
export function DistributionMockup() {
  const skus = [
    { sku: "CHK-4521", desc: "Chicken Breast 40lb", price: "$2.35/lb" },
    { sku: "BEF-1180", desc: "Ground Beef 80/20", price: "$3.12/lb" },
    { sku: "PRK-2290", desc: "Pork Loin Boneless", price: "$1.89/lb" },
  ];

  return (
    <PillarFrame>
      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">SKU Catalog</div>
      <div className="space-y-1">
        {skus.map((s) => (
          <div
            key={s.sku}
            className="flex items-center justify-between px-2 py-1.5 rounded border border-white/[0.03]"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[10px] font-mono text-blue-400">{s.sku}</span>
              <span className="text-[10px] text-slate-300 truncate">{s.desc}</span>
            </div>
            <span className="text-[10px] text-green-400 font-medium shrink-0">{s.price}</span>
          </div>
        ))}
      </div>
    </PillarFrame>
  );
}

/** Pillar 2: Agent action log */
export function AgentActionMockup() {
  const actions = [
    { time: "14:32", agent: "Collections", action: "Sent invoice reminder", status: "done" },
    { time: "14:28", agent: "Voice Order", action: "Processed 18-line order", status: "done" },
    { time: "14:25", agent: "Margin Guard", action: "Blocked low-margin quote", status: "alert" },
  ];

  return (
    <PillarFrame>
      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Action Log</div>
      <div className="space-y-1">
        {actions.map((a, i) => (
          <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded border border-white/[0.03]">
            <span className="text-[9px] text-slate-600 font-mono shrink-0">{a.time}</span>
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.status === "alert" ? "bg-orange-400" : "bg-green-400"}`} />
            <div className="min-w-0">
              <div className="text-[10px] text-slate-300 truncate">{a.action}</div>
              <div className="text-[9px] text-slate-600">{a.agent}</div>
            </div>
          </div>
        ))}
      </div>
    </PillarFrame>
  );
}

/** Pillar 3: ROI dashboard */
export function ROIMockup() {
  const metrics = [
    { label: "Revenue Recovered", value: "$34.2K", change: "+12%" },
    { label: "Hours Saved", value: "186", change: "+8%" },
    { label: "Error Reduction", value: "94%", change: "-47%" },
  ];

  return (
    <PillarFrame>
      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">ROI Dashboard</div>
      <div className="space-y-1">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between px-2 py-1.5 rounded border border-white/[0.03]">
            <div>
              <div className="text-[10px] text-slate-400">{m.label}</div>
              <div className="text-[13px] font-bold text-white">{m.value}</div>
            </div>
            <span className="text-[10px] font-medium text-green-400">{m.change}</span>
          </div>
        ))}
      </div>
    </PillarFrame>
  );
}
