import { Navbar as MTNavbar, Typography } from "@material-tailwind/react";

function Navbar() {
  return (
    <MTNavbar className="mx-auto w-full max-w-4xl mt-4 rounded-full px-6 py-3 bg-slate-900/60 border border-white/10 text-white fixed top-4 left-0 right-0 z-50 shadow-xl shadow-slate-950/20 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-bold text-cyan-400">
          Portafolio
        </Typography>
        <div className="flex justify-center gap-6 text-sm font-medium ">
          <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre mí</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contacto</a>
        </div>
      </div>
    </MTNavbar>
  )
}

export default Navbar;