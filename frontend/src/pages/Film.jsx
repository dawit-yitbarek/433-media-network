import { FilmsHeroSection } from '../components/HeroSection';
import FeaturedFilms from '../components/FeaturedFilms';
import FilmCard from '../components/FilmCard';

const FilmPage = () => {
    return (
        <>
            {/* Hero Section */}
            <FilmsHeroSection />

            {/* Featured Films Section */}
            <FeaturedFilms />

            {/* More Films Section */}
            <FilmCard />
        </>
    );
};

export default FilmPage;
