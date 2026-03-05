import { Link } from "react-router-dom";
import { Play, Ticket } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import { films } from "@/lib/mock-data";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const featured = films[0];

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <img
        src={heroBg}
        alt="AI Theatre"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-20">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Featured Premiere
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-4">
            {featured.title}
          </h1>

          <p className="text-lg text-secondary-foreground/70 mb-6 max-w-lg leading-relaxed">
            {featured.description}
          </p>

          <div className="mb-8">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Premiere starts in</p>
            <CountdownTimer targetDate={featured.premiereDate} />
          </div>

          <div className="flex gap-4">
            <Link
              to={`/film/${featured.id}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all duration-200 animate-pulse-gold"
            >
              <Ticket className="w-5 h-5" />
              Buy Ticket — ${featured.ticketPrice}
            </Link>
            <button className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-cinema-surface-hover transition-colors">
              <Play className="w-5 h-5" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
