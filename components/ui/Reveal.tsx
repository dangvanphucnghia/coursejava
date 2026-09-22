"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, applied through the --reveal-delay custom property. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Fades + lifts its children into place the first time they scroll into view.
 * The hidden state lives in globals.css behind the `.js` class, so the markup
 * stays readable when scripting is unavailable.
 */
export function Reveal({ children, delay = 0, className = "", as }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-revealed");
      return;
    }

    // Hydration can land after the visitor has already scrolled; anything
    // on screen at mount reveals straight away rather than waiting.
    const rect = node.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      node.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
