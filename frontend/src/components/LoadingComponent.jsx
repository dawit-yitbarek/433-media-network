export const TableLoading = () => {
    return (
        <div className="w-full flex flex-col items-center gap-8 my-5">
            {[1].map((n) => (
                <div
                    key={n}
                    className="w-full max-w-5xl bg-[#141A29] rounded-xl overflow-hidden shadow-[0_0_25px_#00E0FF20] border border-[#1C2541]"
                >
                    {/* League Header Skeleton */}
                    <div className="flex justify-center items-center gap-3 py-4 bg-[#0A0F1C]">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
                        <div className="w-40 h-5 rounded-md bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
                    </div>

                    {/* Table Skeleton */}
                    <table className="w-full text-left">
                        <thead className="bg-[#0A0F1C] text-[#A5A9B8] text-xs sm:text-sm uppercase">
                            <tr>
                                <th className="py-3 px-3 sm:px-4 text-center sm:text-right">Home</th>
                                <th className="py-3 px-3 sm:px-4 text-center">Score</th>
                                <th className="py-3 pl-3 sm:pl-4 text-center sm:text-left">Away</th>
                                <th className="py-3 pr-3 sm:pr-4 text-center md:text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4].map((i) => (
                                <tr
                                    key={i}
                                    className="border-t border-[#1C2541] hover:bg-[#1C2541]/30 transition"
                                >
                                    {/* Home Team */}
                                    <td className="py-4 text-right w-2/5">
                                        <div className="flex flex-col sm:flex-row sm:gap-2 justify-end items-center">
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite] block sm:hidden" />
                                            <div className="w-20 h-4 rounded-md bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite] mt-1 sm:mt-0" />
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite] hidden sm:block" />
                                        </div>
                                    </td>

                                    {/* Score */}
                                    <td className="py-4 text-center w-1/5">
                                        <div className="w-10 h-4 mx-auto rounded-md bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
                                    </td>

                                    {/* Away Team */}
                                    <td className="py-4 text-left w-2/5">
                                        <div className="flex flex-col sm:flex-row sm:gap-2 justify-start items-center">
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
                                            <div className="w-20 h-4 rounded-md bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite] mt-1 sm:mt-0" />
                                        </div>
                                    </td>

                                    {/* Status */}
                                    <td className="py-4 text-center md:text-left">
                                        <div className="w-16 h-4 mx-auto rounded-md bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};


export const PostsLoading = () => {
    const skeletons = Array(6).fill(0);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 animate-pulse">
            {skeletons.map((_, i) => (
                <div
                    key={i}
                    className="bg-[#141A29] rounded-xl overflow-hidden shadow-[0_0_20px_#00E0FF20]"
                >
                    {/* Image skeleton */}
                    <div className="h-56 w-full bg-[#475a66ff] relative overflow-hidden">
                        <div className="absolute inset-0 animate-shimmer"></div>
                    </div>

                    {/* Text skeleton */}
                    <div className="p-5 space-y-3">
                        <div className="h-4 bg-[#1C2541] rounded w-3/4"></div>
                        <div className="h-3 bg-[#1C2541] rounded w-full"></div>
                        <div className="h-3 bg-[#1C2541] rounded w-5/6"></div>

                        <div className="flex justify-between items-center pt-4">
                            <div className="h-3 w-1/3 bg-[#1C2541] rounded"></div>
                            <div className="h-3 w-1/4 bg-[#1C2541] rounded"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export const ForexRateLoader = () => {
    const shimmer =
        "bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]";

    return (
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="bg-[#141A29] rounded-xl p-5 shadow-[0_0_20px_#00E0FF20] border border-[#1C2541]"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <div className={`w-20 h-5 rounded-md ${shimmer}`} />
                        <div className={`w-5 h-5 rounded-md ${shimmer}`} />
                    </div>

                    {/* Price */}
                    <div className={`w-28 h-6 mb-3 rounded-md ${shimmer}`} />

                    {/* Percentage Change */}
                    <div className={`w-16 h-4 rounded-md ${shimmer}`} />
                </div>
            ))}
        </div>
    );
};


export const TopHeadlinesLoader = () => {
    return (
        <div className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#141A29]">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Featured News Skeleton */}
                <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-[0_0_30px_#00E0FF10]">
                    <div className="w-full h-[450px] bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:250%_100%] animate-[shimmer_2.6s_infinite]" />
                    <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3">
                        <div className="w-28 h-5 rounded-md bg-gradient-to-r from-[#1C2541] via-[#0A0F1C] to-[#141A29] bg-[length:200%_100%] animate-[shimmer_2.6s_infinite]" />
                        <div className="w-3/4 h-6 rounded-md bg-gradient-to-r from-[#1C2541] via-[#0A0F1C] to-[#141A29] bg-[length:200%_100%] animate-[shimmer_2.6s_infinite]" />
                        <div className="w-32 h-4 rounded-md bg-gradient-to-r from-[#1C2541] via-[#0A0F1C] to-[#141A29] bg-[length:200%_100%] animate-[shimmer_2.6s_infinite]" />
                    </div>
                </div>

                {/* Secondary News Skeletons */}
                <div className="flex flex-col gap-6">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="flex gap-4 bg-[#141A29] rounded-xl overflow-hidden border border-[#1C2541] shadow-[0_0_20px_#00E0FF10]"
                        >
                            <div className="w-1/3 h-[120px] bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:250%_100%] animate-[shimmer_2.6s_infinite]" />
                            <div className="flex-1 flex flex-col justify-center gap-3 p-3">
                                <div className="w-24 h-4 rounded-md bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_2.6s_infinite]" />
                                <div className="w-40 h-5 rounded-md bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_2.6s_infinite]" />
                                <div className="w-20 h-3 rounded-md bg-gradient-to-r from-[#1C2541] via-[#2A3557] to-[#1C2541] bg-[length:200%_100%] animate-[shimmer_2.6s_infinite]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};