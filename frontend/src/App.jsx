import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Sports from "./pages/Sports";
import ForexPage from "./pages/Forex";
import CryptoPage from "./pages/Crypto";
import NewsPage from "./pages/News";
import PostPage from "./pages/Post";
import FilmPage from "./pages/Film";
import GamePage from "./pages/Game";
import AdminPage from "./pages/AdminPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();

    // prevent overlap with Telegram header
    document.body.style.paddingTop = "var(--tg-safe-area-inset-top)";

    // 🔹 history stack tracking
    const pathsStack = ["/"];

    // push new route into stack when navigating
    const unlisten = navigate((_, { location }) => {
      const path = location.pathname;
      if (pathsStack[pathsStack.length - 1] !== path) {
        pathsStack.push(path);
      }

      if (path !== "/") {
        tg.BackButton.show();
      } else {
        tg.BackButton.hide();
      }
    });

    // 🔹 handle back button click
    const handleBack = () => {
      if (pathsStack.length > 1) {
        pathsStack.pop();
        const previous = pathsStack[pathsStack.length - 1];
        navigate(previous);
      } else {
        tg.close();
      }
    };

    tg.BackButton.onClick(handleBack);

    // cleanup
    return () => {
      tg.BackButton.offClick(handleBack);
      unlisten();
    };
  }, [navigate]);

  return (
    <div className="bg-[#0D1B2A] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[calc(16px+var(--tg-safe-area-inset-top))]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/forex" element={<ForexPage />} />
          <Route path="/crypto" element={<CryptoPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/films" element={<FilmPage />} />
          <Route path="/games" element={<GamePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;