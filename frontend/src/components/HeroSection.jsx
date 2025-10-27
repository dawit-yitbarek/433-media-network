import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LineChart, Rocket, ArrowRight, TrendingUp, Radio, Play, Film, Star } from "lucide-react";
import { useSharedData } from '../context/SharedDataContext';

export const HomeHeroSection = () => {
    return (
        <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[#0A0F1C]">
            {/* Animated gradient background */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#00172B] via-[#002E4E] to-[#0A0F1C] animate-gradient-move"></div> */}

            {/* Glowing orbs for depth */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#0077FF]/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#00E0FF]/20 rounded-full blur-[120px]"></div>

            {/* Static stars */}
            <div className="absolute inset-0 z-0">
                {[...Array(600)].map((_, i) => (
                    <span
                        key={`dot-${i}`}
                        className="absolute bg-white rounded-full opacity-30"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    ></span>
                ))}
            </div>


            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1C]/50 to-[#0A0F1C]/95"></div>

            {/* Content */}
            <h1 className="text-5xl md:text-7xl font-bold font-['Bebas Neue'] text-white relative z-10">
                One Network. Every World of 4-3-3 Ethiopia.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#A5A9B8] relative z-10 max-w-2xl">
                Your all-in-one hub for sports, finance, music, and entertainment.
            </p>
            <div className="mt-6 flex gap-4 relative z-10">
                <a href="#trending" className="px-6 py-3 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white rounded-xl hover:shadow-[0_0_15px_#00E0FF] transition">
                    Explore Now
                </a>

                <a href="https://t.me/sport_be_ethiopia" className="px-6 py-3 border border-[#00E0FF] text-[#00E0FF] rounded-xl hover:bg-[#00E0FF]/10 transition">
                    Join Telegram
                </a>
            </div>
        </section>
    )
}


export const ForexHeroSection = () => {
    return (
        <section className="relative md:h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden bg-[#0A0F1C]">
            {/* Subtle animated chart lines */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
                <svg className="absolute w-full h-full" preserveAspectRatio="none">
                    <polyline
                        points="0,600 200,400 400,450 600,350 800,420 1000,300 1200,360"
                        fill="none"
                        stroke="url(#gradientLine)"
                        strokeWidth="3"
                    >
                        <animate
                            attributeName="stroke-dashoffset"
                            from="1000"
                            to="0"
                            dur="10s"
                            repeatCount="indefinite"
                        />
                    </polyline>
                    <defs>
                        <linearGradient id="gradientLine" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#0077FF" />
                            <stop offset="100%" stopColor="#00E0FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/60 to-[#1C2541]/90"></div>

            {/* Content */}
            <div className="relative z-10 px-4">
                <h1 className="text-5xl mt-28 md:mt-1 md:text-7xl font-bold font-['Bebas Neue'] text-white mb-4 leading-tight">
                    Track The <span className="text-[#00E0FF]">Global Forex Market</span> In Real Time
                </h1>
                <p className="text-[#A5A9B8] max-w-2xl mx-auto text-lg md:text-xl mb-8">
                    Access live currency rates, market trends, and analysis — all in one powerful hub built by 4-3-3 Media Network.
                </p>

                <div className="flex flex-col mb-20 md:mb-1 sm:flex-row gap-4 justify-center">
                    <a
                        href="#live-forex"
                        className="px-6 py-3 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white rounded-xl hover:shadow-[0_0_15px_#00E0FF] transition flex items-center justify-center gap-2"
                    >
                        <TrendingUp size={18} /> View Live Rates
                    </a>
                    <button
                        className="px-6 py-3 border border-[#00E0FF] text-[#00E0FF] rounded-xl hover:bg-[#00E0FF]/10 transition flex items-center justify-center gap-2"
                        onClick={() => window.open("https://t.me/Forex_Trade_433et", "_blank")}
                    >
                        Join Telegram <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};



export const CryptoHeroSection = () => {

    return (
        <section className="relative overflow-hidden py-28 px-6 md:px-12 bg-gradient-to-b from-[#050A1A] via-[#0A0F1C] to-[#0E172A] text-[#EAEAEA]">
            {/* === Background Visuals === */}
            <div className="absolute inset-0 -z-10">
                {/* Glowing gradient orbs */}
                <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#00E0FF30] blur-[180px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-250px] right-[-150px] w-[700px] h-[700px] bg-[#0077FF25] blur-[220px] rounded-full animate-pulse" />

                {/* Subtle animated grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#00E0FF10_1px,transparent_1px),linear-gradient(#00E0FF10_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
            </div>

            {/* === Centerpiece Animated Ring === */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#00E0FF20]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            >
                <div className="absolute inset-0 rounded-full border border-[#00E0FF10]" />
            </motion.div>

            {/* === Content === */}
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl font-bold font-['Bebas Neue'] text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] via-[#ADE8F4] to-[#0077FF] drop-shadow-[0_0_25px_#00E0FF80]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    The Future of Finance is <br /> <span className="text-white">Crypto</span>
                </motion.h1>

                <motion.p
                    className="text-[#A5A9B8] text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                >
                    Experience decentralized innovation — explore live prices, trends, and blockchain stories
                    with <span className="text-[#00E0FF]">4-3-3 Crypto</span>, your gateway to the digital economy.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-6 mt-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.2 }}
                >
                    <a
                        href="#live-crypto"
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white font-medium hover:shadow-[0_0_30px_#00E0FF80] transition"
                    >
                        <LineChart className="inline-block mr-2" size={18} />
                        View Live Prices
                    </a>
                    <a
                        href="https://t.me/Ethiocrypto_433"
                        className="px-8 py-3 rounded-xl border border-[#00E0FF] text-[#00E0FF] hover:bg-[#00E0FF10] transition font-medium"
                    >
                        <Rocket className="inline-block mr-2" size={18} />
                        Join the Revolution
                    </a>
                </motion.div>

                {/* Glassmorphism floating card */}
                {/* <motion.div
                    className="mt-16 mx-auto max-w-md bg-[#0A0F1C]/50 border border-[#00E0FF20] backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_25px_#00E0FF15]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                >
                    <p className="text-sm text-[#A5A9B8] mb-2">Current Highlight</p>
                    <h3 className="text-xl font-semibold text-white">
                        Bitcoin surges as institutional adoption expands 🚀
                    </h3>
                </motion.div> */}
            </div>
            {/* Bottom pulse line */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-70"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
            />
        </section>
    );
};



export const NewsHeroSection = ({ }) => {
    const { sharedData } = useSharedData();
    const [currentHeadline, setCurrentHeadline] = useState(0);

    // Rotate headlines
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadline((prev) => (prev + 1) % sharedData?.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [sharedData?.length]);


    return (
        <section className="relative h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-white px-4 sm:px-8">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#0077FF20,_transparent_60%),radial-gradient(circle_at_bottom_left,_#00E0FF20,_transparent_60%)] blur-3xl animate-pulse"></div>

            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,#1C2541_1px,transparent_1px),linear-gradient(#1C2541_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 sm:px-10">
                {/* Title */}
                <h1 className="text-5xl sm:text-7xl font-bold font-['Bebas Neue'] pb-3 mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#0077FF]">
                    Stay Informed. Stay Ahead.
                </h1>

                {/* Subtitle */}
                <p className="text-[#A5A9B8] text-sm sm:text-lg max-w-3xl mx-auto mb-8 z-10">
                    Explore the latest local and global news — all in one place with
                    <span className="text-[#00E0FF] font-semibold"> 4-3-3 Media Network.</span>
                </p>
            </div>

            {/* Breaking News Ticker */}
            <div className="absolute bottom-6 w-full bg-[#0A0F1C]/80 border-t border-[#1C2541] py-3 text-sm sm:text-base overflow-hidden z-10">
                <div className="flex justify-center items-center gap-4">
                    <div className="flex pl-3 items-center gap-2">
                        <Radio size={40} className="text-[#00E0FF] animate-pulse" />
                        <span className="uppercase text-[#00E0FF] font-semibold tracking-wider">
                            Latest News
                        </span>
                    </div>
                    <h3 className="text-[#EAEAEA] font-medium max-w-[80%] pr-5 whitespace-nowrap overflow-hidden text-ellipsis">
                        {sharedData?.[currentHeadline]?.title}
                    </h3>
                </div>
            </div>
        </section>
    );
};



export const FilmsHeroSection = () => {
    return (
        <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden bg-[#0A0F1C]">
            {/* Background gradient and glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#141A29] to-[#0A0F1C]" />

            {/* Animated light streak effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.15),transparent_70%)] blur-3xl" />

            {/* Subtle moving light beam */}
            <motion.div
                className="absolute w-[120%] h-[120%] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(0,119,255,0.08)_0deg,transparent_180deg)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            {/* Content */}
            <div className="relative z-10 px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-7xl font-['Bebas Neue'] font-bold leading-tight">
                        Discover. Watch. Feel the Story.
                    </h1>

                    <p className="mt-4 text-[#A5A9B8] text-lg md:text-xl max-w-2xl mx-auto">
                        Explore the latest films, trailers, and behind-the-scenes stories — all in one cinematic experience.
                    </p>

                    <div className="flex flex-col mt-8 md:mb-1 sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] rounded-xl font-medium hover:shadow-[0_0_20px_#00E0FF80] transition">
                            <Play size={18} className="inline mr-2" />
                            Watch Trailers
                        </button>
                        <button className="px-8 py-3 border border-[#00E0FF] text-[#00E0FF] rounded-xl hover:bg-[#00E0FF]/10 transition">
                            Explore Films
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating stars / sparkles for cinematic mood */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-[#00E0FF] rounded-full opacity-30"
                        style={{
                            width: Math.random() * 3 + 1,
                            height: Math.random() * 3 + 1,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 6 + 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </section>
    );
};