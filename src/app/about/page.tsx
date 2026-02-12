"use client";

import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/providers/language-provider";

export default function AboutPage() {
  const { t, lang } = useLang();

  return (
    <div className="space-y-8">
      <PageHeader title={t("about_title")} description={t("about_desc")} />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70">
          <Badge tone="accent">{t("about_mission")}</Badge>
          <p className="mt-4 leading-7">
            {lang === "fr"
              ? "Je m'appelle Ahmed Mohamed Lamine Kori, diplômé en spécialité ABC. Depuis plus de deux ans, j'aide les étudiants à comprendre les matières avec une approche simple et proche de la réalité universitaire. J'ai acquis une bonne connaissance des méthodes des professeurs, ce qui me permet d'expliquer les cours de manière claire, structurée et pratique pour faciliter la préparation aux examens."
              : "أنا أحمد محمد لمين الكوري، خريج تخصص ABC، ولدي أكثر من سنتين من الخبرة في مساعدة طلاب الجامعة على فهم المواد بأسلوب بسيط وقريب من واقع الدراسة الجامعية. خلال هذه الفترة اكتسبت معرفة جيدة بطرق وأساليب الدكاترة، مما يساعدني على شرح المقررات بطريقة منظمة وعملية تسهّل الاستيعاب والتحضير للاختبارات."}
          </p>
          <p className="mt-4 leading-7 text-white/60">
            {lang === "fr"
              ? "Mon objectif est de soutenir les étudiants et de fournir un contenu clair et utile qui rend leur parcours universitaire plus facile et plus confiant."
              : "هدفي هو دعم الطلاب وتوفير محتوى واضح ومفيد يجعل رحلتهم الجامعية أسهل وأكثر ثقة."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="secondary" size="sm">
              <a
                href="https://www.facebook.com/profile.php?id=100026213213446"
                target="_blank"
                rel="noreferrer"
              >
                Facebook <ExternalLink size={14} />
              </a>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <a
                href="https://www.tiktok.com/@kori.ahmed44?_r=1&_t=ZS-93qlIq0ru5a"
                target="_blank"
                rel="noreferrer"
              >
                TikTok <ExternalLink size={14} />
              </a>
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <img
              src="/ahmed.jpg"
              alt="أحمد محمد لمين الكوري"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
