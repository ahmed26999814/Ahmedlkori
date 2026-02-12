import { Hero } from "@/components/hero";
import { GlobalSearch } from "@/components/global-search";
import { HomeContact } from "@/components/home-contact";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <GlobalSearch />
      <HomeContact />
    </div>
  );
}
