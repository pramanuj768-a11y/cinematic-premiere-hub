import poster1 from "@/assets/film-poster-1.jpg";
import poster2 from "@/assets/film-poster-2.jpg";
import poster3 from "@/assets/film-poster-3.jpg";
import poster4 from "@/assets/film-poster-4.jpg";
import poster5 from "@/assets/film-poster-5.jpg";
import poster6 from "@/assets/film-poster-6.jpg";

export interface Film {
  id: string;
  title: string;
  director: string;
  genre: string;
  poster: string;
  description: string;
  premiereDate: string;
  ticketPrice: number;
  rating: number;
  revenue: string;
}

export const films: Film[] = [
  {
    id: "1",
    title: "The Last Horizon",
    director: "Elena Vasquez",
    genre: "Sci-Fi",
    poster: poster1,
    description: "A lone astronaut discovers a signal from beyond the known universe, leading humanity to question everything about its place among the stars.",
    premiereDate: "2026-03-20T20:00:00Z",
    ticketPrice: 14.99,
    rating: 9.2,
    revenue: "$42M",
  },
  {
    id: "2",
    title: "Midnight Rain",
    director: "Marcus Chen",
    genre: "Noir Thriller",
    poster: poster2,
    description: "A detective haunted by a cold case must navigate the rain-soaked streets of a city that refuses to let its secrets go.",
    premiereDate: "2026-03-25T21:00:00Z",
    ticketPrice: 12.99,
    rating: 8.7,
    revenue: "$38M",
  },
  {
    id: "3",
    title: "Kingdom of Ash",
    director: "Priya Sharma",
    genre: "Fantasy Epic",
    poster: poster3,
    description: "An exiled warrior returns to reclaim a throne guarded by ancient gods and forgotten prophecies.",
    premiereDate: "2026-04-01T19:00:00Z",
    ticketPrice: 16.99,
    rating: 9.5,
    revenue: "$87M",
  },
  {
    id: "4",
    title: "Golden Hours",
    director: "James Whitfield",
    genre: "Drama",
    poster: poster4,
    description: "Two strangers meet at sunset and share a single evening that changes the course of their lives forever.",
    premiereDate: "2026-04-10T18:00:00Z",
    ticketPrice: 11.99,
    rating: 8.9,
    revenue: "$28M",
  },
  {
    id: "5",
    title: "The Red Door",
    director: "Yuki Tanaka",
    genre: "Horror",
    poster: poster5,
    description: "A family moves into a house with a door that should never be opened. But curiosity has a price.",
    premiereDate: "2026-04-15T22:00:00Z",
    ticketPrice: 13.99,
    rating: 8.4,
    revenue: "$55M",
  },
  {
    id: "6",
    title: "Neon Ronin",
    director: "Alex Drakos",
    genre: "Cyberpunk Action",
    poster: poster6,
    description: "In a neon-drenched megacity, a rogue mercenary takes on the corporation that created him.",
    premiereDate: "2026-04-20T20:00:00Z",
    ticketPrice: 15.99,
    rating: 9.0,
    revenue: "$63M",
  },
];

export const directors = [
  { name: "Elena Vasquez", films: 4, followers: "120K" },
  { name: "Marcus Chen", films: 7, followers: "89K" },
  { name: "Priya Sharma", films: 3, followers: "210K" },
  { name: "Yuki Tanaka", films: 5, followers: "156K" },
];
