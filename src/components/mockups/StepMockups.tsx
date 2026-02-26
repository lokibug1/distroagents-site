// Mini mockup screens for the 4 HowItWorks steps

function MockupFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border border-white/[0.06] overflow-hidden mt-4"
      style={{ background: "rgba(10, 22, 40, 0.5)" }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04]">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function StatusDot({ active }: { active: boolean }) {
  return (
    <span className={`inline-block w-1.5 h-1.5 rounded-full ${active ? "bg-green-400" : "bg-slate-600"}`} />
  );
}

/** Step 1: Integration panel showing ERP connections */
export function ConnectMockup() {
  const systems = [
    { name: "NetSuite ERP", connected: true },
    { name: "Warehouse WMS", connected: true },
    { name: "EDI Gateway", connected: true },
    { name: "QuickBooks", connected: false },
  ];

  return (
    <MockupFrame>
      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Integrations</div>
      <div className="space-y-1.5">
        {systems.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between px-2.5 py-1.5 rounded-lg border border-white/[0.04]"
            style={{ background: s.connected ? "rgba(34, 197, 94, 0.04)" : "transparent" }}
          >
            <span className="text-[11px] text-slate-300">{s.name}</span>
            <div className="flex items-center gap-1.5">
              <StatusDot active={s.connected} />
              <span className={`text-[10px] ${s.connected ? "text-green-400" : "text-slate-600"}`}>
                {s.connected ? "Connected" : "Available"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </MockupFrame>
  );
}

/** Step 2: Agent selection grid with toggle switches */
export function ConfigureMockup() {
  const agents = [
    { name: "Collections", on: true },
    { name: "Voice Orders", on: true },
    { name: "Margin Guard", on: false },
    { name: "Compliance", on: true },
  ];

  return (
    <MockupFrame>
      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Select Agents</div>
      <div className="space-y-1.5">
        {agents.map((a) => (
          <div
            key={a.name}
            className="flex items-center justify-between px-2.5 py-1.5 rounded-lg border border-white/[0.04]"
          >
            <span className="text-[11px] text-slate-300">{a.name}</span>
            <div
              className={`w-7 h-4 rounded-full flex items-center transition-colors ${a.on ? "bg-blue-500 justify-end" : "bg-slate-700 justify-start"}`}
            >
              <div className="w-3 h-3 rounded-full bg-white mx-0.5" />
            </div>
          </div>
        ))}
      </div>
    </MockupFrame>
  );
}

/** Step 3: Agent going live with first activity */
export function DeployMockup() {
  return (
    <MockupFrame>
      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Deployment</div>
      <div className="px-2.5 py-2 rounded-lg border border-green-500/20 mb-2" style={{ background: "rgba(34, 197, 94, 0.05)" }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] font-medium text-green-400">Collections Agent -Live</span>
        </div>
        <span className="text-[10px] text-slate-500">First activity 12 seconds ago</span>
      </div>
      <div className="px-2.5 py-2 rounded-lg border border-white/[0.04]">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[11px] font-medium text-blue-400">Voice Order Agent -Starting</span>
        </div>
        <span className="text-[10px] text-slate-500">Warming up...</span>
      </div>
    </MockupFrame>
  );
}

/** Step 4: Performance chart with upward trend */
export function OptimizeMockup() {
  const bars = [35, 42, 50, 48, 58, 65, 72, 68, 78, 85, 90, 95];

  return (
    <MockupFrame>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider">Performance</span>
        <span className="text-[10px] text-green-400 font-medium">+34% this month</span>
      </div>
      <div className="flex items-end gap-1 h-12">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm transition-all"
            style={{
              height: `${h}%`,
              background: i >= 8
                ? "linear-gradient(to top, #3b82f6, #60a5fa)"
                : "rgba(59, 130, 246, 0.2)",
            }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[9px] text-slate-600">Week 1</span>
        <span className="text-[9px] text-slate-600">Week 12</span>
      </div>
    </MockupFrame>
  );
}
