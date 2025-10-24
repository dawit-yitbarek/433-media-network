export const SportCTASection = () => {
    return (
        <section className="relative mt-24 mb-16 px-6 py-20 text-center rounded-3xl bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] border border-[#1C2541] shadow-[0_0_25px_#00E0FF20] overflow-hidden">
            {/* Subtle background accents */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-[#0077FF]/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-[#00E0FF]/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-6 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold font-['Bebas Neue'] text-white tracking-wide">
                    Join the <span className="text-[#00E0FF]">4-3-3</span> Community
                </h2>

                <p className="text-[#A5A9B8] text-base md:text-lg leading-relaxed">
                    Stay connected with the latest in football, crypto, forex, and entertainment.
                    Be part of the fastest-growing digital media community in Ethiopia.
                </p>

                <div className="flex flex-wrap justify-center mt-4">
                    <a
                        href="https://t.me/sport_be_ethiopia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white font-semibold hover:shadow-[0_0_12px_#00E0FF] transition-all"
                    >
                        Join Telegram
                    </a>

                    {/* <button className="px-8 py-3 rounded-xl border border-[#00E0FF] text-[#00E0FF] font-semibold hover:bg-[#00E0FF]/10 transition-all">
                        Subscribe
                    </button> */}
                </div>
            </div>
        </section>
    );
};



export const ForexCTASection = () => {
    return (
        <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-center text-[#EAEAEA]">
            <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue'] text-white">
                Join the 4-3-3 Forex Community
            </h2>
            <p className="text-[#A5A9B8] mt-3 text-sm md:text-base max-w-xl mx-auto">
                Get daily Forex news, exchange rate updates, and trading tips directly from our Telegram channel.
            </p>

            <div className="mt-8 flex justify-center">
                <button
                    onClick={() => { window.open('https://t.me/Ethiocrypto_433') }}
                    className="px-8 py-3 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white rounded-xl hover:shadow-[0_0_20px_#00E0FF] transition">
                    Join Telegram
                </button>
                {/* <button className="px-8 py-3 border border-[#00E0FF] text-[#00E0FF] rounded-xl hover:bg-[#00E0FF]/10 transition">
                    Explore More Markets
                </button> */}
            </div>
        </section>
    );
}


export const CryptoCTASection = () => {
    return (
        <section className="py-24 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#001226] text-center text-[#EAEAEA] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,255,0.15),transparent_70%)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue'] text-white mb-4">
                    Join the 4-3-3 Crypto Community 🚀
                </h2>
                <p className="text-[#A5A9B8] text-sm md:text-base mb-8">
                    Get the latest crypto insights, price alerts, and blockchain updates — directly from our experts and traders.
                </p>
                <div className="flex justify-center">
                    <a
                        href="https://t.me/Ethiocrypto_433"
                        className="px-8 py-3 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] rounded-xl text-white font-semibold hover:shadow-[0_0_20px_#00E0FF80] transition"
                    >
                        Join Telegram
                    </a>
                    {/* <a
                        href="#"
                        className="px-8 py-3 border border-[#00E0FF] text-[#00E0FF] rounded-xl font-semibold hover:bg-[#00E0FF]/10 transition"
                    >
                        Explore More
                    </a> */}
                </div>
            </div>
        </section>
    );
};


export const NewsCTASection = () => {
    return (
        <section className="relative py-20 px-6 md:px-12 text-center overflow-hidden bg-gradient-to-b from-[#0A0F1C] to-[#1C2541]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00E0FF20,transparent_70%)] blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white font-['Bebas Neue'] mb-4">
                    Stay Connected with 4-3-3 Media Network
                </h2>
                <p className="text-[#A5A9B8] mb-8 text-sm md:text-base">
                    Get the latest news headlines, breaking news, and expert insights — all in one place.
                </p>

                <a
                    href="https://t.me/Ethionews433"
                    className="inline-block bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-[0_0_20px_#00E0FF80] transition"
                >
                    Join Our Telegram Community
                </a>
            </div>
        </section>
    );
}