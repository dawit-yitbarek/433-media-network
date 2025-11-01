import { Share2, User2Icon, Star, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"

export const TrendingPost = ({ posts, active }) => {
    const handleShare = post => {
        if (navigator.share) {
            navigator.share({
                title: post?.title,
                text: `Check out this post on 4-3-3 Media Network: ${post?.title}`,
                url: `${window.location.origin}/posts/${post?.id}`
            });
        } else {
            alert("Sharing is not supported on this device.");
        }
    };

    const formatDate = date =>
        new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });

    return posts
        ?.filter(post => post?.category === active?.toLowerCase())
        .map((post, i) => (
            <div
                key={post?.id}
                className="bg-[#141A29] rounded-xl overflow-hidden shadow-[0_0_20px_#00E0FF20] hover:shadow-[0_0_25px_#00E0FF40] transition flex flex-col h-full"
            >
                <div className="relative">
                    <img
                        src={post?.image_url}
                        alt={post?.title}
                        className="w-full h-56 object-cover"
                    />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white hover:text-[#00E0FF] transition line-clamp-2">
                        {post?.title}
                    </h3>
                    <p className="text-[#A5A9B8] text-sm mb-4 line-clamp-3">
                        {post?.content.split(" ").slice(0, 20).join(" ")}...
                    </p>
                    <div className="flex-grow" /> {/* pushes footer down */}
                    <div className="flex justify-between items-center text-xs text-[#7E849C]">
                        <span className="flex gap-2">
                            <User2Icon size={14} /> {post?.admin}
                        </span>
                        <span>
                            {post?.created_at && formatDate(post?.created_at)}
                        </span>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <button
                            onClick={() => handleShare(post)}
                            className="flex items-center gap-2 text-[#00E0FF] text-sm hover:underline"
                        >
                            <Share2 size={15} /> Share
                        </button>
                        <Link
                            to={`posts/${post?.id}`}
                            className="text-[#00E0FF] text-sm hover:underline"
                        >
                            Read More →
                        </Link>
                    </div>
                </div>
            </div>
        ));
};

export const TrendingFilms = ({ films }) => {
    return films?.map((film, i) => (
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
                    <h3 className="text-xl font-bold font-['Bebas Neue']">
                        {film?.title}
                    </h3>
                    <p className="text-sm text-[#A5A9B8]">{film?.genre}</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={16} fill="currentColor" />
                        <span className="text-sm font-medium">
                            {film?.rating}
                        </span>
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
    ));
};


export const TrendingGames = ({ games }) => {
    return games?.map((game, i) => (
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

                <Link
                    to={game?.link}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-2 text-[#00E0FF] text-sm hover:underline"
                >
                    <Download size={16} /> Download
                </Link>
            </div>
        </motion.div>
    ));
};
