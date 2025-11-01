import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Download } from "lucide-react";
import { EmptyPostCard } from "./EmptyState";
import { FilmsLoading } from "./LoadingComponent";
import { PostsError } from "./ErrorComponent";
import { publicApi } from "./Api";
const BackEndUrl = import.meta.env.VITE_BACKEND_URL;

const GamesCard = ({setFeaturedGames, setLoading, setError}) => {
  const [games, setGames] = useState([])
  const [fetchingGames, setFetchingGames] = useState(false)
  const [gamesError, setGamesError] = useState('')
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 20; // how many films to fetch per request ;
  
  const fetchGames = async (append = false) => {
  setFetchingGames(true);
  setLoading(true)
  setGamesError("");
  setError(false)

  try {
    const currentOffset = append ? offset : 0;

    const res = await publicApi.get(`${BackEndUrl}/api/games`, {
      params: { limit, offset: currentOffset },
    });

    const newGames = res?.data.games;

    if (newGames?.length < limit) setHasMore(false);

    // Only increment offset if successfully fetched something
    if (newGames?.length > 0) {
      setOffset((prev) => prev + limit);
    }

    setGames((prev) => {
      const updatedGames = append ? [...prev, ...newGames] : newGames;
      setFeaturedGames(updatedGames?.slice(0, 10));
      return updatedGames;
    });
  } catch (error) {
    console.log("Error fetching games:", error);
    setGamesError(
      games?.length === 0
        ? "Failed to load games. Please try again."
        : "Failed to load more games. Please try again."
    );
    setError(true)
  } finally {
    setFetchingGames(false);
    setLoading(false)
  }
};
      // Initial fetch
    useEffect(() => {
        setOffset(0);
        setHasMore(true);
        fetchGames(false);
    }, []);

    const handleLoadMore = () => {
        const append = games?.length === 0 ? false : true;
        fetchGames(append);
    };
  

  return (
    <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#1C2541]">
      <h2 className="text-3xl md:text-4xl font-bold text-white font-['Bebas Neue'] mb-10 text-center">
        Explore More Games
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {games?.slice(10).map((game) => (
          <motion.div
            key={game?.id}
            whileHover={{ scale: 1.04 }}
            className="bg-[#141A29] rounded-xl overflow-hidden shadow-[0_0_20px_#00E0FF20] hover:shadow-[0_0_25px_#00E0FF40] transition"
          >
            <img
              src={game?.image_url}
              alt={game?.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">
                {game?.title}
              </h3>

               {/* Badges */}
               {game?.badges && (
                <div className="flex flex-wrap gap-2 mt-3">
                 {game?.badges?.split(",").map((badge, i) => (
                     <span
                       key={i}
                       className="text-xs bg-[#1C2541] text-[#00E0FF] px-3 py-1 rounded-full border border-[#00E0FF]/40"
                      >
                          {badge?.trim()}
                      </span>
                  ))}    
                 </div>
               )}


              <a
                href={game?.link}
                target="_blank"
                className="mt-4 inline-flex items-center gap-2 text-[#00E0FF] text-sm hover:underline"
              >
                <Download size={16} /> Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      {fetchingGames && (
          <FilmsLoading />
      )}
            
      {gamesError && !fetchingGames && (
          <PostsError 
            message={gamesError}
            onRetry={handleLoadMore}
          />
      )}
      
      {games.length === 0 && !fetchingGames && !gamesError && (
                <EmptyPostCard category={"More Games"} />
      )}
      
      
      {hasMore && games.length > 0 && !fetchingGames && !gamesError && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleLoadMore}
                        disabled={fetchingGames}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white rounded-xl hover:shadow-[0_0_15px_#00E0FF] transition disabled:opacity-60"
                    >
                        Load More
                    </button>
                </div>
            )}
    </section>
  );
};

export default GamesCard;