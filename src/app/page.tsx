import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { GlobalSearch } from "@/components/global-search";
import { TodayPick } from "@/components/today-pick";
import { HomeHighlights } from "@/components/home-highlights";
import { SectionHeading } from "@/components/ui/section-heading";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />
      <Stats />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <GlobalSearch />
        <TodayPick />
      </div>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="???? ???????"
          title="??????? ?????? ???? ??????"
          description="??? ????????? ????????? ??????? ?????? ?? ???? ??????."
        />
        <HomeHighlights />
      </section>
    </div>
  );
}
