import type { Metadata } from "next";
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CommandPalette } from "@/components/command-palette";
import { BackToTop } from "@/components/back-to-top";
import { AnimatedBackground } from "@/components/animated-background";
import { CursorGlow } from "@/components/cursor-glow";
import { Toaster } from "sonner";
import { siteMeta } from "@/data/content";
import { Analytics } from "@vercel/analytics/react";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap"
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-plex",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    type: "website",
    images: [siteMeta.ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${plex.variable}`}>
      <body className="min-h-screen bg-ink font-body text-white antialiased">
        <Providers>
          <AnimatedBackground />
          <CursorGlow />
          <Navbar />
          <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 md:px-6">
            {children}
          </main>
          <Footer />
          <CommandPalette />
          <BackToTop />
          <Toaster richColors position="bottom-center" />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
