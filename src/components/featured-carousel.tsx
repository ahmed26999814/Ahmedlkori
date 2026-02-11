"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SummaryCard } from "@/components/summary-card";
import { Button } from "@/components/ui/button";
import { SummaryFile } from "@/data/content";

export function FeaturedCarousel({ items }: { items: SummaryFile[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">?????? ??? ???????</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="??????"
          >
            <ChevronRight size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="??????"
          >
            <ChevronLeft size={18} />
          </Button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item) => (
            <div key={item.title} className="min-w-[300px] flex-[0_0_80%] md:flex-[0_0_45%]">
              <SummaryCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
