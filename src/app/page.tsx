import { Hero } from "@/components/hero";
import { GlobalSearch } from "@/components/global-search";
import { QuickLinks } from "@/components/quick-links";
import { HomeContact } from "@/components/home-contact";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={0.1}>
        <QuickLinks />
      </Reveal>
      <Reveal delay={0.15}>
        <GlobalSearch />
      </Reveal>
      <Reveal delay={0.2}>
        <HomeContact />
      </Reveal>
    </div>
  );
}
