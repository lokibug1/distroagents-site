export interface WorkflowStep {
  label: string;
  description?: string;
  icon?: "connect" | "configure" | "deploy" | "optimize" | "monitor" | "send" | "track" | "resolve";
}

interface WorkflowDiagramProps {
  steps: WorkflowStep[];
  compact?: boolean;
}

function StepIcon({ icon }: { icon?: WorkflowStep["icon"] }) {
  const cls = "w-5 h-5 text-blue-400";
  switch (icon) {
    case "connect":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" />
        </svg>
      );
    case "configure":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "deploy":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "optimize":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case "monitor":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      );
    case "send":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "track":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    case "resolve":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return <div className="w-2 h-2 rounded-full bg-blue-400" />;
  }
}

export default function WorkflowDiagram({ steps, compact = false }: WorkflowDiagramProps) {
  return (
    <div className={`flex flex-col ${compact ? "sm:flex-row" : "lg:flex-row"} items-stretch gap-0`}>
      {steps.map((step, i) => (
        <div key={step.label} className={`flex ${compact ? "sm:flex-col" : "lg:flex-col"} items-center flex-1`}>
          <div className="flex items-center w-full">
            {/* Node */}
            <div
              className={`flex-1 rounded-xl border border-white/[0.08] ${compact ? "px-3 py-2.5" : "px-4 py-3"} transition-all hover:border-blue-500/20`}
              style={{ background: "rgba(10, 22, 40, 0.6)", backdropFilter: "blur(12px)" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`${compact ? "w-7 h-7" : "w-8 h-8"} rounded-lg flex items-center justify-center shrink-0`}
                  style={{ background: "rgba(59, 130, 246, 0.1)" }}
                >
                  <StepIcon icon={step.icon} />
                </div>
                <div className="min-w-0">
                  <div className={`${compact ? "text-[12px]" : "text-[13px]"} font-medium text-white`}>
                    {step.label}
                  </div>
                  {step.description && !compact && (
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      {step.description}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Arrow between nodes */}
            {i < steps.length - 1 && (
              <>
                {/* Horizontal arrow (desktop) */}
                <div className={`hidden ${compact ? "sm:block" : "lg:block"} shrink-0 w-8`}>
                  <svg width="32" height="16" viewBox="0 0 32 16" className="text-blue-500/30">
                    <line
                      x1="0" y1="8" x2="24" y2="8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="animate-flow"
                    />
                    <polygon points="24,4 32,8 24,12" fill="currentColor" />
                  </svg>
                </div>
                {/* Vertical arrow (mobile) */}
                <div className={`${compact ? "sm:hidden" : "lg:hidden"} shrink-0 h-6 flex justify-center w-full absolute`} style={{ display: "none" }} />
              </>
            )}
          </div>

          {/* Vertical arrow (mobile) */}
          {i < steps.length - 1 && (
            <div className={`${compact ? "sm:hidden" : "lg:hidden"} flex justify-center py-1`}>
              <svg width="16" height="24" viewBox="0 0 16 24" className="text-blue-500/30">
                <line
                  x1="8" y1="0" x2="8" y2="18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="animate-flow"
                />
                <polygon points="4,18 8,24 12,18" fill="currentColor" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
