import { useLanguage } from "../../../shared/context/LanguageContext";
import { useTheme } from "../../../shared/context/ThemeContext";

import {
  FaJava,
  FaNodeJs,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaBootstrap
} from "react-icons/fa";

import {
  SiSpringboot,
  SiDotnet,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiTypescript,
  SiNestjs,
  SiPrisma
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

function Technologies() {
  const { t } = useLanguage();
  const { dark } = useTheme();

  const techCategories = [
    {
      category: t("technologies.categories.backend"),
      skills: [
        { name: t("technologies.skills.java"), percentage: 85, icon: FaJava, color: "text-red-500" },
        { name: t("technologies.skills.spring"), percentage: 85, icon: SiSpringboot, color: "text-green-500" },
        { name: t("technologies.skills.nodejs"), percentage: 85, icon: FaNodeJs, color: "text-green-400" },
        { name: t("technologies.skills.csharp"), percentage: 70, icon: SiDotnet, color: "text-purple-400" },
        { name: t("technologies.skills.javascript"), percentage: 90, icon: FaJsSquare, color: "text-yellow-400" },
      ]
    },
    {
      category: t("technologies.categories.frontend"),
      skills: [
        { name: t("technologies.skills.react"), percentage: 85, icon: FaReact, color: "text-cyan-400" },
        { name: t("technologies.skills.tailwind"), percentage: 90, icon: SiTailwindcss, color: "text-sky-400" },
        { name: t("technologies.skills.bootstrap"), percentage: 80, icon: FaBootstrap, color: "text-purple-500" },
        { name: t("technologies.skills.html5"), percentage: 95, icon: FaHtml5, color: "text-orange-500" },
        { name: t("technologies.skills.css3"), percentage: 90, icon: FaCss3Alt, color: "text-blue-500" },
      ]
    },
    {
      category: t("technologies.categories.database"),
      skills: [
        { name: t("technologies.skills.mysql"), percentage: 85, icon: SiMysql, color: "text-blue-400" },
        { name: t("technologies.skills.postgresql"), percentage: 80, icon: SiPostgresql, color: "text-cyan-600" },
        { name: t("technologies.skills.mongodb"), percentage: 70, icon: SiMongodb, color: "text-emerald-500" },
        { name: t("technologies.skills.docker"), percentage: 75, icon: FaDocker, color: "text-blue-500" },
      ]
    },
    {
      category: t("technologies.categories.tools"),
      skills: [
        { name: t("technologies.skills.git"), percentage: 90, icon: FaGitAlt, color: "text-orange-600" },
        { name: t("technologies.skills.github"), percentage: 90, icon: FaGithub, color: dark ? "text-slate-200" : "text-slate-700" },
        { name: t("technologies.skills.linux"), percentage: 85, icon: FaLinux, color: "text-cyan-300" },
        { name: t("technologies.skills.vscode"), percentage: 90, icon: VscCode, color: "text-blue-400" },
        { name: t("technologies.skills.postman"), percentage: 85, icon: SiPostman, color: "text-orange-400" },
      ]
    }
  ];

  const learningTechs = [
    { name: t("technologies.learningList")[0], icon: SiTypescript, color: "text-blue-400" },
    { name: t("technologies.learningList")[1], icon: SiNestjs, color: "text-red-500" },
    { name: t("technologies.learningList")[2], icon: SiPrisma, color: "text-emerald-400" },
  ];

  return (
    <section className="w-full text-slate-900 dark:text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t("technologies.title").split("&")[0]} <span className="text-cyan-400">&amp; {t("technologies.title").split("&")[1]?.trim()}</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            {t("technologies.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className={`p-6 rounded-2xl border backdrop-blur-md shadow-xl hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between ${
                dark
                  ? "bg-slate-900/40 border-white/10"
                  : "bg-white/60 border-slate-200"
              }`}
            >
              <div>
                <h3 className="text-lg font-bold mb-6 text-cyan-300 border-b border-slate-200 dark:border-white/10 pb-3">
                  {cat.category}
                </h3>

                <div className="space-y-5">
                  {cat.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs md:text-sm">
                          <div className="flex items-center gap-2">
                            <IconComponent className={`text-base ${skill.color}`} />
                            <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                          </div>
                          <span className="font-mono text-xs text-cyan-400 font-semibold">
                            {skill.percentage}%
                          </span>
                        </div>

                        <div className={`w-full h-2 rounded-full overflow-hidden border ${
                          dark ? "bg-slate-800/80 border-white/5" : "bg-slate-200 border-slate-300"
                        }`}>
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`p-6 rounded-2xl border backdrop-blur-md text-center max-w-3xl mx-auto ${
          dark
            ? "bg-slate-900/30 border-cyan-500/20"
            : "bg-white/60 border-cyan-300/30"
        }`}>
          <h3 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-4">
            {t("technologies.learning")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {learningTechs.map((tech) => {
              const IconComp = tech.icon;
              return (
                <span
                  key={tech.name}
                  className={`px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2 transition-colors ${
                    dark
                      ? "bg-slate-800/60 border border-white/10 text-slate-200 hover:border-cyan-400/50"
                      : "bg-slate-100 border border-slate-200 text-slate-700 hover:border-cyan-400/50"
                  }`}
                >
                  <IconComp className={`text-lg ${tech.color}`} />
                  {tech.name}
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Technologies;
