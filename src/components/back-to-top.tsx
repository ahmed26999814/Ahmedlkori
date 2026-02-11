"use client";

import { ChevronUp } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <Button
      variant="secondary"
      size="icon"
      className="fixed bottom-6 left-6 z-40"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="?????? ??????"
    >
      <ChevronUp size={18} />
    </Button>
  );
}
