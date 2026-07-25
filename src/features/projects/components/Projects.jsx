import BlurText from "../../../shared/components/ui/BlurText";
import AnimatedContent from "../../../shared/components/ui/AnimatedContent";
import FadeContent from "../../../shared/components/ui/FadeContent";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

function Projects() {
  return (
    <section id="projects" className="w-full text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">

        {/* TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <BlurText
            text="Proyectos"
            className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
            animateBy="words"
            direction="top"
            delay={200}
          />
          <FadeContent delay={400} blur>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Una selección de proyectos que reflejan mis habilidades y pasión por el desarrollo de software.
            </p>
          </FadeContent>
        </div>

        {/* GRID DE PROYECTOS */}
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

        {/* MENSAJE SI NO HAY MÁS PROYECTOS */}
        <FadeContent delay={600} className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Más proyectos próximamente...
          </p>
        </FadeContent>

      </div>
    </section>
  );
}

export default Projects;
