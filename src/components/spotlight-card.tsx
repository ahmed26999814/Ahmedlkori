"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ref.current?.style.setProperty("--x", `${x}px`);
    ref.current?.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      whileHover={{ rotateX: 2, rotateY: -2, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(59,130,246,0.18),transparent_40%)] before:opacity-0 before:transition-opacity hover:before:opacity-100",
        "transform-gpu",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
