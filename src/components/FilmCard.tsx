import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Film } from "@/lib/mock-data";

interface FilmCardProps {
  film: Film;
}

export function FilmCard({ film }: FilmCardProps) {
  return (
    <Link to={`/film/${film.id}`} className="cinema-card group block flex-shrink-0 w-[200px]">
      <div className="relative overflow-hidden aspect-[2/3]">
        <img
          src={film.poster}
          alt={film.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-0.5">
          <Star className="w-3 h-3 text-primary fill-primary" />
          <span className="text-xs font-medium text-foreground">{film.rating}</span>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-display font-semibold text-sm text-foreground truncate">{film.title}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{film.director}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-primary font-medium">{film.genre}</span>
          <span className="text-xs text-muted-foreground">${film.ticketPrice}</span>
        </div>
      </div>
    </Link>
  );
}
