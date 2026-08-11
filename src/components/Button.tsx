import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide uppercase transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-white hover:bg-gold-700",
  outline: "border border-navy text-navy hover:bg-navy hover:text-white",
  light:
    "border border-white/60 text-white hover:border-white hover:bg-white hover:text-navy",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className"
> & {
  children: ReactNode;
  /** Si se indica, el botón se renderiza como <Link>. */
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...buttonProps
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
