import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import TextType from "../../../shared/components/ui/TextType";
import heroImg from "../../../assets/hero.png";

function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=2762&q=80"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full bg-slate-950 text-white min-h-screen flex flex-col items-center pt-0 pb-12 gap-12">
      
      {/* SECCIÓN SUPERIOR: CARRUSEL */}
      <div className="mx-auto w-full max-w-full px-0">
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-t-none rounded-b-xl border-b border-slate-800 shadow-2xl">
          
          <div 
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full h-full shrink-0">
                <img
                  src={src}
                  alt={`Proyecto ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`block h-1.5 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === index ? "w-8 bg-cyan-400" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: PRESENTACIÓN */}
      <div className="max-w-6xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="min-h-[140px] md:min-h-[160px] mb-6 flex items-center"> 
            <TextType 
              as="h1"
              text={[
                "¡Hola!, soy Marcos Beteta",
                "Desarrollador Full-Stack enfocado en software escalable y modular."
              ]}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
              typingSpeed={60}
              deletingSpeed={35}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-cyan-400 font-bold ml-2"
            />
          </div>

          <div className="flex gap-4">
            <Button className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors rounded-full font-bold" ripple={true}>
              Ver Proyectos
            </Button>
            <Button className="border border-white/20 text-white hover:bg-white/10 transition-colors rounded-full" ripple={true}>
              Contáctame
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src={heroImg} 
            alt="Hero Ilustración" 
            className="w-3/4 max-w-xs md:max-w-sm drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]" 
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;