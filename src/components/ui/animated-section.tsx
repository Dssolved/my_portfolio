"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionId = id ? { id } : {};
  const motionProps = shouldReduceMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        // "some" (not a fixed 0-1 fraction) triggers on any intersection,
        // so very tall sections still animate in on short mobile viewports.
        viewport: { once: true, amount: "some" as const },
        transition: { duration: 0.45, ease: "easeOut" as const, delay },
      };

  return (
    <motion.section
      {...sectionId}
      className={cn("scroll-mt-24", className)}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
}
