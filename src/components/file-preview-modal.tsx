"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const PdfDocument = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);
const PdfPage = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false
});

export function FilePreviewModal({
  open,
  onClose,
  title,
  url,
  type
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  url: string;
  type: "pdf" | "doc" | "img";
}) {
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageWidth, setPageWidth] = React.useState(900);

  React.useEffect(() => {
    import("react-pdf").then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    });
    const updateWidth = () => {
      const safeWidth = Math.min(900, window.innerWidth - 48);
      setPageWidth(safeWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0c10]"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                {numPages ? (
                  <p className="text-xs text-white/50">1 / {numPages}</p>
                ) : null}
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X size={18} />
              </Button>
            </div>
            <div className="h-[70vh] bg-black/40">
              {type === "img" ? (
                <img src={url} alt={title} className="h-full w-full object-contain" />
              ) : type === "pdf" ? (
                <div className="flex h-full justify-center overflow-auto py-6">
                  <PdfDocument
                    file={url}
                    onLoadSuccess={(data) => setNumPages(data.numPages)}
                    loading={<div className="text-sm text-white/70">جاري التحميل...</div>}
                    error={<div className="text-sm text-white/70">تعذر تحميل الملف.</div>}
                  >
                    <PdfPage
                      pageNumber={1}
                      width={pageWidth}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                  </PdfDocument>
                </div>
              ) : (
                <iframe title={title} src={url} className="h-full w-full" />
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
