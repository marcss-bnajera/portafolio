import BlurText from "../../../shared/components/ui/BlurText";
import FadeContent from "../../../shared/components/ui/FadeContent";
import AnimatedContent from "../../../shared/components/ui/AnimatedContent";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";
import { useLanguage } from "../../../shared/context/LanguageContext";

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="w-full text-slate-900 dark:text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">

        <div className="text-center mb-16">
          <BlurText
            text={t("projects.title")}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            animateBy="words"
            direction="top"
            delay={200}
          />
          <FadeContent delay={400} blur>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </FadeContent>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedContent
              key={project.id}
              distance={60}
              direction="vertical"
              delay={index * 0.15}
            >
              <ProjectCard project={project} />
            </AnimatedContent>
          ))}
        </div>

        <FadeContent delay={600} className="mt-12 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            {t("projects.comingSoon")}
          </p>
        </FadeContent>

      </div>
    </section>
  );
}

export default Projects;
