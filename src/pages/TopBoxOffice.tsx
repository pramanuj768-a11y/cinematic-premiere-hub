import { Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { films } from "@/lib/mock-data";

const TopBoxOffice = () => {
  const sorted = [...films].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground flex items-center gap-3 mb-8">
          <TrendingUp className="w-7 h-7 text-primary" /> Top Box Office
        </h1>

        <div className="space-y-4">
          {sorted.map((film, i) => (
            <Link
              key={film.id}
              to={`/film/${film.id}`}
              className="bg-card border border-border rounded-lg p-4 flex items-center gap-5 hover:border-primary/30 transition-colors group block"
            >
              <span className="font-display text-3xl font-bold text-muted-foreground/30 w-10 text-center">
                {i + 1}
              </span>
              <img src={film.poster} alt={film.title} className="w-16 h-24 object-cover rounded transition-transform group-hover:scale-105" />
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{film.title}</h3>
                <p className="text-sm text-muted-foreground">{film.director} · {film.genre}</p>
              </div>
              <div className="text-right">
                <p className="font-display text-lg font-bold text-foreground">{film.revenue}</p>
                <div className="flex items-center gap-1 justify-end">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                  <span className="text-sm text-muted-foreground">{film.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBoxOffice;
