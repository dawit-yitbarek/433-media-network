import { NewsHeroSection } from '../components/HeroSection'
import TopHeadlines from '../components/TopHeadlines';
import PostCard from '../components/PostCard';
import { NewsCTASection } from '../components/CTASection';

const NewsPage = () => {
    return (
        <>
            {/* News Hero Section */}
            <NewsHeroSection />

            {/* TopHeadlines Section */}
            <TopHeadlines />

            {/* News Posts Section */}
            <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-[#EAEAEA]">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="flex justify-center gap-2 items-center text-3xl md:text-4xl font-bold text-white font-['Bebas Neue']">
                        Latest News from 4-3-3 Media
                    </h2>
                    <p className="text-[#A5A9B8] mt-2 text-sm md:text-base max-w-2xl mx-auto">
                        Breaking updates, stories, and exclusive coverage — stay informed with the latest news headlines.
                    </p>
                    <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-[#0077FF] to-[#00E0FF] mx-auto rounded-full"></div>
                </div>

                {/* Posts Grid */}
                <PostCard category="news" />
            </section>

            {/* News CTA Section */}
            <NewsCTASection />
        </>
    );
};

export default NewsPage;