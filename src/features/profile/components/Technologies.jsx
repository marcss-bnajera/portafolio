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
  const techCategories = [
    {
      category: "Backend & Lenguajes",
      skills: [
        { name: "Java / JavaFX", percentage: 85, icon: FaJava, color: "text-red-500" },
        { name: "Spring Boot", percentage: 85, icon: SiSpringboot, color: "text-green-500" },
        { name: "Node.js / Express", percentage: 85, icon: FaNodeJs, color: "text-green-400" },
        { name: "C# / .NET", percentage: 70, icon: SiDotnet, color: "text-purple-400" },
        { name: "JavaScript (ES6+)", percentage: 90, icon: FaJsSquare, color: "text-yellow-400" },
      ]
    },
    {
      category: "Frontend & Mobile",
      skills: [
        { name: "React / React Native", percentage: 85, icon: FaReact, color: "text-cyan-400" },
        { name: "Tailwind CSS", percentage: 90, icon: SiTailwindcss, color: "text-sky-400" },
        { name: "Bootstrap", percentage: 80, icon: FaBootstrap, color: "text-purple-500" },
        { name: "HTML5", percentage: 95, icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", percentage: 90, icon: FaCss3Alt, color: "text-blue-500" },
      ]
    },
    {
      category: "Bases de Datos & DevOps",
      skills: [
        { name: "MySQL", percentage: 85, icon: SiMysql, color: "text-blue-400" },
        { name: "PostgreSQL", percentage: 80, icon: SiPostgresql, color: "text-cyan-600" },
        { name: "MongoDB", percentage: 70, icon: SiMongodb, color: "text-emerald-500" },
        { name: "Docker", percentage: 75, icon: FaDocker, color: "text-blue-500" },
      ]
    },
    {
      category: "Entorno & Herramientas",
      skills: [
        { name: "Git", percentage: 90, icon: FaGitAlt, color: "text-orange-600" },
        { name: "GitHub", percentage: 90, icon: FaGithub, color: "text-slate-200" },
        { name: "Linux (Arch / Hyprland)", percentage: 85, icon: FaLinux, color: "text-cyan-300" },
        { name: "VS Code", percentage: 90, icon: VscCode, color: "text-blue-400" },
        { name: "Postman", percentage: 85, icon: SiPostman, color: "text-orange-400" },
      ]
    }
  ];

  const learningTechs = [
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "Nest.js", icon: SiNestjs, color: "text-red-500" },
    { name: "Prisma ORM", icon: SiPrisma, color: "text-emerald-400" },
  ];

  return (
    <section className="w-full text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full">
        
        {/* TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Tecnologías & <span className="text-cyan-400">Herramientas</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Stack tecnológico con el que construyo aplicaciones robustas, escalables y modulares.
          </p>
        </div>

        {/* GRID DE CATEGORÍAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techCategories.map((cat) => (
            <div 
              key={cat.category}
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md shadow-xl hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold mb-6 text-cyan-300 border-b border-white/10 pb-3">
                  {cat.category}
                </h3>

                <div className="space-y-5">
                  {cat.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={skill.name} className="space-y-1.5">
                        
                        {/* Header del ítem con icono, nombre y porcentaje */}
                        <div className="flex justify-between items-center text-xs md:text-sm">
                          <div className="flex items-center gap-2">
                            <IconComponent className={`text-base ${skill.color}`} />
                            <span className="font-medium text-slate-200">{skill.name}</span>
                          </div>
                          <span className="font-mono text-xs text-cyan-400 font-semibold">
                            {skill.percentage}%
                          </span>
                        </div>

                        {/* Barra de Progreso */}
                        <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden border border-white/5">
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

        {/* SECCIÓN APRENDIENDO ACTUALMENTE */}
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-cyan-500/20 backdrop-blur-md text-center max-w-3xl mx-auto">
          <h3 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-4">
            Actualmente Aprendiendo & Profundizando
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {learningTechs.map((tech) => {
              const IconComp = tech.icon;
              return (
                <span 
                  key={tech.name}
                  className="px-4 py-2 rounded-xl bg-slate-800/60 border border-white/10 text-slate-200 font-medium text-sm flex items-center gap-2 hover:border-cyan-400/50 transition-colors"
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