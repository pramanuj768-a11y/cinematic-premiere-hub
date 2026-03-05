import { HeroSection } from "@/components/HeroSection";
import { FilmRow } from "@/components/FilmRow";
import { DirectorCard } from "@/components/DirectorCard";
import { ChevronRight } from "lucide-react";
import { films, directors } from "@/lib/mock-data";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <FilmRow title="Upcoming Premieres" films={films} />
      <FilmRow title="Trending Films" films={[...films].reverse()} />
      <FilmRow title="Top Box Office" films={films.slice(0, 4)} />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-2xl font-bold text-foreground">Rising Directors</h2>
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {directors.map((d) => (
              <DirectorCard key={d.name} {...d} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 mt-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p className="font-display text-lg text-foreground mb-2">AI Theatre</p>
          <p>The global digital cinema experience. © 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
