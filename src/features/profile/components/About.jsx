import AnimatedContent from "../../../shared/components/ui/AnimatedContent";
import SpotlightCard from "../../../shared/components/ui/SpotlightCard";
import { FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";

function About() {
  const softSkills = [
    { name: "Trabajo en Equipo", icon: FaUsers, description: "Colaboración efectiva en equipos multidisciplinarios" },
    { name: "Resolución de Problemas", icon: FaLightbulb, description: "Enfoque analítico para encontrar soluciones eficientes" },
    { name: "Proactividad", icon: FaRocket, description: "Iniciativa para mejorar procesos y resultados" },
  ];

  return (
    <>
      {/* CONTENIDO ABOUT: BIO + BADGES */}
      <AnimatedContent direction="horizontal" distance={80} duration={1} delay={0.2}>
        <div className="flex flex-col justify-center h-full py-12 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
            Desarrollador Full-Stack
          </h3>

          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Soy un desarrollador Full-Stack apasionado por crear soluciones de software
              robustas, escalables y modulares. Mi enfoque se centra en construir
              aplicaciones que no solo funcionen bien, sino que también sean mantenibles
              y estén bien diseñadas.
            </p>
            <p>
              Con experiencia en arquitecturas de microservicios y desarrollo web moderno,
              disfruto enfrentar desafíos técnicos que me permiten crecer profesionalmente.
              Mi stack principal incluye Java, Spring Boot, React y Node.js.
            </p>
            <p>
              Actualmente estoy profundizando en TypeScript, Nest.js y Prisma ORM para
              expandir mis capacidades y construir sistemas aún más robustos.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              Guatemala
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              Estudiante de Informática
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              Disponible para trabajar
            </span>
          </div>
        </div>
      </AnimatedContent>

      {/* HABILIDADES BLANDAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto justify-center">
        {softSkills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <SpotlightCard key={skill.name} className="p-6 hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                  <IconComponent className="text-2xl text-cyan-400" />
                </div>
                <h4 className="font-bold text-white">{skill.name}</h4>
                <p className="text-sm text-slate-400">{skill.description}</p>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </>
  );
}

export default About;
