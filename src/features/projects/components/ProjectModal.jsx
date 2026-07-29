import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = project.gallery || [];
  const hasGallery = images.length > 0;

  const prev = useCallback(() => {
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/95 rounded-t-2xl">
          <h2 className="text-xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/50 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Carrusel */}
        {hasGallery && (
          <div className="relative w-full aspect-video bg-slate-950">
            <img
              src={images[currentIdx]}
              alt={`${project.title} - ${currentIdx + 1}`}
              className="w-full h-full object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIdx(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === currentIdx ? "bg-cyan-400 scale-125" : "bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Detalles */}
        <div className="p-6 space-y-5">
          {project.longDescription && (
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.longDescription}
            </p>
          )}

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

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-white/10 bg-slate-800/60 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
            >
              <FaGithub className="text-base" />
              Ver código en GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
