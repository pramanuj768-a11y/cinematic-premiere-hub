import { Film, Clock, Star, Ticket } from "lucide-react";
import { films } from "@/lib/mock-data";

const UserProfile = () => {
  const purchasedFilms = films.slice(0, 3);
  const watchHistory = films.slice(2, 5);

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
            <span className="font-display text-2xl font-bold text-primary">JD</span>
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">John Doe</h1>
            <p className="text-muted-foreground text-sm">Cinema enthusiast since 2024</p>
          </div>
        </div>

        {/* Purchased Films */}
        <section className="mb-10">
          <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2 mb-5">
            <Ticket className="w-5 h-5 text-primary" /> Purchased Films
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {purchasedFilms.map((film) => (
              <div key={film.id} className="bg-card border border-border rounded-lg overflow-hidden flex">
                <img src={film.poster} alt={film.title} className="w-24 h-36 object-cover" />
                <div className="p-4 flex flex-col justify-center">
                  <h3 className="font-display font-semibold text-foreground text-sm">{film.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{film.director}</p>
                  <span className="text-xs text-primary mt-2">{film.genre}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Watch History */}
        <section className="mb-10">
          <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2 mb-5">
            <Clock className="w-5 h-5 text-primary" /> Watch History
          </h2>
          <div className="space-y-3">
            {watchHistory.map((film) => (
              <div key={film.id} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4">
                <img src={film.poster} alt={film.title} className="w-12 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground text-sm">{film.title}</h3>
                  <p className="text-xs text-muted-foreground">{film.genre} · {film.director}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                  <span className="text-sm text-foreground">{film.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section>
          <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2 mb-5">
            <Star className="w-5 h-5 text-primary" /> Your Reviews
          </h2>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <Film className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">No reviews yet. Watch a premiere to share your thoughts.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
