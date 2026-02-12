"use client";

import React from "react";
import { Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export function FilterBar({
  query,
  onQueryChange,
  filters,
  onFilterChange
}: {
  query: string;
  onQueryChange: (value: string) => void;
  filters: Array<{
    id: string;
    label: string;
    options: string[];
    value: string;
  }>;
  onFilterChange: (id: string, value: string) => void;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-soft">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <Filter size={16} />
          فلترة متقدمة
        </div>
        <div className="flex-1">
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="بحث سريع..."
          />
        </div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        {filters.map((filter) => (
          <Select
            key={filter.id}
            value={filter.value}
            onChange={(e) => onFilterChange(filter.id, e.target.value)}
          >
            <option value="">{filter.label}</option>
            {filter.options.map((option) => (
              <option key={option} value={option} className="text-black">
                {option}
              </option>
            ))}
          </Select>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {filters
          .filter((filter) => filter.value)
          .map((filter) => (
            <Badge key={filter.id} tone="accent">
              {filter.value}
            </Badge>
          ))}
      </div>
    </div>
  );
}
