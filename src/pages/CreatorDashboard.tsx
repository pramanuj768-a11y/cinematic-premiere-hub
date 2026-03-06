import { useState } from "react";
import { Upload, DollarSign, Globe, Ticket, BarChart3, Film, Image, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CreatorDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [premiereDate, setPremiereDate] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  const stats = [
    { label: "Tickets Sold", value: "—", icon: Ticket, change: "—" },
    { label: "Revenue", value: "—", icon: DollarSign, change: "—" },
    { label: "Countries", value: "—", icon: Globe, change: "—" },
  ];

  const handlePublish = async () => {
    if (!user || !title.trim()) return;
    setPublishing(true);
    try {
      const { error } = await supabase.from("films").insert({
        creator_id: user.id,
        title: title.trim(),
        genre: genre.trim() || null,
        description: description.trim() || null,
        premiere_date: premiereDate || null,
        ticket_price: parseFloat(ticketPrice) || 9.99,
        is_published: true,
      });
      if (error) throw error;
      toast.success("Film published successfully!");
      setTitle(""); setGenre(""); setDescription(""); setPremiereDate(""); setTicketPrice("");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setPublishing(false);
    }
  };

  if (loading || !user) return null;

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Creator Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded">{stat.change}</span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-semibold text-foreground">Upload New Film</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Film Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground" placeholder="Enter film title" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Genre</label>
              <input value={genre} onChange={(e) => setGenre(e.target.value)} className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground" placeholder="e.g. Sci-Fi, Drama" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 flex items-center gap-2"><Calendar className="w-3 h-3" /> Premiere Date</label>
              <input type="datetime-local" value={premiereDate} onChange={(e) => setPremiereDate(e.target.value)} className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 flex items-center gap-2"><DollarSign className="w-3 h-3" /> Ticket Price</label>
              <input type="number" value={ticketPrice} onChange={(e) => setTicketPrice(e.target.value)} className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground" placeholder="14.99" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-muted-foreground mb-2">Description</label>
              <textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground resize-none" placeholder="Tell viewers about your film..." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { label: "Upload Film", icon: Film },
              { label: "Upload Trailer", icon: Upload },
              { label: "Upload Poster", icon: Image },
            ].map((item) => (
              <div key={item.label} className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 hover:bg-secondary/50 transition-colors">
                <item.icon className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <button onClick={handlePublish} disabled={publishing || !title.trim()} className="mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition disabled:opacity-50">
            {publishing ? "Publishing..." : "Publish Film"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
