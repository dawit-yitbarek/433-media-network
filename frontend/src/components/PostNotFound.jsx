import { Ghost, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PostNotFound = ({ accent = "#00E0FF", onRetry }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#0A0F1C] text-center px-6">
            {/* Icon */}
            <div
                className="p-6 rounded-full mb-6 shadow-[0_0_50px_rgba(0,224,255,0.3)]"
                style={{ backgroundColor: `${accent}10` }}
            >
                <Ghost size={60} style={{ color: accent }} />
            </div>

            {/* Text */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Post Not Found 👻
            </h1>
            <p className="text-[#A5A9B8] text-base md:text-lg max-w-md mb-8">
                The post you’re looking for might have been removed, or it never existed.
            </p>

            {/* Actions */}
            <div className="flex gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2 border border-[#1C2541] rounded-lg text-sm bg-[#00E0FF] hover:bg-[#00E0FF]/60 transition"
                >
                    <ArrowLeft size={16} /> Go Back
                </button>
                {onRetry && (
                    <button
                        onClick={onRetry}
                        style={{ backgroundColor: accent }}
                        className="px-4 py-2 rounded-lg text-sm font-semibold text-black hover:opacity-80 transition"
                    >
                        Retry
                    </button>
                )}
            </div>
        </div >
    );
};

export default PostNotFound;