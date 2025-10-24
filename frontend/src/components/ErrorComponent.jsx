import { AlertTriangle, RotateCcw } from "lucide-react";

export const TableError = ({ message, refresh }) => {
    return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-[#FF5555] mb-3">
                Oops! Something went wrong 😢
            </h2>
            <p className="text-[#A5A9B8] mb-6">{message}</p>
            <button
                onClick={refresh}
                className="px-6 py-3 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] text-white rounded-xl hover:shadow-[0_0_15px_#00E0FF] transition"
            >
                Retry
            </button>
        </div>
    )
};



export const PostsError = ({ message, onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center my-5">
            <AlertTriangle size={50} className="text-[#00E0FF] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Oops!</h3>
            <p className="text-[#A5A9B8] mb-6">{message}</p>
            <button
                onClick={onRetry}
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] rounded-lg text-white hover:shadow-[0_0_12px_#00E0FF] transition"
            >
                <RotateCcw size={18} /> Try Again
            </button>
        </div>
    );
};