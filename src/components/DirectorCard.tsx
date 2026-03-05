import { Users, Film } from "lucide-react";

interface DirectorCardProps {
  name: string;
  films: number;
  followers: string;
}

export function DirectorCard({ name, films, followers }: DirectorCardProps) {
  return (
    <div className="cinema-card p-5 flex-shrink-0 w-[220px] cursor-pointer">
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 mx-auto">
        <span className="font-display text-xl font-bold text-primary">
          {name.split(" ").map(n => n[0]).join("")}
        </span>
      </div>
      <h3 className="font-display font-semibold text-foreground text-center">{name}</h3>
      <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Film className="w-3 h-3" /> {films} films</span>
        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {followers}</span>
      </div>
    </div>
  );
}
