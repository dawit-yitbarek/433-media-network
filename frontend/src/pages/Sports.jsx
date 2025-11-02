import { useState, useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { publicApi } from "../components/Api";
import { TableLoading } from "../components/LoadingComponent";
import { TableError } from "../components/ErrorComponent";
import { EmptyMatchTable } from "../components/EmptyState";
import MatchTable from "../components/MatchTable";
import SportsPosts from "../components/SportPosts";
import { SportCTASection } from "../components/CTASection";
import SEOHead from "../components/SeoHead.jsx";
const BackendUrl = import.meta.env.VITE_BACKEND_URL;
const FrontendUrl = import.meta.env.VITE_FRONTEND_URL;

const Sports = () => {
const [matches, setMatches] = useState([]);
const [fetchingMatch, setFetchingMatch] = useState(false);
const [fetchingMatchError, setFetchingMatchError] = useState("");
const [refresh, setRefresh] = useState(0);
const [selectedDate, setSelectedDate] = useState(
new Date().toISOString().split("T")[0]
);
const [matchDateDisplay, setMatchDateDisplay] = useState("Today's Fixture");

useEffect(() => {  
    const fetchMatches = async () => {  
        try {  
            setFetchingMatchError("");  
            setFetchingMatch(true);  
            const res = await publicApi.get(`${BackendUrl}/api/matches`, {  
                params: { selectedDate }  
            });  

            setMatches(res.data.matches);  
        } catch (error) {  
            console.log("Fetching match error: ", error);  
            const currentDate = new Date().toISOString().split("T")[0];  
            let displayLabel = "";  

            if (currentDate === selectedDate) {  
                displayLabel = "Today's Fixture";  
            } else {  
                const formatted = new Date(selectedDate).toLocaleDateString(  
                    "en-US",  
                    {  
                        month: "short",  
                        day: "numeric"  
                    }  
                );  
                displayLabel = `Matches on ${formatted}`;  
            }  

            setFetchingMatchError(`Failed to fetch ${displayLabel}`);  
        } finally {  
            setFetchingMatch(false);  
        }  
    };  

    fetchMatches();  
}, [refresh, selectedDate]);  

useEffect(() => {  
    const currentDate = new Date().toISOString().split("T")[0];  
    if (currentDate === selectedDate) {  
        setMatchDateDisplay("Today's Fixture");  
    } else {  
        const formatted = new Date(selectedDate).toLocaleDateString(  
            "en-US",  
            {  
                month: "short",  
                day: "numeric"  
            }  
        );  
        setMatchDateDisplay(`Matches on ${formatted}`);  
    }  
}, [selectedDate]);  

// Group matches by league  
const leagueOrder = ["CL", "PL", "PD", "SA", "BL1", "FL1"];  

const leagues = Object.values(  
    matches?.reduce((acc, match) => {  
        const leagueCode = match.competition.code;  
        if (!acc[leagueCode]) {  
            acc[leagueCode] = {  
                code: leagueCode,  
                league: match.competition.name,  
                emblem: match.competition.emblem,  
                matches: []  
            };  
        }  
        acc[leagueCode].matches.push(match);  
        return acc;  
    }, {})  
).sort((a, b) => leagueOrder.indexOf(a.code) - leagueOrder.indexOf(b.code));  

return (  
    <>  
        
      <SEOHead  
            title={  
                "4-3-3 Sports – Football News, Analysis & Highlights"  
            }  
            description={  
                "Stay ahead with 4-3-3 Sports. Get football news, match results, in-depth analysis, and player updates — all in one place."  
            }  
            image={"/images/sportimg.jpg"}  
            url={window.location.href}  
        />  

        <div className="min-h-screen bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-[#EAEAEA] pt-28 pb-16 px-3 sm:px-6 md:px-12 overflow-hidden">  
            {/* Fixtures & Results Section */}  
            <section>  
                {/* Header */}  
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">  
                    <h1 className="text-4xl md:text-5xl font-bold font-['Bebas Neue'] text-white">  
                        {matchDateDisplay}  
                    </h1>  

                    <div className="flex items-center gap-3">  
                        <input  
                            type="date"  
                            value={selectedDate}  
                            onChange={e => setSelectedDate(e.target.value)}  
                            className="bg-[#d6d6f5] text-[#0c0c0e] px-3 py-2 rounded-lg border border-[#1C2541] focus:border-[#00E0FF] outline-none text-sm sm:text-base"  
                        />  
                        <button  
                            onClick={() => {  
                                setRefresh(prev => prev + 1);  
                            }}  
                            className="p-2 bg-[#141A29] hover:bg-[#1C2541] rounded-lg border border-[#1C2541] text-[#00E0FF]"  
                        >  
                            <RotateCcw  
                                size={20}  
                                className={`${  
                                    fetchingMatch ? "animate-spin" : ""  
                                }`}  
                            />  
                        </button>  
                    </div>  
                </div>  

                {/* 1️⃣ Loader */}  
                {fetchingMatch && <TableLoading />}  

                {/* 2️⃣ Error State */}  
                {!fetchingMatch && fetchingMatchError && (  
                    <TableError  
                        message={fetchingMatchError}  
                        refresh={() => setRefresh(prev => prev + 1)}  
                    />  
                )}  

                {/* 3️⃣ Empty State */}  
                {!fetchingMatch &&  
                    !fetchingMatchError &&  
                    leagues.length === 0 && (  
                        <EmptyMatchTable  
                            selectedDate={selectedDate}  
                            matchDateDisplay={matchDateDisplay}  
                        />  
                    )}  

                {/* 4️⃣ Leagues Display */}  
                {!fetchingMatch &&  
                    !fetchingMatchError &&  
                    leagues.length > 0 && <MatchTable leagues={leagues} />}  
            </section>  

            {/* Sport Posts Section */}  
            <SportsPosts />  

            {/* CTA Section */}  
            <SportCTASection />  
        </div>  
    </>  
);

};

export default Sports;