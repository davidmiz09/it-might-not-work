import { useState } from "react";
import { Link } from "react-router";

// SVG Icons
const LightningBoltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2L6 18H16L14 30L26 14H16L18 2Z" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const CheckmarkCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="2"/>
    <path d="M8 12L11 15L16 9" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" stroke="#FFD700" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="2"/>
    <path d="M12 6V12L16 14" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22 20.48 21.5 20.98 20.94 20.99C10.05 21.02 0.98 11.95 1.01 1.06C1.01 0.5 1.51 0 2.07 0H5.07C5.57 0 6.02 0.37 6.12 0.87L7.62 7.91C7.73 8.47 7.43 9.04 6.94 9.33L4.17 11C6.08 15.27 9.73 18.92 14 20.83L16.67 18.06C16.96 17.57 17.53 17.27 18.09 17.38L25.13 18.88C25.63 18.98 26 19.43 26 19.93V16.92C26 16.42 25.62 15.97 25.13 15.87L22 16.92Z" fill="#FFD700"/>
  </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const trustBadges = [
    { icon: <CheckmarkCircleIcon />, text: "מוסמך" },
    { icon: <LightningBoltIcon className="w-5 h-5" />, text: "מנוסה" },
    { icon: <ShieldIcon />, text: "מבוטח" },
    { icon: <StarIcon />, text: "מדורג 5 כוכבים" },
    { icon: <ClockIcon />, text: "זמין 24/7" },
  ];

  const navLinks = [
    { to: "/צור-קשר", text: "צור קשר" },
    { to: "/פרויקטים", text: "פרויקטים" },
    { to: "/שירותים", text: "שירותים" },
    { to: "/", text: "בית" },
  ];

  const marqueeItems = "זמינים 24 שעות ביממה — תיקון תקלות חשמל, התקנות, לוחות חשמל — מחירים הוגנים — מורשה ומבוטח — מעל 800 עבודות בוצעו".split(" — ");

  return (
    <header className="sticky top-0 z-50">
      {/* Trust badges bar */}
      <div className="bg-[#2D2D2D] border-b border-[#FFD700]/20">
        <div className="container">
          <div className="flex items-center justify-between py-2 overflow-x-auto">
            <div className="flex items-center gap-4 md:gap-6">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[#F5F5F5] whitespace-nowrap text-sm font-bold"
                >
                  <span className="text-[#FFD700]">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
            <Link
              to="/צור-קשר"
              className="hidden lg:flex items-center gap-2 bg-[#FFD700] text-[#1A1A1A] px-4 py-2 rounded font-bold hover:bg-[#00BFFF] transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              התקשר עכשיו
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="bg-[#1A1A1A] circuit-pattern shadow-lg shadow-black/50">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://assets.ls-assets.com/uploads/19754c85-8b8e-4156-9be3-36e852ea5497/ffa50f09-cb15-47d7-b51a-d4888958ce6f.png?w=768"
                alt="חשמלאי לוגו"
                className="h-14 md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#F5F5F5] font-bold text-lg hover:text-[#FFD700] transition-colors relative group"
                >
                  {link.text}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-[#F5F5F5] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="תפריט"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu lg:hidden ${mobileMenuOpen ? "open" : ""}`}>
          <div className="container pb-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#F5F5F5] font-bold text-lg hover:text-[#FFD700] transition-colors py-2 border-b border-[#2D2D2D]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <Link
                to="/צור-קשר"
                className="flex items-center justify-center gap-2 bg-[#FFD700] text-[#1A1A1A] px-4 py-3 rounded font-bold hover:bg-[#00BFFF] transition-colors mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PhoneIcon className="w-5 h-5" />
                התקשר עכשיו
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="bg-[#FFD700] overflow-hidden">
        <div className="flex animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 py-2 text-[#1A1A1A] font-bold whitespace-nowrap"
            >
              <LightningBoltIcon className="w-4 h-4" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}