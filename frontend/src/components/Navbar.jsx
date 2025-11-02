import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPath, setCurrentPath] = useState("/");
  const [isTelegram, setIsTelegram] = useState(false);

  // Update current path
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  // Detect Telegram Mini App after mount
  useEffect(() => {
    if (window?.Telegram?.WebApp) {
      setIsTelegram(true);
    }
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sports", href: "/sports" },
    { name: "Forex", href: "/forex" },
    { name: "Crypto", href: "/crypto" },
    { name: "Films", href: "/films" },
    { name: "News", href: "/news" },
    { name: "Games", href: "/games" },
  ];

  const telegramLinks = {
    "/": "https://t.me/sport_be_ethiopia",
    "/sports": "https://t.me/sport_be_ethiopia",
    "/forex": "https://t.me/Forex_Trade_433et",
    "/crypto": "https://t.me/Ethiocrypto_433",
    "/films": "https://t.me/Films_433",
    "/news": "https://t.me/Ethionews433",
    "/games": "https://t.me/Game_Zone_433",
  };

  const currentTelegramLink = telegramLinks[currentPath] || telegramLinks["/"];

  // Show custom back button only in Telegram Mini App, not on home page
  const showBackButton = isTelegram && location.pathname !== "/";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0F1C] border-b border-[#1C2541]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Left side: Back button or Logo */}
        <div className="flex items-center gap-3">
          {showBackButton && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-white hover:text-[#00E0FF]"
            >
              <ArrowLeft size={20} /> Back
            </button>
          )}
          <h1 className="text-2xl md:text-3xl font-bold font-['Bebas Neue']">
            <Link to="/">
              <span className="bg-gradient-to-r from-[#0077FF] to-[#00E0FF] bg-clip-text text-transparent">
                4-3-3
              </span>{" "}
              <span className="text-[#EAEAEA]">Media Network</span>
            </Link>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-[#EAEAEA]">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              className={`hover:text-[#00E0FF] transition-colors ${
                currentPath === link.href && "text-[#00E0FF]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => window.open(currentTelegramLink, "_blank")}
            className="ml-4 px-5 py-2 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] rounded-xl text-white hover:shadow-[0_0_12px_#00E0FF] transition"
          >
            Join Telegram
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#EAEAEA]"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#0A0F1C] border-l border-[#1C2541] shadow-xl z-50 transform transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with close icon */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C2541]">
          <h2 className="text-xl font-['Bebas Neue'] text-[#EAEAEA]">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-[#EAEAEA]">
            <X size={26} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col items-center gap-6 py-10 text-[#EAEAEA] flex-grow">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              onClick={() => setOpen(false)}
              className={`hover:text-[#00E0FF] transition-colors ${
                currentPath === link.href && "text-[#00E0FF]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Join Telegram Button */}
        <div className="p-6">
          <button
            onClick={() => {
              window.open(currentTelegramLink, "_blank");
              setOpen(false);
            }}
            className="w-full px-5 py-3 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] rounded-xl text-white hover:shadow-[0_0_12px_#00E0FF] transition"
          >
            Join Telegram
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;