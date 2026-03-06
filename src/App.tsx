import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import Index from "./pages/Index";
import FilmPage from "./pages/FilmPage";
import PremierePage from "./pages/PremierePage";
import CreatorDashboard from "./pages/CreatorDashboard";
import UserProfile from "./pages/UserProfile";
import TopBoxOffice from "./pages/TopBoxOffice";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/film/:id" element={<FilmPage />} />
            <Route path="/premieres" element={<PremierePage />} />
            <Route path="/top-box-office" element={<TopBoxOffice />} />
            <Route path="/creator" element={<CreatorDashboard />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
