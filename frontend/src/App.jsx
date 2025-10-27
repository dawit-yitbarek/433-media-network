import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sports from './pages/Sports';
import ForexPage from './pages/Forex';
import CrtptoPage from './pages/Crypto';
import NewsPage from './pages/News';
import PostPage from './pages/Post';
import FilmPage from './pages/Film';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/forex" element={<ForexPage />} />
          <Route path="/crypto" element={<CrtptoPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/films" element={<FilmPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;