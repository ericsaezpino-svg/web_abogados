import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** `narrow` para bloques de texto largo, `default` para el resto. */
  width?: "default" | "narrow";
};

export default function Container({
  children,
  className = "",
  width = "default",
}: ContainerProps) {
  const max = width === "narrow" ? "max-w-3xl" : "max-w-6xl";

  return (
    <div className={`mx-auto w-full ${max} px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
