"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-hero-gradient bg-[length:200%_200%] opacity-70"
        animate={
          reduceMotion
            ? { backgroundPosition: "0% 50%" }
            : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 22, repeat: Infinity, ease: "linear" }
        }
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-accent-500/20 blur-[90px]" />
      <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-rose/20 blur-[90px]" />
    </div>
  );
}
