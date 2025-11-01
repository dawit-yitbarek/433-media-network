import { Newspaper } from "lucide-react";
import { useEffect, useState } from "react";
import { publicApi } from "./Api";
import { PostsError } from "./ErrorComponent";
import { TopHeadlinesLoader } from "./LoadingComponent";
import { useSharedData } from '../context/SharedDataContext';
import { Link } from "react-router-dom"
const BackEndUrl = import.meta.env.VITE_BACKEND_URL;
const FrontEndUrl = import.meta.env.VITE_FRONTEND_URL;

const TopHeadlines = () => {
    const [topHeadlines, setTopHeadlines] = useState([]);
    const [fetchingTopHeadlines, setFetchingTopHeadlines] = useState(false);
    const [topHeadlinesError, setTopHeadlinesError] = useState('');
    const [refresh, setRefresh] = useState(0)
    const { setSharedData } = useSharedData();

    const fetchTopHeadlines = async () => {
        setFetchingTopHeadlines(true)
        setTopHeadlinesError('')

        try {
            const res = await publicApi.get(`${BackEndUrl}/api/posts/top-headlines`)
            setTopHeadlines(res.data.posts)
            setSharedData(res.data.posts);
        } catch (error) {
            console.log('error: ', error)
            setTopHeadlinesError('Failed to fetch top Headlines, please try again.')
        } finally {
            setFetchingTopHeadlines(false)
        }

    };

    useEffect(() => {
        fetchTopHeadlines()
    }, [refresh])

    const formatDate = (date) =>
        new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        })

    return (
        <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#141A29] text-[#EAEAEA]">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-12">
                <div className="flex items-center gap-2">
                    <Newspaper size={30} className="text-[#00E0FF]" />
                    <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue'] text-white">
                        Top Headlines
                    </h2>
                </div>
                <p className="text-[#A5A9B8] mt-2 text-sm md:text-base max-w-2xl">
                    Catch up with today’s most important stories across local and global culture.
                </p>
                <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-[#0077FF] to-[#00E0FF] rounded-full"></div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Featured News */}
                {topHeadlines[0] && (
                <Link to={`${FrontEndUrl}/posts/${topHeadlines[0]?.id}`} className="lg:col-span-2 relative group rounded-2xl overflow-hidden shadow-[0_0_30px_#00E0FF10]">
                    {/* <div className="lg:col-span-2 relative group rounded-2xl overflow-hidden shadow-[0_0_30px_#00E0FF10]"> */}
                    <img
                        src={topHeadlines[0]?.image_url}
                        alt={topHeadlines[0]?.title}
                        className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6 z-10">
                        <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight group-hover:text-[#00E0FF] transition">
                            {topHeadlines[0]?.title}
                        </h3>

                        <div className="flex justify-between">
                            <p className="text-sm text-[#A5A9B8] mt-2">{formatDate(topHeadlines[0]?.created_at)}</p>
                            <p className="text-sm text-[#A5A9B8] mt-2">{`by ${topHeadlines[0]?.admin}`}</p>
                        </div>
                    </div>
                    {/* </div> */}
                </Link>
                )}

                {/* Secondary News */}
                <div className="flex flex-col gap-6">
                    {topHeadlines?.slice(1).map((news, i) => (
                        <Link
                            to={`${FrontEndUrl}/posts/${news.id}`}
                            key={i}
                            className="flex gap-4 bg-[#141A29] rounded-xl overflow-hidden hover:shadow-[0_0_20px_#00E0FF30] transition"
                        >
                            {/* <div
                                key={i}
                                className="flex gap-4 bg-[#141A29] rounded-xl overflow-hidden hover:shadow-[0_0_20px_#00E0FF30] transition"
                            > */}
                            <img
                                src={news.image_url}
                                alt={news.title}
                                className="w-1/3 h-[120px] object-cover"
                            />
                            <div className="p-3">
                                <h4 className="text-base font-semibold text-white mt-1 hover:text-[#00E0FF] transition line-clamp-2">
                                    {news.title}
                                </h4>
                                <div className="flex justify-between mt-10">
                                    <p className="text-xs text-[#A5A9B8]">{formatDate(news.created_at)}</p>
                                    <p className="text-xs text-[#A5A9B8]">{`by ${news.admin}`}</p>
                                </div>
                            </div>
                            {/* </div> */}
                        </Link>
                    ))}
                </div>
            </div>

            {fetchingTopHeadlines && (
                <TopHeadlinesLoader />
            )}

            {topHeadlinesError && !fetchingTopHeadlines && (
                <PostsError 
                    message={topHeadlinesError}
                    onRetry={() => setRefresh(prev => prev + 1)}
                />
            )}
        </section>
    );
};

export default TopHeadlines;