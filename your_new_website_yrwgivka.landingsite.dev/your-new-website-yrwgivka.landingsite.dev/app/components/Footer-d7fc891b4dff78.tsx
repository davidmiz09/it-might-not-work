import { Link } from "react-router";

// SVG Icons
const LightningBoltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2L6 18H16L14 30L26 14H16L18 2Z" fill="#FFD700" stroke="#FFD700" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22 20.48 21.5 20.98 20.94 20.99C10.05 21.02 0.98 11.95 1.01 1.06C1.01 0.5 1.51 0 2.07 0H5.07C5.57 0 6.02 0.37 6.12 0.87L7.62 7.91C7.73 8.47 7.43 9.04 6.94 9.33L4.17 11C6.08 15.27 9.73 18.92 14 20.83L16.67 18.06C16.96 17.57 17.53 17.27 18.09 17.38L25.13 18.88C25.63 18.98 26 19.43 26 19.93V16.92C26 16.42 25.62 15.97 25.13 15.87L22 16.92Z" fill="#FFD700"/>
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.68629 2 6 4.68629 6 8C6 12.5 12 20 12 20C12 20 18 12.5 18 8C18 4.68629 15.3137 2 12 2Z" stroke="#FFD700" strokeWidth="2"/>
    <circle cx="12" cy="8" r="2" stroke="#FFD700" strokeWidth="2"/>
  </svg>
);

const ClockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="2"/>
    <path d="M12 6V12L16 14" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const EnvelopeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#FFD700" strokeWidth="2"/>
    <path d="M2 6L12 13L22 6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5C21 16.1944 17.1944 20 12.5 20C11.0779 20 9.74381 19.5988 8.59609 18.9069L2.5 20L3.64356 14.2371C2.85357 12.9818 2.5 11.5497 2.5 10C2.5 5.30558 6.30558 1.5 11 1.5C15.6944 1.5 19.5 5.30558 19.5 10C19.5 14.6944 15.6944 18.5 11 18.5" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 8L10.5 10.5M15.5 10.5L18 8M15.5 13.5L18 16" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ShieldCheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" stroke="#FFD700" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="18" cy="6" r="1" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { to: "/שירותים", text: "תיקון תקלות חשמל" },
    { to: "/שירותים", text: "התקנת לוח חשמל" },
    { to: "/שירותים", text: "התקנת תאורה" },
    { to: "/שירותים", text: "מערכות סולאריות" },
    { to: "/שירותים", text: "בדיקות חשמל" },
    { to: "/שירותים", text: "חשמלאי חירום" },
  ];

  const quickLinks = [
    { to: "/", text: "בית" },
    { to: "/שירותים", text: "שירותים" },
    { to: "/פרויקטים", text: "פרויקטים" },
    { to: "/צור-קשר", text: "צור קשר" },
  ];

  const areas = [
    "תל אביב",
    "רמת גן",
    "הרצליה",
    "פתח תקווה",
    "ראשון לציון",
    "חולון",
    "בת ים",
    "ראש העין",
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#FFD700]/20">
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo & About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <LightningBoltIcon className="w-10 h-10" />
              <span className="text-2xl font-black text-[#F5F5F5]">חשמלאי</span>
            </Link>
            <p className="text-[#F5F5F5]/70 font-bold text-sm mb-6 leading-relaxed">
              שירות חשמל מקצועי ואמין לבית ולעסק. זמינים 24/7 עם מגיעים תוך 30 דקות לכל תקלה.
            </p>

            {/* Trust badges */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheckIcon className="w-4 h-4 text-[#FFD700]" />
                <span className="text-[#F5F5F5]/80 font-bold">רישיון ממשלתי</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheckIcon className="w-4 h-4 text-[#FFD700]" />
                <span className="text-[#F5F5F5]/80 font-bold">מבוטח במלואו</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheckIcon className="w-4 h-4 text-[#FFD700]" />
                <span className="text-[#F5F5F5]/80 font-bold">אחריות על כל עבודה</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-black text-[#FFD700] mb-4">שירותים</h3>
            <ul className="space-y-2">
              {services.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="text-[#F5F5F5]/80 font-bold text-sm hover:text-[#FFD700] transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-black text-[#FFD700] mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="text-[#F5F5F5]/80 font-bold text-sm hover:text-[#FFD700] transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-[#F5F5F5] hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-all"
                aria-label="פייסבוק"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-[#F5F5F5] hover:bg-[#FFD700] hover:text-[#1A1A1A] transition-all"
                aria-label="אינסטגרם"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/972500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-[#F5F5F5] hover:bg-[#25D366] hover:text-white transition-all"
                aria-label="וואטסאפ"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-xl font-black text-[#FFD700] mb-4">צור קשר</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 mt-0.5" />
                <div>
                  <a href="tel:0500000000" className="text-[#F5F5F5] font-bold hover:text-[#FFD700] transition-colors">
                    050-000-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <EnvelopeIcon className="w-5 h-5 mt-0.5" />
                <a href="mailto:info@hashmalay.co.il" className="text-[#F5F5F5]/80 font-bold text-sm hover:text-[#FFD700] transition-colors">
                  info@hashmalay.co.il
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 mt-0.5" />
                <span className="text-[#F5F5F5]/80 font-bold text-sm">
                  תל אביב והמרכז
                </span>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 mt-0.5" />
                <span className="text-[#F5F5F5]/80 font-bold text-sm">
                  זמינים 24/7 כולל שבתות וחגים
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/צור-קשר"
              className="mt-6 flex items-center justify-center gap-2 bg-[#FFD700] text-[#1A1A1A] px-4 py-3 rounded-lg font-bold hover:bg-[#00BFFF] hover:text-white transition-all w-full"
            >
              צור קשר עכשיו
            </Link>
          </div>
        </div>

        {/* Areas served */}
        <div className="mt-12 pt-8 border-t border-[#2D2D2D]">
          <h4 className="text-lg font-black text-[#FFD700] mb-4 text-center">אזורי שירות</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, index) => (
              <span
                key={index}
                className="bg-[#2D2D2D] text-[#F5F5F5] px-3 py-1 rounded-full text-sm font-bold"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#2D2D2D] py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-[#F5F5F5]/60 font-bold text-sm">
              © {currentYear} חשמלאי - כל הזכויות שמורות
            </p>
            <p className="text-[#F5F5F5]/60 font-bold text-sm">
              שירות חשמל מקצועי 24/7 | תל אביב והמרכז
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
