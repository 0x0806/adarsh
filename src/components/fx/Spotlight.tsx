"use client";

import type { ElementType, ReactNode, MouseEvent } from "react";

/** Cursor-following glow (ReactBits SpotlightCard idea), driven by CSS variables. */
export default function Spotlight({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: { as?: ElementType; className?: string; children: ReactNode } & Record<string, unknown>) {
  const move = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag onMouseMove={move} className={`spotlight ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
