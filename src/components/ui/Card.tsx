import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-[var(--srcc-radius-xl)]
        border
        border-zinc-200/80
        bg-white
        p-7
        shadow-[var(--srcc-shadow-sm)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[var(--srcc-shadow-md)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}