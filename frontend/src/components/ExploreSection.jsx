import { Link } from "react-router-dom"

const ExploreSection = () => {
    const categories = [
        {
            name: "Sports",
            desc: "Live scores, fixtures, and highlights from world football.",
            color: "from-[#0077FF] to-[#00E0FF]",
            img: "/images/sportimg.jpg",
            link: "/sports"
        },
        {
            name: "Forex",
            desc: "Market updates and insights from global currencies.",
            color: "from-[#2ECC71] to-[#00E0FF]",
            img: "/images/foreximg.png",
            link: "/forex"
        },
        {
            name: "Crypto",
            desc: "Track the latest crypto prices, trends, and projects.",
            color: "from-[#FF512F] to-[#DD2476]",
            img: "/images/cryptoimg.jpeg",
            link: "/crypto"
        },
        {
            name: "Films",
            desc: "Entertainment, trailers, and Ethiopian film culture.",
            color: "from-[#8E2DE2] to-[#4A00E0]",
            img: "/images/filmimg.jpeg",
            link: "/films"
        },
        //{
        //name: "Music",
        //desc: "Beats, trends, and hits from across the world.",
        //color: "from-[#00C9FF] to-[#92FE9D]",
        //img: "/images/musicimg.jpeg",
        //link: "/music",
        //},
        {
            name: "News",
            desc: "Stay informed with the latest stories and updates.",
            color: "from-[#F7971E] to-[#FFD200]",
            img: "/images/newsimg.jpeg",
            link: "/news"
        },
        {
            name: "Games",
            desc: "Mobile and console gaming content for the 4-3-3 community.",
            color: "from-[#00E0FF] to-[#0077FF]",
            img: "/images/gameimg.jpeg",
            link: "/games"
        }
    ];

    return (
        <section
            id="explore"
            className="py-20 px-4 md:px-12 bg-[#0A0F1C] text-[#EAEAEA]"
        >
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue']">
                    <span className="bg-gradient-to-r from-[#0077FF] to-[#00E0FF] bg-clip-text text-transparent">
                        Explore Our Worlds
                    </span>
                </h2>
                <p className="mt-3 text-[#A5A9B8] max-w-2xl mx-auto text-base md:text-lg">
                    Every channel. Every passion. All connected — step into the
                    worlds of 4-3-3 Ethiopia.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat, i) => (
                    <Link
                        key={i}
                        to={cat.link}
                        className="relative group rounded-2xl overflow-hidden h-60 flex items-end bg-[#141A29] border border-[#1C2541] hover:shadow-[0_0_25px_#00E0FF40] transition"
                    >
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-30 transition duration-500`}
                        ></div>
                        <img
                            src={cat.img}
                            alt={cat.name}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition duration-500"
                        />
                        <div className="relative z-10 p-6">
                            <h3 className="text-2xl font-bold">{cat.name}</h3>
                            <p className="text-[#A5A9B8] text-sm mt-1">
                                {cat.desc}
                            </p>
                            <p className="mt-3 text-[#00E0FF] font-semibold group-hover:translate-x-2 transition-transform">
                                Explore →
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ExploreSection;
