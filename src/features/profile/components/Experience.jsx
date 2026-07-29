import BlurText from "../../../shared/components/ui/BlurText";
import FadeContent from "../../../shared/components/ui/FadeContent";
import { useLanguage } from "../../../shared/context/LanguageContext";
import { GraduationCap, Award } from "lucide-react";

const icons = [GraduationCap, Award];

function Experience() {
  const { t } = useLanguage();
  const items = t("experience.items");

  return (
    <section id="experience" className="w-full text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full">

        <div className="text-center mb-16">
          <BlurText
            text={t("experience.title")}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            animateBy="words"
            direction="top"
            delay={200}
          />
          <FadeContent delay={400} blur initialOpacity={1}>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
              {t("experience.subtitle")}
            </p>
          </FadeContent>
        </div>

        <div className="relative">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/30 to-transparent hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/30 to-transparent md:hidden" />

          {items.map((item, index) => {
            const IconComp = icons[index] || GraduationCap;
            const isLeft = index % 2 === 0;

            return (
              <FadeContent key={index} delay={index * 200} initialOpacity={1}>
                <div className={`relative flex items-start gap-6 md:gap-0 mb-12 md:mb-16 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}>

                  {/* Círculo indicador en la línea */}
                  <div className="absolute left-6 md:left-1/2 top-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-950 z-10 mt-2 hidden md:block" />
                  <div className="absolute left-[22px] md:hidden top-[2px] w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-950 z-10 mt-2" />

                  {/* Espaciador para que el contenido no se monte sobre la línea */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pl-16" : "md:pr-16"}`}>
                    <div className="p-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300">

                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                          <IconComp className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/20">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-cyan-300/80 font-medium mb-3">{item.institution}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>

                    </div>
                  </div>
                </div>
              </FadeContent>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Experience;
