"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React from "react";

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 25 });

  React.useEffect(() => {
    const handler = (event: MouseEvent) => {
      x.set(event.clientX - 120);
      y.set(event.clientY - 120);
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-0 h-60 w-60 rounded-full bg-accent-500/20 blur-[120px]"
      style={{ translateX: smoothX, translateY: smoothY }}
    />
  );
}
