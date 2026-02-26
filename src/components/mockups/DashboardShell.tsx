interface DashboardShellProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardShell({ children, className = "" }: DashboardShellProps) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-white/[0.08] ${className}`}
      style={{ background: "rgba(10, 22, 40, 0.7)", backdropFilter: "blur(24px)" }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] text-slate-500 min-w-[180px] text-center">
            app.distroagents.com
          </div>
        </div>
        <div className="w-[52px]" />
      </div>
      {/* Content */}
      <div className="p-4 sm:p-5">
        {children}
      </div>
    </div>
  );
}
