import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomeHeroSection } from "../components/HeroSection";
import Trending from "../components/Trending";
import WhySection from "../components/WhySection";
import ExploreSection from "../components/ExploreSection";
import JoinCommunity from "../components/JoinCommunity";
import SEOHead from "../components/SeoHead.jsx";

const Home = () => {
  const location = useLocation();
  const isTelegram = typeof window !== "undefined" && window.Telegram?.WebApp;

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {!isTelegram && (
        <SEOHead
          title="4-3-3 Media Network – Sports, Forex, Crypto, Films, Games & More"
          description="Explore 4-3-3 Media Network: your digital hub for sports, forex, crypto, films, games, and world news — all unified under one brand."
          image="/images/433-home-preview.jpg"
          url={typeof window !== "undefined" ? window.location.href : ""}
        />
      )}

      <div className="bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-[#EAEAEA] min-h-screen">
        <HomeHeroSection />
        <Trending />
        <WhySection />
        <ExploreSection />
        <JoinCommunity />
      </div>
    </>
  );
};

export default Home;