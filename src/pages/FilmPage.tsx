import { useParams, Link } from "react-router-dom";
import { Play, Ticket, Star, Clock, ArrowLeft, Users } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { films } from "@/lib/mock-data";

const FilmPage = () => {
  const { id } = useParams();
  const film = films.find((f) => f.id === id);

  if (!film) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-16">
        <p className="text-muted-foreground">Film not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img src={film.poster} alt={film.title} className="absolute inset-0 w-full h-full object-cover object-top blur-sm scale-105" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-8">
          <Link to="/" className="absolute top-6 left-4 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="w-[260px] flex-shrink-0">
            <img
              src={film.poster}
              alt={film.title}
              className="w-full aspect-[2/3] object-cover rounded-lg film-poster-shadow"
            />
          </div>

          {/* Info */}
          <div className="flex-1 pt-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">{film.genre}</span>
              <span className="flex items-center gap-1 text-sm text-foreground">
                <Star className="w-4 h-4 text-primary fill-primary" /> {film.rating}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">{film.title}</h1>

            <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-6 max-w-xl">{film.description}</p>

            {/* Director */}
            <div className="flex items-center gap-3 mb-8 p-4 bg-secondary/50 rounded-lg max-w-sm">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="font-display text-sm font-bold text-primary">
                  {film.director.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Directed by</p>
                <p className="font-display font-semibold text-foreground">{film.director}</p>
              </div>
            </div>

            {/* Countdown */}
            <div className="mb-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                <Clock className="w-3 h-3" /> Premiere countdown
              </p>
              <CountdownTimer targetDate={film.premiereDate} />
            </div>

            {/* Actions */}
            <div className="flex gap-4 flex-wrap">
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition-all animate-pulse-gold">
                <Ticket className="w-5 h-5" />
                Buy Ticket — ${film.ticketPrice}
              </button>
              <button className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-cinema-surface-hover transition-colors">
                <Play className="w-5 h-5" />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
};

export default FilmPage;
