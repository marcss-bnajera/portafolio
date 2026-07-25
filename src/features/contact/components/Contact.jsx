import BlurText from "../../../shared/components/ui/BlurText";
import AnimatedContent from "../../../shared/components/ui/AnimatedContent";
import FadeContent from "../../../shared/components/ui/FadeContent";
import StarBorder from "../../../shared/components/ui/StarBorder";
import ContactForm from "./ContactForm";
import { useLanguage } from "../../../shared/context/LanguageContext";
import { useTheme } from "../../../shared/context/ThemeContext";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

function Contact() {
  const { t } = useLanguage();
  const { dark } = useTheme();

  const contactLinks = [
    {
      name: "Email",
      href: "mailto:marcosbeteta07@gmail.com",
      icon: FaEnvelope,
      label: "marcosbeteta07@gmail.com",
      color: "hover:text-cyan-400 hover:border-cyan-400/50",
    },
    {
      name: "GitHub",
      href: "https://github.com/marcss-bnajera",
      icon: FaGithub,
      label: "marcss-bnajera",
      color: "hover:text-white hover:border-white/50",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/marcos-beteta-60b7b4424",
      icon: FaLinkedin,
      label: "Marcos Beteta",
      color: "hover:text-blue-400 hover:border-blue-400/50",
    },
  ];

  return (
    <section id="contact" className="w-full text-slate-900 dark:text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full">

        <div className="text-center mb-16">
          <BlurText
            text={t("contact.title")}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            animateBy="words"
            direction="top"
            delay={200}
          />
          <FadeContent delay={400} blur>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </FadeContent>
        </div>

        <div className="space-y-4 mb-12">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <AnimatedContent key={link.name} distance={60} direction="horizontal" delay={index * 0.15}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className={`flex items-center gap-4 p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${link.color} hover:shadow-lg ${
                    dark
                      ? "border-white/10 bg-slate-900/40 text-slate-300"
                      : "border-slate-200 bg-white/60 text-slate-600"
                  }`}
                >
                  <div className={`p-3 rounded-xl border ${
                    dark ? "bg-slate-800/60 border-white/10" : "bg-slate-100 border-slate-200"
                  }`}>
                    <IconComponent className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{link.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 break-all">{link.label}</p>
                  </div>
                </a>
              </AnimatedContent>
            );
          })}
        </div>

        <FadeContent delay={600} className="flex justify-center mb-16">
          <StarBorder as="a" href="/cv-marcos-beteta.pdf" download className="no-underline">
            <span className="flex items-center gap-2">
              <FaFileDownload className="text-lg" />
              {t("contact.downloadCV")}
            </span>
          </StarBorder>
        </FadeContent>

        {/* FORMULARIO DE CONTACTO */}
        <div>
          <ContactForm />
        </div>

      </div>
    </section>
  );
}

export default Contact;
