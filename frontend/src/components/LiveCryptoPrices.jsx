import { useEffect, useState } from "react";
import axios from "axios";
import { ForexRateLoader } from "./LoadingComponent";
import { PostsError } from "./ErrorComponent"
import { LineChart, RotateCcw, TrendingUp, TrendingDown, Search } from "lucide-react";
import { motion } from "framer-motion";

const COINGECKO_URL =
    "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&symbols=btc,eth,bnb,sol,ada,xrp,doge,avax,matic,ton&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true";

const LiveCryptoPrices = () => {
    const [coins, setCoins] = useState([]);
    const [filteredCoins, setFilteredCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [lastUpdated, setLastUpdated] = useState(null);
    const [notFound, setNotFound] = useState(false);

    // ✅ Fetch main coins initially
    const fetchPrices = async () => {
        setLoading(true);
        setError("");
        setNotFound(false);

        try {
            const res = await axios.get(COINGECKO_URL, {
                headers: {
                    'x-cg-demo-api-key': 'CG-qcvUWP9TDiX2VmF1q4kjTtjs'
                }
            });
            const data = res.data;

            const formatted = Object.keys(data).map((symbol) => ({
                id: symbol,
                name: symbol.toUpperCase(),
                price: data[symbol].usd,
                marketCap: data[symbol].usd_market_cap,
                volume: data[symbol].usd_24h_vol,
                change: data[symbol].usd_24h_change,
            }));

            setCoins(formatted);
            setFilteredCoins(formatted);
        } catch (err) {
            setError("Failed to fetch live crypto prices. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPrices();
    }, []);

    // ✅ Handle search: check local first, then fetch from API if not found
    const handleSearch = async (e) => {
        e.preventDefault();
        setError("");
        setNotFound(false);

        const query = search.trim().toLowerCase();
        if (!query) {
            setFilteredCoins(coins);
            return;
        }

        // Check if exists locally
        const localCoin = coins.find((c) => c.name.toLowerCase() === query);
        if (localCoin) {
            setFilteredCoins([localCoin]);
            return;
        }

        // Not in local cache → fetch from CoinGecko
        setLoading(true);
        try {
            const url = `https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&symbols=${query}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;
            const res = await axios.get(url, {
                headers: {
                    'x-cg-demo-api-key': 'CG-qcvUWP9TDiX2VmF1q4kjTtjs'
                }
            });
            const data = res.data;

            if (!data[query]) {
                setNotFound(true);
                setFilteredCoins([]);
                return;
            }

            const newCoin = {
                id: query,
                name: query.toUpperCase(),
                price: data[query].usd,
                marketCap: data[query].usd_market_cap,
                volume: data[query].usd_24h_vol,
                change: data[query].usd_24h_change,
            };

            setFilteredCoins([newCoin]);
        } catch (err) {
            console.error("Search request failed:", err);
            setError("Failed to search this coin. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#050A18] to-[#0D162F] text-[#EAEAEA] relative overflow-hidden" id="live-crypto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,224,255,0.1),transparent_60%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,119,255,0.15),transparent_70%)] pointer-events-none"></div>

            {/* Header */}
            <div className="relative flex flex-col md:flex-row justify-between items-center mb-10 gap-4 z-10">
                <div className="flex items-center gap-3">
                    <LineChart size={30} className="text-[#00E0FF]" />
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue'] text-white">
                            Live Crypto Prices
                        </h2>
                        <p className="text-[#A5A9B8] py-3 text-sm md:text-base">
                            Real-time prices, 24h changes, and market volume.
                        </p>
                    </div>
                </div>

                {/* Search + Refresh */}
                <form
                    onSubmit={handleSearch}
                    className="flex items-center gap-3 bg-[#141A29] border border-[#1C2541] rounded-xl px-3 py-2"
                >
                    <Search size={18} className="text-[#7E849C]" />
                    <input
                        type="text"
                        placeholder="Search by symbol (e.g. BTC)"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-transparent text-[#EAEAEA] placeholder-[#7E849C] outline-none w-36 sm:w-48"
                        required
                    />
                    <button
                        type="submit"
                        className="text-[#00E0FF] font-semibold hover:text-white transition"
                    >
                        Go
                    </button>
                    <button
                        type="button"
                        onClick={fetchPrices}
                        className="p-2 bg-[#141A29] hover:bg-[#1C2541] border border-[#1C2541] rounded-lg text-[#00E0FF] transition"
                    >
                        <RotateCcw size={18} className={loading ? "animate-spin" : ""} />
                    </button>
                </form>
            </div>

            {/* Error */}
            {!loading && error && (
                <PostsError message={error} onRetry={fetchPrices} />
            )}

            {/* Loading skeleton */}
            {loading && (
                <ForexRateLoader />
            )}


            {/* Not found message */}
            {!loading && notFound && !error && (
                <div className="text-center mt-8 text-[#A5A9B8]">
                    <p>🚫 The coin symbol "{search.toUpperCase()}" was not found.</p>
                </div>
            )}

            {/* Prices grid */}
            {!loading && !error && filteredCoins.length > 0 && (
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10"
                >
                    {filteredCoins.map((coin) => (
                        <motion.div
                            key={coin.id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-[#141A29] rounded-xl p-6 shadow-[0_0_20px_#00E0FF20] hover:shadow-[0_0_25px_#00E0FF40] transition"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-lg font-semibold text-white">{coin.name}</h3>
                                {coin.change >= 0 ? (
                                    <TrendingUp size={18} className="text-green-400" />
                                ) : (
                                    <TrendingDown size={18} className="text-red-400" />
                                )}
                            </div>

                            <div className="text-3xl font-bold text-[#00E0FF] mb-2">
                                ${coin.price.toLocaleString()}
                            </div>

                            <div className="flex justify-between items-end text-sm text-[#A5A9B8]">
                                <span>
                                    {coin.change >= 0 ? "+" : ""}
                                    {coin.change.toFixed(2)}%
                                </span>
                                <span>Vol: ${(coin.volume / 1e9).toFixed(2)}B</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </section>
    );
};

export default LiveCryptoPrices;