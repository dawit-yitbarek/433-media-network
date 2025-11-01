import { FeaturedFilmsLoading } from "./LoadingComponent";
import { EmptyPostCard } from "./EmptyState";
import { motion } from "framer-motion";
import { Star, Play, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useRef } from "react";

const FeaturedFilms = ({featuredFilms, loading, error}) => {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        const container = sliderRef.current;
        const scrollAmount = container.offsetWidth * 0.7;
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
      <>
      {(!error || featuredFilms?.length > 0) && (
        <section id="explore" className="relative py-24 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#141A29] text-[#EAEAEA] overflow-hidden">
            {/* Glow background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#0077FF]/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 right-20 w-96 h-96 bg-[#00E0FF]/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Header */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold font-['Bebas Neue'] text-white tracking-wide">
                    Featured Films
                </h2>
                <p className="text-[#A5A9B8] mt-2 text-sm md:text-base">
                    Discover powerful storytelling and cinematic brilliance.
                </p>
                <div className="mt-4 w-28 h-[3px] bg-gradient-to-r from-[#0077FF] to-[#00E0FF] mx-auto rounded-full"></div>
            </div>
            
            {featuredFilms?.length === 0 && loading && (
                <FeaturedFilmsLoading />
            )}
            
            {featuredFilms?.length === 0 && !loading && !error && (
                <EmptyPostCard category={"Featured Films"} />
            )}
            
            {/* Scroll buttons */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0A0F1C]/60 hover:bg-[#1C2541]/80 text-[#00E0FF] p-3 rounded-full shadow-lg z-20 hidden sm:block"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0A0F1C]/60 hover:bg-[#1C2541]/80 text-[#00E0FF] p-3 rounded-full shadow-lg z-20 hidden sm:block"
            >
                <ChevronRight size={24} />
            </button>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0A0F1C] to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0A0F1C] to-transparent pointer-events-none z-10"></div>
            

            {/* Film cards */}
            <div
                ref={sliderRef}
                className="flex gap-8 snap-x snap-mandatory overflow-x-auto no-scrollbar px-2 md:px-0 pb-8 scroll-smooth"
            >
                {featuredFilms?.map((film, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        whileHover={{ scale: 1.07 }}
                        className="snap-center flex-shrink-0 relative min-w-[250px] sm:min-w-[300px] lg:min-w-[340px] bg-[#141A29] rounded-2xl overflow-hidden shadow-[0_0_25px_#00E0FF20] hover:shadow-[0_0_45px_#00E0FF60] transition group"
                    >
                        {/* Film Poster */}
                        <img
                            src={film?.poster_url}
                            alt={film?.title}
                            className="w-full h-[440px] object-cover group-hover:scale-110 transition duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-[#0A0F1C]/60 to-transparent"></div>
                        {/* Info */}
                        <div className="absolute bottom-6 left-6 right-6 z-10">
                            <h3 className="text-2xl font-semibold text-white group-hover:text-[#00E0FF] transition duration-300">
                                {film?.title}
                            </h3>
                            <p className="text-sm text-[#A5A9B8]">{film?.genre}</p>

                            <div className="flex justify-between items-center mt-3">
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <Star size={16} fill="currentColor" />
                                    <span className="text-sm font-medium">{film?.rating}</span>
                                </div>
                                <button
                                onClick={() => window.open(film?.telegram_link, "_blank")}
                                className="flex items-center gap-2 text-[#00E0FF] hover:underline text-sm font-medium">
                                    <Download size={16} /> Download
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
        
             </div>
        </section>
        )}
      </>
    );
};

export default FeaturedFilms;