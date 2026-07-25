import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md overflow-hidden hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">

      {/* Imagen del proyecto */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </div>
      )}

      {/* Contenido */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-white/10 bg-slate-800/60 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
            >
              <FaGithub className="text-base" />
              Código
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-base" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
