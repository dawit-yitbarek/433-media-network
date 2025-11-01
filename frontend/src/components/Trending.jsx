import { useState, useEffect } from "react";
import { publicApi } from "./Api";
import PostCard from "./PostCard";
import { TrendingPost, TrendingFilms, TrendingGames } from "./TrendingCard";
import { Star } from "lucide-react";
import { PostsLoading } from "./LoadingComponent";
import { PostsError } from "./ErrorComponent";

const Trending = () => {
    const [trendingData, setTrendingData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [active, setActive] = useState("Sport");
    const [refresh, setRefresh] = useState(0);
    const BackEndUrl = import.meta.env.VITE_BACKEND_URL;

    const fetchTrendingPosts = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await publicApi.get(`${BackEndUrl}/api/trending`);
            setTrendingData(res.data);
        } catch (error) {
            setError("Failed to load Trending posts. Please try again.");
            console.log("Error on trending data: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrendingPosts();
    }, [refresh]);

    const sections = ["Sport", "Forex", "Crypto", "News", "Film", "Game"];

    return (
        <section id="trending" className="py-16 px-4 md:px-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                    🔥 Trending Now
                </h2>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center md:justify-end gap-3">
                    {sections.map(s => (
                        <button
                            key={s}
                            onClick={() => setActive(s)}
                            className={`px-4 py-2 rounded-lg text-sm md:text-base transition ${
                                active === s
                                    ? "bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white"
                                    : "bg-[#1C2541] text-[#A5A9B8] hover:text-white border border-[#00E0FF]"
                            }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {["Sport", "Forex", "Crypto", "News"].includes(active) && (
                    <TrendingPost posts={trendingData?.posts} active={active} />
                )}

                {active === "Film" && (
                    <TrendingFilms films={trendingData?.films} />
                )}

                {active === "Game" && (
                    <TrendingGames games={trendingData?.games} />
                )}
            </div>

            {loading && <PostsLoading count={3}/>}

            {!loading && error && (
                <PostsError message={error} onRetry={fetchTrendingPosts} />
            )}
        </section>
    );
};

export default Trending;
