import { Star } from "lucide-react";

export default function FilmCard() {
    return (
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#0A0F1C] via-[#10192E] to-[#1C2541] text-[#EAEAEA]">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue'] text-white">
                    More <span className="text-[#00E0FF]">Films to Explore</span>
                </h2>
                <p className="text-[#A5A9B8] mt-2 text-sm md:text-base max-w-2xl mx-auto">
                    Dive into more genres, trending releases, and hidden gems from the 4-3-3 Film archive.
                </p>
                <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-[#0077FF] to-[#00E0FF] mx-auto rounded-full"></div>
            </div>

            {/* Film Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[
                    {
                        title: "Tenet",
                        genre: "Sci-Fi / Action",
                        rating: "8.3",
                        poster: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
                        telegram: "https://t.me/fourthreefilm",
                    },
                    {
                        title: "Dune: Part Two",
                        genre: "Adventure / Sci-Fi",
                        rating: "9.0",
                        poster: "https://image.tmdb.org/t/p/w500/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg",
                        telegram: "https://t.me/fourthreefilm",
                    },
                    {
                        title: "Inception",
                        genre: "Thriller / Sci-Fi",
                        rating: "8.9",
                        poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
                        telegram: "https://t.me/fourthreefilm",
                    },
                    {
                        title: "Oppenheimer",
                        genre: "Drama / Biography",
                        rating: "9.1",
                        poster: "https://image.tmdb.org/t/p/w500/bAFmcrT0FqH5v9R4Ge3kB4pQfQ2.jpg",
                        telegram: "https://t.me/fourthreefilm",
                    },
                ].map((film, i) => (
                    <div
                        key={i}
                        className="bg-[#141A29] rounded-xl overflow-hidden shadow-[0_0_25px_#00E0FF20] hover:shadow-[0_0_35px_#00E0FF40] transition group"
                    >
                        <div className="relative">
                            <img
                                src={film.poster}
                                alt={film.title}
                                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                <h3 className="text-xl font-bold font-['Bebas Neue']">{film.title}</h3>
                                <p className="text-sm text-[#A5A9B8]">{film.genre}</p>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <Star size={16} fill="currentColor" />
                                    <span className="text-sm font-medium">{film.rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 flex justify-between items-center">
                            <button
                                onClick={() => window.open(film.telegram, "_blank")}
                                className="px-5 py-2 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] rounded-lg font-semibold text-[#0A0F1C] hover:shadow-[0_0_15px_#00E0FF60] transition"
                            >
                                Watch on Telegram
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}