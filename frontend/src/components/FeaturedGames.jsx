import { FeaturedFilmsLoading } from "./LoadingComponent";
import { EmptyPostCard } from "./EmptyState";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const FeaturedGames = ({featuredGames, loading, error}) => {

  return (
    <>
    {(!error || featuredGames?.length > 0) && (
    <section id="featured" className="py-20 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white font-['Bebas Neue'] mb-10 text-center">
        Featured Games
      </h2>
      
      {featuredGames?.length === 0 && loading && (
          <FeaturedFilmsLoading />
      )}
      
      {featuredGames?.length === 0 && !loading && !error && (
                <EmptyPostCard category={"Featured Games"} />
      )}

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory">
          {featuredGames?.map((game) => (
            <motion.div
              key={game?.id}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] bg-[#141A29] rounded-2xl overflow-hidden shadow-[0_0_25px_#00E0FF20] hover:shadow-[0_0_25px_#00E0FF50] transition snap-center"
            >
              <img
                src={game?.image_url}
                alt={game?.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{game?.title}</h3>
                
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
                  className="mt-3 inline-flex items-center gap-2 text-[#00E0FF] text-sm hover:underline"
                >
                  <Download size={16} /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A0F1C] to-transparent pointer-events-none"></div>
      </div>
    </section>
    )}
    </>
  );
};

export default FeaturedGames;