"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  threshold?: number; // 0–1, how much of element must be visible
}

const directionClass: Record<Direction, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

/**
 * ScrollReveal
 * Wraps any child in a CSS-driven scroll-triggered animation.
 * No external deps — pure IntersectionObserver + CSS.
 *
 * Usage:
 *   <ScrollReveal direction="up" delay={2}>
 *     <Card ... />
 *   </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delay,
  className = "",
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el); // animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const base = directionClass[direction];
  const stagger = delay ? `stagger-${delay}` : "";

  return (
    <div ref={ref} className={`${base} ${stagger} ${className}`}>
      {children}
    </div>
  );
}