"use client";

import React from "react";
import { QrCode } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLang } from "@/components/providers/language-provider";

export function QrDialog({ url, label }: { url: string; label?: string }) {
  const { lang } = useLang();

  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <QrCode size={14} />
                {label ?? (lang === "fr" ? "QR" : "QR")}
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            {lang === "fr" ? "Afficher le QR code" : "عرض رمز QR"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="border border-white/10 bg-white/10 text-white backdrop-blur">
        <DialogHeader>
          <DialogTitle>{lang === "fr" ? "Lien rapide" : "رابط سريع"}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4">
          <QRCodeCanvas value={url} size={180} bgColor="#0b0c10" fgColor="#f8fafc" />
          <p className="text-xs text-white/60">{url}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
