import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';

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

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();

    // Ensure safe area padding for Telegram header (for fullscreen)
    document.body.style.paddingTop = 'var(--tg-safe-area-inset-top)';

    // Handle Telegram Back button logic
    const handleBack = () => {
      if (location.pathname === '/') {
        tg.close();
      } else {
        navigate(-1);
      }
    };

    tg.BackButton.onClick(handleBack);

    // Show back button on non-home routes
    if (location.pathname !== '/') {
      tg.BackButton.show();
    } else {
      tg.BackButton.hide();
    }

    return () => {
      tg.BackButton.offClick(handleBack);
    };
  }, [location, navigate]);

  return (
    <div className="bg-[#0D1B2A] text-white min-h-screen flex flex-col">
      <Navbar />
      {/* Add top padding to avoid overlap under Telegram header */}
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