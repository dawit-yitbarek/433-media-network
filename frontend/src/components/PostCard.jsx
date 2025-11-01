import { useEffect, useState } from "react";
import { Share2, User2Icon } from "lucide-react";
import { publicApi } from "./Api";
import { EmptyPostCard } from "./EmptyState";
import { PostsLoading } from "./LoadingComponent";
import { PostsError } from "./ErrorComponent";
import { Link } from "react-router-dom"

const BackEndUrl = import.meta.env.VITE_BACKEND_URL;
const FrontEndUrl = import.meta.env.VITE_FRONTEND_URL;

const PostCard = ({ category }) => {
    const [posts, setPosts] = useState([]);
    const [fetchingPost, setFetchingPost] = useState(false);
    const [fetchingPostsError, setFetchingPostsError] = useState("");
    const [offset, setOffset] = useState(category === 'news' ? 4 : 0);
    const [hasMore, setHasMore] = useState(true);

    const limit = 10; // how many posts to fetch per request ;;;

    const fetchPosts = async (append = false) => {
        setFetchingPost(true);
        setFetchingPostsError("");

        try {
            const res = await publicApi.get(`${BackEndUrl}/api/posts`, {
                params: { category, limit, offset },
            });

            const newPosts = res.data.posts;

            if (newPosts.length < limit) setHasMore(false);

            if (newPosts.length > 0) {
                setOffset((prev) => prev + limit);
            }

            setPosts((prev) => (append ? [...prev, ...newPosts] : newPosts));
        } catch (error) {
            console.log("Error fetching posts:", error);
            setFetchingPostsError(posts.length === 0 ? "Failed to load posts. Please try again." : "Failed to load more posts. Please try again.");
        } finally {
            setFetchingPost(false);
        }
    };

    // Initial fetch
    useEffect(() => {
        setOffset(0);
        setHasMore(true);
        fetchPosts(false);
    }, [category]);

    const handleLoadMore = () => {
        const append = posts.length === 0 ? false : true;
        fetchPosts(append);
    };

    const handleShare = (post) => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: `Check out this post on 4-3-3 Media Network: ${post.title}`,
                url: `${FrontEndUrl}/posts/${post.id}`,
            });
        } else {
            alert("Sharing is not supported on this device.");
        }
    };

    const formatDate = (date) =>
        new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });


    return (
        <div>
            {/* Posts grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts?.map((post, i) => (
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

                            <div className="flex-grow" /> {/* Empty div to push footer to bottom */}

                            <div className="flex justify-between items-center text-xs text-[#7E849C]">
                                <span className="flex gap-2">
                                    <User2Icon size={14} /> {post?.admin}
                                </span>
                                <span>{post?.created_at && formatDate(post.created_at)}</span>
                            </div>

                            <div className="flex justify-between items-center mt-3">
                                <button
                                    onClick={() => handleShare(post)}
                                    className="flex items-center gap-2 text-[#00E0FF] text-sm hover:underline"
                                >
                                    <Share2 size={15} /> Share
                                </button>
                                <Link
                                    to={`${FrontEndUrl}/posts/${post?.id}`}
                                    className="text-[#00E0FF] text-sm hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Loading State */}
            {fetchingPost && (
                <PostsLoading />
            )}

            {/* Error State */}
            {fetchingPostsError && !fetchingPost && (
                <PostsError
                    message={fetchingPostsError}
                    onRetry={handleLoadMore}
                />
            )}

            {/* Empty State */}
            {posts.length === 0 && !fetchingPost && !fetchingPostsError && (
                <EmptyPostCard category={category} />
            )}

            {/* Load More Button */}
            {hasMore && posts.length > 0 && !fetchingPost && !fetchingPostsError && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleLoadMore}
                        disabled={fetchingPost}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white rounded-xl hover:shadow-[0_0_15px_#00E0FF] transition disabled:opacity-60"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default PostCard;
