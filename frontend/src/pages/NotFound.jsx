import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-page flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-[8rem] text-[#90E0EF] font-bold">404</h1>
      <p className="text-2xl md:text-3xl text-[#E0E1DD] mb-4">
        Oops! Page not found
      </p>
      <p className="text-[#E0E1DD]/70 max-w-md text-base md:text-lg mb-6">
        The page you’re looking for doesn’t exist or has been moved. Try going back to the homepage.
      </p>
      <Link
        to="/"
        className="bg-button text-white px-6 py-3 rounded-xl hover:bg-[#0096c7] transition"
      >
        Go Home
      </Link>
    </div>
  );
}