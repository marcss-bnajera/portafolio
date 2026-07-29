import ShinyText from "./ui/ShinyText";
import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/marcss-bnajera", icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/marcos-beteta-60b7b4424", icon: FaLinkedin },
    { name: "Email", href: "mailto:marcosbeteta07@gmail.com", icon: FaEnvelope },
  ];

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="relative w-full border-t border-white/10 backdrop-blur-md bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          <div className="text-center md:text-left">
            <ShinyText
              text="Marcos Beteta"
              className="text-xl font-bold"
              speed={3}
              color="#64748b"
              shineColor="#22d3ee"
            />
            <p className="text-slate-500 text-sm mt-2">
              {t("footer.role")}
            </p>
          </div>

          <div className="flex justify-center gap-6 text-sm flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2.5 rounded-full border border-white/10 bg-slate-900/40 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <IconComponent className="text-lg" />
                </a>
              );
            })}
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs">
            &copy; {currentYear} Marcos Beteta. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
