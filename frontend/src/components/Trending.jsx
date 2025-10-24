import { useState } from "react";

const Trending = () => {
    const [active, setActive] = useState("Sports");

    const sections = ["Sports", "Forex", "Crypto", "Films", "Music", "News", "Games"];
    const trendingData = {
        Sports: [
            { title: "Liverpool 3–1 Chelsea", desc: "Premier League Highlights", img: "images/sports1.jpg" },
            { title: "Real Madrid tops La Liga", desc: "Matchday 8 Summary", img: "images/sports2.jpeg" },
            { title: "ባርሳ ለኤልክላሲኮ ግጥሚያ ይህን ማልያ እንደሚጠቀሙ ይፋ ተደርጓል !", desc: "Matchday 8 Summary", img: "images/sports3.jpg" },
        ],
        Forex: [
            { title: "USD/AUD rises 0.2%", desc: "Australian market trends", img: "images/forex1.jpeg" },
            { title: "EUR/USD holds steady", desc: "Market analysis", img: "images/forex2.jpg" },
        ],
        Crypto: [
            { title: "Bitcoin hits $70K", desc: "Crypto bull run returns", img: "images/crypto1.jpeg" },
            { title: "Ethereum 2.0 gains traction", desc: "DeFi ecosystem growth", img: "images/crypto2.jpg" },
        ],
    };

    return (
        <section id="trending" className="py-16 px-4 md:px-12">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold">🔥 Trending Now</h2>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center md:justify-end gap-3">
                    {sections.map((s) => (
                        <button
                            key={s}
                            onClick={() => setActive(s)}
                            className={`px-4 py-2 rounded-lg text-sm md:text-base transition ${active === s
                                ? "bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white"
                                : "bg-[#1C2541] text-[#A5A9B8] hover:text-white border border-[#00E0FF]"
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trendingData[active]?.map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#141A29] rounded-xl overflow-hidden hover:shadow-[0_0_25px_#00E0FF40] transition"
                    >
                        <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                            <p className="text-[#A5A9B8] text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trending;