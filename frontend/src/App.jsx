import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTelegramBackButton } from './hooks/useTelegramBackButton';
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
  useTelegramBackButton();

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;