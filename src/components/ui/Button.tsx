import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-[1px] active:translate-y-0",
    secondary:
      "bg-white/[0.04] text-slate-200 border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] hover:-translate-y-[1px] active:translate-y-0",
    ghost:
      "text-blue-400 hover:text-blue-300 hover:bg-blue-500/[0.08]",
  };

  const sizes = {
    sm: "h-9 px-4 text-[13px] gap-1.5",
    md: "h-11 px-6 text-[14px] gap-2",
    lg: "h-12 px-8 text-[15px] gap-2",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
