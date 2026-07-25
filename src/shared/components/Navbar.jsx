import { Navbar as MTNavbar, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

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
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <MTNavbar className="mx-auto w-full max-w-4xl mt-4 rounded-full px-6 py-3 bg-slate-900/60 border border-white/10 text-white fixed top-4 left-0 right-0 z-50 shadow-xl shadow-slate-950/20 backdrop-blur-none">
      <div className="flex items-center justify-between">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-bold text-cyan-400">
          Portafolio
        </Typography>
        <div className="flex justify-center gap-6 text-sm font-medium">
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
      </div>
    </MTNavbar>
  );
}

export default Navbar;
