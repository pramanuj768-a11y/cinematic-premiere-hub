import { useState } from "react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { films } from "@/lib/mock-data";
import { Send, Users, MonitorPlay } from "lucide-react";

const PremierePage = () => {
  const film = films[0];
  const [chatMessages, setChatMessages] = useState([
    { user: "CinemaFan", message: "Can't wait for this!" },
    { user: "FilmBuff42", message: "The trailer was incredible" },
    { user: "Director_Elena", message: "Thank you all for being here 🎬" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setChatMessages([...chatMessages, { user: "You", message: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Player Area */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
              <img src={film.poster} alt={film.title} className="absolute inset-0 w-full h-full object-cover opacity-20 blur-md" />
              <div className="relative z-10 text-center">
                <MonitorPlay className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Premiere Lobby</h2>
                <p className="text-muted-foreground text-sm mb-6">The show begins in</p>
                <CountdownTimer targetDate={film.premiereDate} />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground">{film.title}</h1>
                <p className="text-muted-foreground text-sm mt-1">Directed by {film.director}</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Users className="w-4 h-4" />
                <span>2,847 waiting</span>
              </div>
            </div>
          </div>

          {/* Live Chat */}
          <div className="bg-card border border-border rounded-lg flex flex-col h-[500px] lg:h-auto">
            <div className="p-4 border-b border-border">
              <h3 className="font-display font-semibold text-foreground">Live Chat</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, i) => (
                <div key={i}>
                  <span className="text-xs font-semibold text-primary">{msg.user}</span>
                  <p className="text-sm text-foreground">{msg.message}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-border flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Say something..."
                className="flex-1 bg-secondary text-foreground text-sm px-3 py-2 rounded-md border border-border focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
              />
              <button onClick={sendMessage} className="bg-primary text-primary-foreground p-2 rounded-md hover:brightness-110 transition">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremierePage;
