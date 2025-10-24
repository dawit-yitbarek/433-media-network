import { CalendarDays } from "lucide-react";
import PostCard from "./PostCard";

const SportsPosts = () => {
    return (
        <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-[#0A0F1C] to-[#1C2541] text-[#EAEAEA]">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="flex justify-center gap-2 items-center text-3xl md:text-4xl font-bold text-white font-['Bebas Neue']">
                    <CalendarDays size={28} className="text-[#00E0FF]" /> Latest Posts from 4-3-3 Sports
                </h2>
                <p className="text-[#A5A9B8] mt-2 text-sm md:text-base">
                    Fresh football stories, analysis, and match coverage — updated daily.
                </p>
                <div className="mt-4 w-24 h-[2px] bg-gradient-to-r from-[#0077FF] to-[#00E0FF] mx-auto rounded-full"></div>
            </div>

            {/* Posts Grid */}
            <PostCard category="sport" />
        </section>
    );
};

export default SportsPosts;