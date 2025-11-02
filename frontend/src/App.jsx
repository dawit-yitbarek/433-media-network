import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Sports from './pages/Sports';
import ForexPage from './pages/Forex';
import CryptoPage from './pages/Crypto';
import NewsPage from './pages/News';
import PostPage from './pages/Post';
import FilmPage from './pages/Film';
import GamePage from './pages/Game';
import AdminPage from './pages/AdminPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

// ✅ Custom hook for Telegram WebApp integration
function useTelegramIntegration() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    // Safe area fix (so navbar isn't behind Telegram top controls)
    document.body.style.paddingTop = 'env(safe-area-inset-top)';

    // Handle Telegram Back Button
    if (location.pathname !== '/') {
      tg.BackButton.show();
    } else {
      tg.BackButton.hide();
    }

    const handleBack = () => {
      navigate(-1);
    };

    tg.BackButton.onClick(handleBack);

    return () => {
      tg.BackButton.offClick(handleBack);
    };
  }, [location.pathname, navigate]);
}

// ✅ Wrapper to apply Telegram logic inside Router
function AppContent() {
  useTelegramIntegration();

  return (
    <div className="pt-[env(safe-area-inset-top)] bg-[#0D1B2A] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
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
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;