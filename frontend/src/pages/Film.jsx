import { useState } from "react";
import { FilmsHeroSection } from "../components/HeroSection";
import FeaturedFilms from "../components/FeaturedFilms";
import { FilmCTASection } from "../components/CTASection";
import FilmCard from "../components/FilmCard";
import SEOHead from "../components/SeoHead.jsx";

const FilmPage = () => {
    const [featuredFilms, setFeaturedFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return (
        <>
            <SEOHead
                title={"4-3-3 Films – Movies, Reviews & Entertainment"}
                description={
                    "Explore top-rated films, reviews, and entertainment updates from 4-3-3 Films. Watch and enjoy stories that move you."
                }
                image={"/images/filmimg.jpeg"}
                url={window.location.href}
            />

            {/* Hero Section */}
            <FilmsHeroSection />

            {/* Featured Films Section */}
            <FeaturedFilms
                featuredFilms={featuredFilms}
                loading={loading}
                error={error}
            />

            {/* More Films Section */}
            <FilmCard
                setFeaturedFilms={setFeaturedFilms}
                setLoading={setLoading}
                setError={setError}
            />

            {/* CTA Section */}
            <FilmCTASection />
        </>
    );
};

export default FilmPage;
