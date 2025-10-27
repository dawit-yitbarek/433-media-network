import { CircleOff } from 'lucide-react';

export const EmptyMatchTable = ({ selectedDate, matchDateDisplay }) => {
    return (
        <div className="text-center py-20">
            <CircleOff className="mx-auto mb-4 text-[#A5A9B8]" size={60} />
            <h2 className="text-2xl font-bold text-white mb-2">
                No Matches Found
            </h2>
            <p className="text-[#A5A9B8]">
                {new Date().toISOString().split("T")[0] === selectedDate ?
                    "There are no matches for today." :
                    `There are no ${matchDateDisplay}`
                }
            </p>
        </div>
    )
}


export const EmptyPostCard = ({ category }) => {

    return (
        <div className="text-center text-[#A5A9B8] py-10">
            No posts found for <span className="text-[#00E0FF]">{category}</span>.
        </div>
    );
}