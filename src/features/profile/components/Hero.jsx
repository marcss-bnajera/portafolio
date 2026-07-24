import TextType from "../../../shared/components/ui/TextType";
import logoImg from "../../../assets/images/logo1.png";
import githubIcon from "../../../assets/icons/github.png";
import linkedinIcon from "../../../assets/icons/linkedin.png";
import { Mail, FileText } from "lucide-react";

function Hero() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/marcss-bnajera", isImage: true, icon: githubIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/marcos-beteta-60b7b4424", isImage: true, icon: linkedinIcon },
    { name: "Email", href: "mailto:marcosbeteta07@gmail.com", isImage: false, IconComponent: Mail },
    { name: "CV", href: "/tu-cv.pdf", isImage: false, IconComponent: FileText },
  ];

  return (
    <section className="w-full text-white min-h-screen flex items-center justify-center relative pt-24 pb-12">
      <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="min-h-[140px] md:min-h-[160px] mb-6 flex items-center"> 
            <TextType 
              as="h1"
              text={[
                "¡Hola!, soy Marcos Beteta",
                "Desarrollador Full-Stack enfocado en software escalable y modular."
              ]}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md"
              typingSpeed={60}
              deletingSpeed={35}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-cyan-400 font-bold ml-2"
            />
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="p-3 rounded-full border border-white/20 bg-slate-900/40 backdrop-blur-md hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                {item.isImage ? (
                  <img src={item.icon} alt={item.name} className="w-5 h-5 invert opacity-90 hover:opacity-100 transition-opacity" />
                ) : (
                  <item.IconComponent className="w-5 h-5" />
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src={logoImg} 
            alt="Hero Ilustración" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-cyan-400/20 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;