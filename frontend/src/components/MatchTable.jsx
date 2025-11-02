import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MatchTable = ({ leagues }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const leagueIcons = {
        'Premier League': '/icons/eplicon.jpeg',
        'Primera Division': '/icons/laicon.webp',
        'Serie A': '/icons/saicon.jpeg',
        'Bundesliga': '/icons/buicon.jpg',
        'Ligue 1': '/icons/flicon.png',
        'UEFA Champions League': '/icons/clicon3.jpg'
    }



    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % leagues.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? leagues.length - 1 : prev - 1));

    const formatTime = (utcDate) => {
        const date = new Date(utcDate);
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    const getStatusBadge = (status, time) => {
        switch (status) {
            case "LIVE":
            case "IN_PLAY":
            case "PAUSED":
                return (
                    <span className="px-3 py-1 text-xs bg-[#00E0FF]/10 text-[#00E0FF] rounded-lg animate-pulse">
                        LIVE
                    </span>
                );
            case "FINISHED":
                return (
                    <span className="px-3 py-1 text-xs bg-[#1C2541] text-[#A5A9B8] rounded-lg">
                        FT
                    </span>
                );
            case "TIMED":
            case "SCHEDULED":
                return (
                    <span className="py-1 text-xs text-[#A5A9B8]">
                        {formatTime(time)}
                    </span>
                );
            default:
                return (
                    <span className="px-3 py-1 text-xs bg-[#1C2541] text-[#EAEAEA] rounded-lg">
                        {status.status}
                    </span>
                );
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Slider */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {leagues.map((league, index) => (
                    <div
                        key={index}
                        className="min-w-full flex-shrink-0 flex flex-col items-center"
                    >
                        {/* League Header */}
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <img
                                src={leagueIcons[league.league]}
                                alt={`${league.league === "Primera Division" ? "Laliga" : league.league}`}
                                className="w-10 h-10 sm:w-12 rounded-xl sm:h-12 object-contain"
                            />
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                {`${league.league === "Primera Division" ? "Laliga" : league.league}`}
                            </h2>
                        </div>

                        {/* Table */}
                        <div className="w-full max-w-5xl bg-[#141A29] rounded-xl overflow-hidden shadow-[0_0_25px_#00E0FF20] border border-[#1C2541]">
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
                                    {league.matches?.map((match) => (
                                        <tr
                                            key={match.id}
                                            className={`hover:bg-[#1C2541]/40 transition ${match.status === "LIVE" ? "border-l-4 border-[#00E0FF]" : ""
                                                }`}
                                        >
                                            {/* Home Team */}
                                            <td className="py-4 text-right w-2/5 align-middle">
                                                <div className="flex flex-col sm:flex-row sm:gap-2 justify-end items-center">
                                                    {/* Mobile Image */}
                                                    <img
                                                        src={match.homeTeam.crest}
                                                        alt={match.homeTeam.name}
                                                        className="w-6 h-6 sm:w-7 sm:h-7 mx-auto sm:mx-0 block sm:hidden"
                                                    />
                                                    <span className="text-xs sm:text-sm mt-1 sm:mt-0">
                                                        {match.homeTeam.shortName || match.homeTeam.name}
                                                    </span>
                                                    {/* Desktop Image */}
                                                    <img
                                                        src={match.homeTeam.crest}
                                                        alt={match.homeTeam.name}
                                                        className="w-6 h-6 sm:w-7 sm:h-7 mx-auto sm:mx-0 hidden sm:block"
                                                    />
                                                </div>
                                            </td>

                                            {/* Score */}
                                            <td className="py-4 px-3 sm:px-4 text-center font-semibold text-[#00E0FF] text-sm sm:text-base w-1/5 align-middle">
                                                {match.score.fullTime.home !== null && match.score.fullTime.away !== null
                                                    ? `${match.score.fullTime.home} - ${match.score.fullTime.away}`
                                                    : "vs"}
                                            </td>

                                            {/* Away Team */}
                                            <td className="py-4 text-left w-2/5 align-middle">
                                                <div className="flex flex-col sm:flex-row items-center justify-start sm:gap-2">
                                                    <img
                                                        src={match.awayTeam.crest}
                                                        alt={match.awayTeam.name}
                                                        className="w-6 h-6 sm:w-7 sm:h-7 mx-auto sm:mx-0"
                                                    />
                                                    <span className="text-xs sm:text-sm mt-1 sm:mt-0">
                                                        {match.awayTeam.shortName || match.awayTeam.name}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Status */}
                                            <td className="py-4 text-center md:text-left align-middle">
                                                {getStatusBadge(match.status, match.utcDate)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-3">
                            {leagues.map((_, i) => (
                                <span
                                    key={i}
                                    className={`w-3 h-3 rounded-full transition-all ${i === currentIndex
                                        ? "bg-[#00E0FF]"
                                        : "bg-[#1C2541] hover:bg-[#00E0FF]/40 border border-[#00E0FF]/40"
                                        }`}
                                ></span>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center items-center w-full mt-3 mb-0">
                            <button
                                onClick={handlePrev}
                                className="bg-[#0A0F1C]/70 hover:bg-[#1C2541] border border-[#1C2541] p-3 mx-5 rounded-full text-[#00E0FF]"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-[#0A0F1C]/70 hover:bg-[#1C2541] border border-[#1C2541] p-3 mx-5 rounded-full text-[#00E0FF]"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatchTable;