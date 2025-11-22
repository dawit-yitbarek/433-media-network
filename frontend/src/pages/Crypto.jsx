import { CryptoHeroSection } from "../components/HeroSection";
import LiveCryptoPrices from "../components/LiveCryptoPrices";
import PostCard from "../components/PostCard";
import { CryptoCTASection } from "../components/CTASection";
import SEOHead from "../components/SeoHead.jsx";

const CryptoPage = () => {
    return (
        <>
            <SEOHead
                title={
                    "4-3-3 Crypto – Live Prices, Blockchain News & Market Trends"
                }
                description={
                    "Get live crypto prices, blockchain insights, and digital asset news from 4-3-3 Crypto."
                }
                image={"/images/cryptoimg.jpeg"}
                url={window.location.href}
            />

            {/* Hero Section */}
            <CryptoHeroSection />

            {/* Live Crypto Prices Section*/}
            <LiveCryptoPrices />

            {/* Crypto Posts Section */}
            <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-[#EAEAEA]">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="flex justify-center gap-2 items-center text-3xl md:text-4xl font-bold text-white font-['Bebas Neue']">
                        Latest Insights from 4-3-3 Crypto
                    </h2>
                    <p className="text-[#A5A9B8] mt-2 text-sm md:text-base max-w-2xl mx-auto">
                        Market updates, blockchain news, and in-depth analysis —
                        stay informed in the world of digital assets.
                    </p>
                    <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-[#0077FF] to-[#00E0FF] mx-auto rounded-full"></div>
                </div>

                {/* Posts Grid */}
                <PostCard category="crypto" />
            </section>

            {/* Learn About Crypto Section */}
            <section className="py-24 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#121D36] text-[#EAEAEA] relative overflow-hidden">
                {/* Subtle Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,224,255,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,119,255,0.15),transparent_70%)]"></div>

                <div className="relative text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue'] text-white">
                        Learn About Crypto
                    </h2>
                    <p className="text-[#A5A9B8] mt-2 text-sm md:text-base max-w-2xl mx-auto">
                        Whether you’re a beginner or an expert, understanding
                        crypto fundamentals helps you make smarter decisions.
                    </p>
                    <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-[#0077FF] to-[#00E0FF] mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-10 relative z-10">
                    {/* Card 1 */}
                    <div className="bg-[#141A29] rounded-2xl p-8 shadow-[0_0_20px_#00E0FF20] hover:shadow-[0_0_30px_#00E0FF40] transition">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 mb-5 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7 text-[#00E0FF]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.8}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white text-center">
                            What is Cryptocurrency?
                        </h3>
                        <p className="text-[#A5A9B8] text-sm text-center">
                            Digital assets that use cryptography and
                            decentralized networks to ensure secure transactions
                            without intermediaries.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#141A29] rounded-2xl p-8 shadow-[0_0_20px_#00E0FF20] hover:shadow-[0_0_30px_#00E0FF40] transition">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 mb-5 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7 text-[#00E0FF]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.8}
                                    d="M3 10h18M7 6h10M10 14h4m-6 4h8"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white text-center">
                            How Blockchain Works
                        </h3>
                        <p className="text-[#A5A9B8] text-sm text-center">
                            A transparent, distributed ledger where every
                            transaction is recorded and verified by the network
                            participants.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#141A29] rounded-2xl p-8 shadow-[0_0_20px_#00E0FF20] hover:shadow-[0_0_30px_#00E0FF40] transition">
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 mb-5 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7 text-[#00E0FF]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.8}
                                    d="M12 6v6l4 2m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white text-center">
                            Investing Smartly
                        </h3>
                        <p className="text-[#A5A9B8] text-sm text-center">
                            Learn to analyze trends, understand volatility, and
                            diversify your portfolio for long-term stability in
                            crypto markets.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CryptoCTASection />
        </>
    );
};

export default CryptoPage;
