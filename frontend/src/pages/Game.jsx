import { useState } from "react";
import { GamesHeroSection } from "../components/HeroSection";
import FeaturedGames from "../components/FeaturedGames";
import GamesCard from "../components/GamesCard";
import { GamesCTASection } from "../components/CTASection";
import SEOHead from "../components/SeoHead.jsx";

const GamesPage = () => {
    const [featuredGames, setFeaturedGames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return (
        <>
          
          <SEOHead
                title={
                    "4-3-3 Games – Explore Free & Trending Mobile Games"
                }
                description={
                    "Download and play trending mobile games from 4-3-3 Games — discover new worlds, adventures, and fun experiences."
                }
                image={"/images/gameimg.jpeg"}
                url={window.location.href}
            />
          

            <div className="bg-gradient-to-b from-[#050A1A] via-[#0A0F1C] to-[#1C2541] text-[#EAEAEA]">
                <GamesHeroSection />
                <FeaturedGames
                    featuredGames={featuredGames}
                    loading={loading}
                    error={error}
                />
                <GamesCard
                    setFeaturedGames={setFeaturedGames}
                    setLoading={setLoading}
                    setError={setError}
                />
                <GamesCTASection />
            </div>
        </>
    );
};

export default GamesPage;
