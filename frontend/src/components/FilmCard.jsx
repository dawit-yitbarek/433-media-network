import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { publicApi } from "./Api";
import { FilmsLoading } from "./LoadingComponent";
import { PostsError } from "./ErrorComponent";
import { EmptyPostCard } from "./EmptyState";
const BackEndUrl = import.meta.env.VITE_BACKEND_URL;
const FrontEndUrl = import.meta.env.VITE_FRONTEND_URL;

export default function FilmCard({setFeaturedFilms, setLoading, setError}) {
  const [films, setFilms] = useState([])
  const [fetchingFilms, setFetchingFilms] = useState(false)
  const [filmsError, setFilmsError] = useState('')
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 20; // how many films to fetch per request ;
  
  const fetchFilms = async (append = false) => {
  setFetchingFilms(true);
  setLoading(true)
  setFilmsError("");
  setError(false)

  try {
    const currentOffset = append ? offset : 0;

    const res = await publicApi.get(`${BackEndUrl}/api/films`, {
      params: { limit, offset: currentOffset },
    });

    const newFilms = res?.data.films;

    if (newFilms.length < limit) setHasMore(false);

    // Only increment offset if we successfully fetched something
    if (newFilms.length > 0) {
      setOffset((prev) => prev + limit);
    }

    setFilms((prev) => {
      const updatedFilms = append ? [...prev, ...newFilms] : newFilms;
      setFeaturedFilms(updatedFilms.slice(0, 10));
      return updatedFilms;
    });
  } catch (error) {
    console.log("Error fetching films:", error);
    setFilmsError(
      films.length === 0
        ? "Failed to load films. Please try again."
        : "Failed to load more films. Please try again."
    );
    setError(true)
  } finally {
    setFetchingFilms(false);
    setLoading(false)
  }
};
      // Initial fetch
    useEffect(() => {
        setOffset(0);
        setHasMore(true);
        fetchFilms(false);
    }, []);

    const handleLoadMore = () => {
        const append = films.length === 0 ? false : true;
        fetchFilms(append);
    };

  
  
    return (
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#0A0F1C] via-[#10192E] to-[#1C2541] text-[#EAEAEA]">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue'] text-white">
                    More <span className="text-[#00E0FF]">Films to Explore</span>
                </h2>
                <p className="text-[#A5A9B8] mt-2 text-sm md:text-base max-w-2xl mx-auto">
                    Dive into more genres, trending releases, and hidden gems from the 4-3-3 Film archive.
                </p>
                <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-[#0077FF] to-[#00E0FF] mx-auto rounded-full"></div>
            </div>

            {/* Film Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {films?.slice(10).map((film, i) => (
                    <div
                        key={i}
                        className="bg-[#141A29] rounded-xl overflow-hidden shadow-[0_0_25px_#00E0FF20] hover:shadow-[0_0_35px_#00E0FF40] transition group"
                    >
                        <div className="relative">
                            <img
                                src={film?.poster_url}
                                alt={film?.title}
                                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                <h3 className="text-xl font-bold font-['Bebas Neue']">{film?.title}</h3>
                                <p className="text-sm text-[#A5A9B8]">{film?.genre}</p>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <Star size={16} fill="currentColor" />
                                    <span className="text-sm font-medium">{film?.rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 flex justify-between items-center">
                            <button
                                onClick={() => window.open(film?.telegram_link, "_blank")}
                                className="px-5 py-2 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] rounded-lg font-semibold text-[#0A0F1C] hover:shadow-[0_0_15px_#00E0FF60] transition"
                            >
                                Watch on Telegram
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            {fetchingFilms && (
              <FilmsLoading />
            )}
            
            {filmsError && !fetchingFilms && (
              <PostsError 
                message={filmsError}
                onRetry={handleLoadMore}
              />
            )}
            
            {films?.length === 0 && !fetchingFilms && !filmsError && (
                <EmptyPostCard category={"More Films"} />
            )}
            
            
            {hasMore && films.length > 0 && !fetchingFilms && !filmsError && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleLoadMore}
                        disabled={fetchingFilms}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white rounded-xl hover:shadow-[0_0_15px_#00E0FF] transition disabled:opacity-60"
                    >
                        Load More
                    </button>
                </div>
            )}
        </section>
    );
}