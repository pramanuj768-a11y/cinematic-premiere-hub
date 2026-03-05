import { ChevronRight } from "lucide-react";
import { FilmCard } from "./FilmCard";
import type { Film } from "@/lib/mock-data";

interface FilmRowProps {
  title: string;
  films: Film[];
}

export function FilmRow({ title, films }: FilmRowProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {films.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </div>
    </section>
  );
}
