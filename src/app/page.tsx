import { Hero } from "@/components/hero";
import { GlobalSearch } from "@/components/global-search";
import { HomeContact } from "@/components/home-contact";
import { QuickLinks } from "@/components/quick-links";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <QuickLinks />
      <GlobalSearch />
      <HomeContact />
    </div>
  );
}
