import { Hero } from "@/components/hero";
import { GlobalSearch } from "@/components/global-search";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />

      <GlobalSearch />
    </div>
  );
}
