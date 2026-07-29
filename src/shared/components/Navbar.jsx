import { useState, useEffect } from "react";
import { Navbar as MTNavbar, Typography } from "@material-tailwind/react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: t("nav.about") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <MTNavbar className="mx-auto w-full max-w-4xl mt-4 rounded-full px-6 py-3 border border-white/10 bg-slate-900/60 shadow-xl shadow-slate-950/20 text-white fixed top-4 left-0 right-0 z-50 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-bold text-cyan-400">
            Portafolio
          </Typography>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center justify-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop controls */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-full text-xs font-bold border border-white/20 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-full text-xs font-bold border border-white/20 text-slate-300 transition-all duration-300"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-full border border-white/20 text-slate-300 transition-all duration-300"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </MTNavbar>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={handleNavClick}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="absolute top-20 left-4 right-4 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
