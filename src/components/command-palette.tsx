"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { commands } from "@/lib/constants";

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  React.useEffect(() => {
    if (!open) setValue("");
  }, [open]);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="لوحة الأوامر"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 backdrop-blur"
    >
      <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0c10] shadow-glass">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-white/70">
          <Search size={18} />
          <Command.Input
            value={value}
            onValueChange={setValue}
            placeholder="ابحث عن صفحة أو اختصار..."
            className="w-full bg-transparent text-sm outline-none"
          />
          <span className="text-[11px]">Ctrl + K</span>
        </div>
        <Command.List className="max-h-80 overflow-auto p-2">
          <Command.Empty className="p-4 text-sm text-white/60">
            لا توجد نتائج.
          </Command.Empty>
          {commands.map((item) => (
            <Command.Item
              key={item.id}
              value={item.label}
              onSelect={() => {
                router.push(item.href);
                setOpen(false);
              }}
              className="flex cursor-pointer items-center gap-2 rounded-2xl px-4 py-3 text-sm text-white/80 aria-selected:bg-white/10 aria-selected:text-white"
            >
              <span>{item.label}</span>
            </Command.Item>
          ))}
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
