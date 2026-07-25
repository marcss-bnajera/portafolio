import TextType from "../../../shared/components/ui/TextType";
import githubIcon from "../../../assets/icons/github.png";
import linkedinIcon from "../../../assets/icons/linkedin.png";
import { Mail, FileText } from "lucide-react";
import { useLanguage } from "../../../shared/context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: t("hero.github"), href: "https://github.com/marcss-bnajera", isImage: true, icon: githubIcon },
    { name: t("hero.linkedin"), href: "https://www.linkedin.com/in/marcos-beteta-60b7b4424", isImage: true, icon: linkedinIcon },
    { name: t("hero.email"), href: "mailto:marcosbeteta07@gmail.com", isImage: false, IconComponent: Mail },
    { name: t("hero.cv"), href: "/cv-marcos-beteta.pdf", isImage: false, IconComponent: FileText },
  ];

  return (
    <div className="flex flex-col justify-center h-full py-12">
      <div className="min-h-[140px] md:min-h-[160px] mb-6 flex items-center">
        <TextType
          as="h1"
          text={[t("hero.greeting"), t("hero.role")]}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-md break-words"
          typingSpeed={60}
          deletingSpeed={35}
          pauseDuration={3000}
          showCursor={true}
          cursorCharacter="|"
          cursorClassName="text-cyan-400 font-bold ml-2"
        />
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="p-3 rounded-full border border-slate-300 dark:border-white/20 bg-white/60 dark:bg-slate-900/40 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 text-slate-700 dark:text-white transition-all duration-300 hover:scale-110"
          >
            {item.isImage ? (
              <img src={item.icon} alt={item.name} className="w-5 h-5 dark:invert opacity-90 hover:opacity-100 transition-opacity" />
            ) : (
              <item.IconComponent className="w-5 h-5" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Hero;
