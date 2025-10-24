import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, RotateCcw, TrendingUp, TrendingDown } from "lucide-react";
import { ForexRateLoader } from "./LoadingComponent";
import { PostsError } from "./ErrorComponent";

const forexRateApi = import.meta.env.VITE_FOREX_RATE_API

const ForexRateSection = () => {
    const [rates, setRates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [lastUpdated, setLastUpdated] = useState(null);
    const [previousRates, setPreviousRates] = useState({});

    // ✅ Main currencies to display
    const mainCurrencies = ["EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "NZD"];

    const fetchRates = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.get(forexRateApi);
            const data = response.data?.rates || {};

            // ✅ Filter only main currencies
            const filteredRates = Object.entries(data)
                .filter(([symbol]) => mainCurrencies.includes(symbol))
                .map(([symbol, value]) => {
                    const numericValue = parseFloat(value);
                    if (isNaN(numericValue)) return null;

                    const prev = previousRates[symbol];
                    let change = 0;

                    if (prev) change = ((numericValue - prev) / prev) * 100;

                    return {
                        pair: `USD/${symbol}`,
                        price: numericValue,
                        change: change.toFixed(2),
                    };
                })
                .filter(Boolean); // remove nulls

            setRates(filteredRates);
            setPreviousRates(data);
            setLastUpdated(new Date().toLocaleTimeString());
        } catch (error) {
            console.error("Error fetching forex rates:", error);
            setError("Failed to load forex rates. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRates();
    }, []);

    return (
        <section
            id="live-forex"
            className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-[#EAEAEA]"
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div className="flex items-center gap-2">
                    <LineChart size={30} className="text-[#00E0FF]" />
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue'] text-white">
                            Live Forex Rates
                        </h2>
                        <p className="text-[#A5A9B8] text-sm md:text-base">
                            Track major currency pair movements in real time.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {lastUpdated && (
                        <p className="text-xs md:text-sm text-[#7E849C]">
                            Updated at {lastUpdated}
                        </p>
                    )}
                    <button
                        onClick={fetchRates}
                        className="p-3 bg-[#141A29] hover:bg-[#1C2541] border border-[#1C2541] rounded-xl text-[#00E0FF] transition"
                    >
                        <RotateCcw
                            size={20}
                            className={`${loading ? "animate-spin" : ""}`}
                        />
                    </button>
                </div>
            </div>

            {/* Loading */}
            {loading && <ForexRateLoader />}

            {/* Error */}
            {!loading && error && <PostsError message={error} onRetry={fetchRates} />}

            {/* Rates */}
            {!loading && !error && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {rates.map((r, i) => (
                        <div
                            key={i}
                            className="bg-[#141A29] rounded-xl p-5 shadow-[0_0_15px_#00E0FF20] hover:shadow-[0_0_25px_#00E0FF40] transition"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-lg font-semibold text-white">{r.pair}</h3>
                                {r.change >= 0 ? (
                                    <TrendingUp size={18} className="text-green-400" />
                                ) : (
                                    <TrendingDown size={18} className="text-red-400" />
                                )}
                            </div>

                            <div className="flex justify-between items-end">
                                <span className="text-2xl font-bold text-[#00E0FF]">
                                    {r.price.toFixed(4)}
                                </span>
                                <span
                                    className={`text-sm font-medium ${r.change >= 0 ? "text-green-400" : "text-red-400"
                                        }`}
                                >
                                    {r.change >= 0 ? "+" : ""}
                                    {r.change}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ForexRateSection;