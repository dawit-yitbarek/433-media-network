import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicApi } from "../components/Api";
import { Loader2, User2Icon, CalendarDays, Share2, Trophy, Bitcoin, TrendingUp, Newspaper } from "lucide-react";
import { PostsError } from "../components/ErrorComponent";
import PostNotFound from '../components/PostNotFound';

const BackEndUrl = import.meta.env.VITE_BACKEND_URL;

const categoryStyles = {
    sport: {
        gradient: "from-[#0D1B2A] to-[#1B263B]",
        accent: "#00E0FF",
        title: "Sports Insight",
        icon: <Trophy size={25} className="text-[#00E0FF]"/>,
    },
    forex: {
        gradient: "from-[#001F3F] to-[#0A192F]",
        accent: "#00FFAD",
        title: "Forex Market Insight",
        icon: <TrendingUp size={25} className="text-[#00FFAD]"/>
    },
    crypto: {
        gradient: "from-[#050505] to-[#1B003D]",
        accent: "#7B61FF",
        title: "Crypto Analysis",
        icon: <Bitcoin size={25} className="text-[#7B61FF]"/>
    },
    news: {
        gradient: "from-[#141414] to-[#1F1F1F]",
        accent: "#FF005C",
        title: "News & Updates",
        icon: <Newspaper size={25} className="text-[#FF005C]"/>
    },
};

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const res = await publicApi.get(`${BackEndUrl}/api/posts/${id}`);
                setPost(res.data.post);
                setError("");
            } catch (err) {
                console.error(err);
                setError("Failed to load post. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id, refreshKey]);

    // 🧩 Conditional rendering logic:
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#0A0F1C]">
                <Loader2 className="animate-spin text-[#00E0FF]" size={40} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#0A0F1C] flex justify-center items-center">
                <PostsError message={error} onRetry={() => setRefreshKey(prev => prev + 1)} />
            </div>
        );
    }

    if (!post) {
        return (
            <PostNotFound />
        );
    }

    // ✅ Continue normal rendering only when post is available
    const category =
        (post?.category || "news").toLowerCase().trim() in categoryStyles
            ? post?.category.toLowerCase().trim()
            : "news";

    const { gradient, accent, title, icon } = categoryStyles[category] || categoryStyles["sport"];

    return (
        <section className={`min-h-screen text-[#EAEAEA] bg-gradient-to-b ${gradient} relative overflow-hidden`}>
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto mt-24 px-4 md:px-8 flex flex-col lg:flex-row gap-10 items-start">
                {/* Image */}
                <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,224,255,0.2)]">
                    <img
                        src={post?.image_url}
                        alt={post?.title}
                        className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
                    />
                </div>

                {/* Content */}
                <div className="lg:w-1/2 w-full">
                    <span className="flex gap-3 items-center text-sm font-semibold uppercase tracking-widest" style={{ color: accent }}>
                        {icon}
                        {title}
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight font-['Bebas Neue']">
                        {post?.title}
                    </h1>

                    <div className="flex flex-wrap gap-4 items-center mt-4 text-[#A5A9B8] text-sm">
                        <div className="flex items-center gap-2">
                            <User2Icon size={15} /> {post?.admin}
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarDays size={15} />
                            {new Date(post?.created_at).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: post?.title,
                                    url: window.location.href,
                                });
                            }
                        }}
                        className="mt-6 flex items-center gap-2 text-sm hover:underline"
                        style={{ color: accent }}
                    >
                        <Share2 size={15} /> Share this post
                    </button>
                </div>
            </div>

            {/* Post Content */}
            <div className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
                <div className="border-t border-[#1C2541] my-10"></div>
                <article className="prose prose-invert prose-lg max-w-none leading-relaxed text-[#D0D4E0]">
                    {post?.content.split("\n").map((p, i) => (
                        <p key={i} className="mb-5 text-base md:text-lg font-light">
                            {p}
                        </p>
                    ))}
                </article>
            </div>

            {/* Accent Light */}
            <div
                className="absolute top-0 left-0 w-full h-32 opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle, ${accent}, transparent)` }}
            ></div>
        </section>
    );
};

export default PostPage;
