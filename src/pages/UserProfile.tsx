import { Film, Clock, Star, Ticket, Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

const UserProfile = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);
  const [tickets, setTickets] = useState<(Tables<"tickets"> & { films: Tables<"films"> | null })[]>([]);
  const [reviews, setReviews] = useState<(Tables<"reviews"> & { films: Tables<"films"> | null })[]>([]);

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const [profileRes, ticketsRes, reviewsRes] = await Promise.all([
        supabase.from("profiles").select("*").eq("user_id", user.id).single(),
        supabase.from("tickets").select("*, films(*)").eq("user_id", user.id).order("purchased_at", { ascending: false }),
        supabase.from("reviews").select("*, films(*)").eq("user_id", user.id).order("created_at", { ascending: false }),
      ]);
      if (profileRes.data) setProfile(profileRes.data);
      if (ticketsRes.data) setTickets(ticketsRes.data as any);
      if (reviewsRes.data) setReviews(reviewsRes.data as any);
    };
    fetchData();
  }, [user]);

  if (loading || !user) return null;

  const initials = (profile?.display_name || user.email || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
            {profile?.avatar_url ? (
              <img src={profile.avatar_url} alt="" className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="font-display text-2xl font-bold text-primary">{initials}</span>
            )}
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              {profile?.display_name || user.email}
            </h1>
            <p className="text-muted-foreground text-sm">{user.email}</p>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2 mb-5">
            <Ticket className="w-5 h-5 text-primary" /> Purchased Films
          </h2>
          {tickets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tickets.map((t) => (
                <div key={t.id} className="bg-card border border-border rounded-lg overflow-hidden flex">
                  {t.films?.poster_url && (
                    <img src={t.films.poster_url} alt={t.films.title} className="w-24 h-36 object-cover" />
                  )}
                  <div className="p-4 flex flex-col justify-center">
                    <h3 className="font-display font-semibold text-foreground text-sm">{t.films?.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">${t.price_paid}</p>
                    <span className="text-xs text-primary mt-2">{t.films?.genre}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <Film className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">No tickets purchased yet.</p>
            </div>
          )}
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2 mb-5">
            <Star className="w-5 h-5 text-primary" /> Your Reviews
          </h2>
          {reviews.length > 0 ? (
            <div className="space-y-3">
              {reviews.map((r) => (
                <div key={r.id} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground text-sm">{r.films?.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{r.comment}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <span className="text-sm text-foreground">{r.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <Film className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">No reviews yet. Watch a premiere to share your thoughts.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
