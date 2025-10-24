import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { HomeHeroSection } from "../components/HeroSection";
import Trending from "../components/Trending";
import WhySection from "../components/WhySection";
import ExploreSection from "../components/ExploreSection";
import JoinCommunity from "../components/JoinCommunity"

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            };
        };
    }, [location]);

    return (
        <div className="bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-[#EAEAEA] min-h-screen">

            {/* Hero Section*/}
            <HomeHeroSection />

            {/* Trending Section*/}
            <Trending />

            {/* Why 4-3-3 Section */}
            <WhySection />

            {/* Explore Section */}
            <ExploreSection />

            {/* Join Community Section */}
            <JoinCommunity />

        </div>
    );
};

export default Home;