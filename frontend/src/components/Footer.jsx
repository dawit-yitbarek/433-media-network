// Footer.jsx
import { Mail, MessageSquare } from "lucide-react";
import {
    FaTelegramPlane,
    FaYoutube,
    FaInstagram,
    FaTiktok
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0A0F1C] border-t border-[#1E2A3A] text-[#EAEAEA] py-12 px-6 md:px-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,255,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>

            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 z-10 relative">
                {/* Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00E0FF] to-[#0077FF] bg-clip-text text-transparent mb-4">
                        4-3-3 Media Network
                    </h2>
                    <p className="text-[#A5A9B8] text-sm leading-relaxed">
                        Your all-in-one hub for football, finance, crypto,
                        entertainment, and more. Stay informed, inspired, and
                        connected.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-[#A5A9B8] text-sm">
                        <li>
                            <a
                                href="/#trending"
                                className="hover:text-[#00E0FF] transition"
                            >
                                Trending
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#why-choose-us"
                                className="hover:text-[#00E0FF] transition"
                            >
                                Why 4-3-3
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#explore"
                                className="hover:text-[#00E0FF] transition"
                            >
                                Explore
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-[#A5A9B8] text-sm">
                        <li className="flex items-center gap-2">
                            <MessageSquare size={16} /> Telegram:{" "}
                            <a
                                href="https://t.me/Simera10"
                                className="text-[#00E0FF] hover:underline"
                            >
                                @Simera10
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a
                            href="https://youtube.com/@ethiopia_433et"
                            className="p-2 rounded-full bg-[#1C2541] hover:bg-[#00E0FF] transition"
                        >
                            <FaYoutube size={20} />
                        </a>
                        <a
                            href="https://www.tiktok.com/@433ethiopia"
                            className="p-2 rounded-full bg-[#1C2541] hover:bg-[#00E0FF] transition"
                        >
                            <FaTiktok size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/433_ethiopia"
                            className="p-2 rounded-full bg-[#1C2541] hover:bg-[#00E0FF] transition"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://t.me/sport_be_ethiopia"
                            className="p-2 rounded-full bg-[#1C2541] hover:bg-[#00E0FF] transition"
                        >
                            <FaTelegramPlane size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#1E2A3A] my-8"></div>

            {/* Bottom Note */}
            <div className="text-center text-sm text-[#A5A9B8] z-10 relative">
                © {new Date().getFullYear()} 4-3-3 Media Network. All rights
                reserved.
                <br />
                <span className="text-[#00E0FF]">
                    Developed by{" "}
                    <a
                        href="https://daviddeveloper.site"
                        target="_blank"
                        className="hover:underline"
                    >
                        Dawit
                    </a>
                </span>
            </div>
        </footer>
    );
}
