import { Upload, DollarSign, Globe, Ticket, BarChart3, Film, Image, Calendar } from "lucide-react";

const CreatorDashboard = () => {
  const stats = [
    { label: "Tickets Sold", value: "12,847", icon: Ticket, change: "+23%" },
    { label: "Revenue", value: "$189,420", icon: DollarSign, change: "+18%" },
    { label: "Countries", value: "47", icon: Globe, change: "+5" },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Creator Dashboard</h1>

        {/* Stats */}
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

        {/* Upload Section */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-semibold text-foreground">Upload New Film</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Film Title</label>
              <input className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground" placeholder="Enter film title" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Genre</label>
              <input className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground" placeholder="e.g. Sci-Fi, Drama" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 flex items-center gap-2"><Calendar className="w-3 h-3" /> Premiere Date</label>
              <input type="datetime-local" className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 flex items-center gap-2"><DollarSign className="w-3 h-3" /> Ticket Price</label>
              <input type="number" className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground" placeholder="14.99" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-muted-foreground mb-2">Description</label>
              <textarea rows={3} className="w-full bg-secondary text-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground resize-none" placeholder="Tell viewers about your film..." />
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

          <button className="mt-8 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition">
            Publish Film
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
