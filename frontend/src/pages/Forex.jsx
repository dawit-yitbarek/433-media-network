import { ForexHeroSection } from "../components/HeroSection";
import LiveForexRates from "../components/LiveForexRates";
import PostCard from "../components/PostCard";
import { ForexCTASection } from "../components/CTASection";
import { Globe2, Coins, TrendingUp } from "lucide-react";
import SEOHead from "../components/SeoHead.jsx";


const ForexPage = () => {
    return (
        <>
          
          <SEOHead
                title={
                    "4-3-3 Forex – Live Rates, Market Updates & Trading Insights"
                }
                description={
                    "Track live forex rates, explore expert trading analysis, and learn forex basics with 4-3-3 Forex."
                }
                image={"/images/foreximg.png"}
                url={window.location.href}
            />
          

            {/* Hero Section */}
            <ForexHeroSection />

            {/* Live Forex Rates Section */}
            <LiveForexRates />

            {/* Posts about Forex market */}
            <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-[#EAEAEA]">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="flex justify-center gap-2 items-center text-3xl md:text-4xl font-bold text-white font-['Bebas Neue']">
                        Latest Insights from 4-3-3 Forex
                    </h2>
                    <p className="text-[#A5A9B8] mt-2 text-sm md:text-base max-w-2xl mx-auto">
                        Market updates, trading analysis, and educational
                        articles — stay ahead in the world of Forex.
                    </p>
                    <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-[#0077FF] to-[#00E0FF] mx-auto rounded-full"></div>
                </div>

                {/* Posts Grid */}
                <PostCard category="forex" />
            </section>

            {/* Learn Forex Basics */}
            <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#1C2541] to-[#0A0F1C] text-[#EAEAEA]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue'] text-white">
                        Learn the Basics of Forex Trading
                    </h2>
                    <p className="text-[#A5A9B8] mt-3 text-sm md:text-base max-w-2xl mx-auto">
                        Whether you’re a beginner or an enthusiast, here are
                        some core concepts to help you understand how the Forex
                        market works.
                    </p>
                    <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-[#0077FF] to-[#00E0FF] mx-auto rounded-full"></div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "What is Forex?",
                            desc: "Forex (foreign exchange) is the global marketplace for trading currencies. Traders buy one currency while selling another, aiming to profit from exchange rate changes.",
                            icon: (
                                <Globe2 size={40} className="text-[#00E0FF]" />
                            )
                        },
                        {
                            title: "Major Currency Pairs",
                            desc: "The most traded pairs include EUR/USD, GBP/USD, USD/JPY, and USD/CHF. These pairs represent the strongest economies in the world.",
                            icon: <Coins size={40} className="text-[#00E0FF]" />
                        },
                        {
                            title: "How Rates Change",
                            desc: "Exchange rates fluctuate based on economic strength, inflation, interest rates, and geopolitical events that impact global demand for currencies.",
                            icon: (
                                <TrendingUp
                                    size={40}
                                    className="text-[#00E0FF]"
                                />
                            )
                        }
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="bg-[#141A29] p-6 rounded-xl shadow-[0_0_20px_#00E0FF20] hover:shadow-[0_0_25px_#00E0FF40] transition text-center"
                        >
                            <div className="flex justify-center mb-4">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {card.title}
                            </h3>
                            <p className="text-[#A5A9B8] text-sm">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <ForexCTASection />
        </>
    );
};

export default ForexPage;
