import type { CSSProperties, ElementType, ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Pure-CSS entrance animation for above-the-fold content: it paints without
 * waiting for hydration, unlike the IntersectionObserver-driven `Reveal`.
 */
export function FadeIn({ children, delay = 0, className = "", as }: FadeInProps) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      className={`animate-fade-up ${className}`}
      style={delay ? ({ animationDelay: `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
