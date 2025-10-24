import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sports", href: "/sports" },
    { name: "Forex", href: "/forex" },
    { name: "Crypto", href: "/crypto" },
    { name: "Films", href: "/films" },
    { name: "Music", href: "/music" },
    { name: "News", href: "/news" },
    { name: "Games", href: "/games" },
  ];

  const telegramLinks = {
    "/": "https://t.me/sport_be_ethiopia",
    "/sports": "https://t.me/sport_be_ethiopia",
    "/forex": "https://t.me/Forex_Trade_433et",
    "/crypto": "https://t.me/Ethiocrypto_433",
    "/films": "https://t.me/Films_433",
    "/music": "https://t.me/Music_4_3_3",
    "/news": "https://t.me/Ethionews433",
    "/games": "https://t.me/Game_Zone_433",
  };

  const currentTelegramLink = telegramLinks[currentPath] || telegramLinks["/"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0F1C]/80 backdrop-blur-lg border-b border-[#1C2541]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold font-['Bebas Neue']">
          <Link
            to={'/'}
          >
            <span className="bg-gradient-to-r from-[#0077FF] to-[#00E0FF] bg-clip-text text-transparent">
              4-3-3
            </span>{" "}
            <span className="text-[#EAEAEA]">Media Network</span>
          </Link>
        </h1>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 text-[#EAEAEA]">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              className={`hover:text-[#00E0FF] transition-colors ${currentPath === link.href && "text-[#00E0FF]"}`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => window.open(currentTelegramLink, "_blank")}
            className="ml-4 px-5 py-2 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] rounded-xl text-white hover:shadow-[0_0_12px_#00E0FF] transition">
            Join Telegram
          </button>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <button
          className="lg:hidden text-[#EAEAEA]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-[#0A0F1C]/95 backdrop-blur-lg border-t border-[#1C2541]">
          <div className="flex flex-col items-center gap-4 py-4 text-[#EAEAEA]">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                onClick={() => setOpen(false)}
                className={`hover:text-[#00E0FF] transition-colors ${currentPath === link.href && "text-[#00E0FF]"}`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => window.open(currentTelegramLink, '_blank')}
              className="px-5 py-2 bg-gradient-to-r from-[#0077FF] to-[#00E0FF] rounded-xl text-white hover:shadow-[0_0_12px_#00E0FF] transition">
              Join Telegram
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;