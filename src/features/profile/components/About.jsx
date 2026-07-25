import AnimatedContent from "../../../shared/components/ui/AnimatedContent";
import SpotlightCard from "../../../shared/components/ui/SpotlightCard";
import { FaUsers, FaLightbulb, FaRocket, FaCode } from "react-icons/fa";
import { useLanguage } from "../../../shared/context/LanguageContext";

function About() {
  const { t } = useLanguage();

  const softSkills = [
    { key: "teamwork", icon: FaUsers },
    { key: "problemSolving", icon: FaLightbulb },
    { key: "proactivity", icon: FaRocket },
    { key: "cleanCode", icon: FaCode },
  ];

  return (
    <>
      <AnimatedContent direction="horizontal" distance={80} duration={1} delay={0.2}>
        <div className="flex flex-col justify-center h-full py-12 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
            {t("about.role")}
          </h3>

          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            {t("about.bio").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              {t("about.badges.location")}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              {t("about.badges.student")}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              {t("about.badges.available")}
            </span>
          </div>
        </div>
      </AnimatedContent>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {softSkills.map((skill) => {
          const IconComponent = skill.icon;
          const skillData = t(`about.skills.${skill.key}`);
          return (
            <SpotlightCard key={skill.key} className="p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                  <IconComponent className="text-2xl text-cyan-400" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">{skillData.name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{skillData.desc}</p>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </>
  );
}

export default About;
