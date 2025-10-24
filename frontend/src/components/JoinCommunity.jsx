import { FaTelegramPlane, FaYoutube, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const JoinCommunity = () => {
    const socials = [
        { icon: <FaTelegramPlane />, color: "from-[#0088CC] to-[#00E0FF]", link: "https://t.me/sport_be_ethiopia" },
        { icon: <FaYoutube />, color: "from-[#FF0000] to-[#FF6B6B]", link: "https://youtube.com/@ethiopia_433et" },
        { icon: <FaInstagram />, color: "from-[#833AB4] to-[#FD1D1D]", link: "https://www.instagram.com/433_ethiopia" },
        { icon: <FaTiktok />, color: "from-[#69C9D0] to-[#EE1D52]", link: "https://www.tiktok.com/@433ethiopia" },
        // { icon: <FaFacebook />, color: "from-[#1877f2] to-[#075ff5]", link: "#" },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-[#EAEAEA] text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold font-['Bebas Neue'] mb-4">
                    Join the 4-3-3 Family
                </h2>
                <p className="text-[#A5A9B8] mb-8">
                    Be part of Ethiopia’s most dynamic digital community — football, forex, crypto, and entertainment all in one network.
                </p>


                <div className="flex justify-center gap-6 mt-10">
                    {socials.map((s, i) => (
                        <a
                            key={i}
                            href={s.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`text-3xl bg-gradient-to-r ${s.color} text-white p-2 rounded-full shadow-lg transition-transform hover:scale-110`}
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JoinCommunity;