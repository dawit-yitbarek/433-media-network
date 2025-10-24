import { Globe2, Zap, Users2, Layers } from "lucide-react";

const WhySection = () => {
    const features = [
        {
            icon: <Globe2 className="w-10 h-10 text-[#00E0FF]" />,
            title: "All Worlds, One Network",
            desc: "From sports to crypto, from music to movies — every universe of 4-3-3 Ethiopia comes together under one digital hub.",
        },
        {
            icon: <Zap className="w-10 h-10 text-[#00E0FF]" />,
            title: "Real-Time Energy",
            desc: "Stay connected with live updates, trending stories, and fresh insights — all pulsing with the energy of the moment.",
        },
        {
            icon: <Users2 className="w-10 h-10 text-[#00E0FF]" />,
            title: "Built for the Community",
            desc: "We’re not just a platform — we’re a movement uniting millions of 4-3-3 fans across Telegram and beyond.",
        },
        {
            icon: <Layers className="w-10 h-10 text-[#00E0FF]" />,
            title: "Expanding the Vision",
            desc: "4-3-3 Media Network is evolving into a universe — connecting news, finance, and entertainment in one seamless experience.",
        },
    ];

    return (
        <section id="why-choose-us" className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-[#EAEAEA]">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue']">
                    <span className="bg-gradient-to-r from-[#0077FF] to-[#00E0FF] bg-clip-text text-transparent">
                        Why 4-3-3 Media Network
                    </span>
                </h2>
                <p className="mt-3 text-[#A5A9B8] max-w-2xl mx-auto text-base md:text-lg">
                    More than just media — it’s a new digital universe where every world
                    meets. Discover what makes 4-3-3 different.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="bg-[#141A29]/60 border border-[#1C2541] rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-[0_0_25px_#00E0FF40] hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="mb-5">{f.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                        <p className="text-[#A5A9B8] text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhySection;