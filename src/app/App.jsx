import Navbar from "../shared/components/Navbar";
import Hero from "../features/profile/components/Hero";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-cyan-500/30">
      {/* Componente Compartido */}
      <Navbar />
      
      {/* Secciones Principales */}
      <main>
        <Hero />
        {/* Aquí irán más adelante tus secciones de <Projects /> y <Contact /> */}
      </main>
    </div>
  );
}

export default App;