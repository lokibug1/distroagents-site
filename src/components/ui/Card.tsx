interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl glass ${
        hover
          ? "transition-all duration-300 hover:bg-white/[0.04] hover:border-blue-500/15 hover:glow-sm hover:-translate-y-[2px]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
