import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import ProfileSection from "../features/profile/components/ProfileSection";
import Experience from "../features/profile/components/Experience";
import Technologies from "../features/profile/components/Technologies";
import Projects from "../features/projects/components/Projects";
import Contact from "../features/contact/components/Contact";
import Footer from "../shared/components/Footer";
import LiquidChrome from "../shared/components/ui/LiquidChrome";
import Navbar from "../shared/components/Navbar";

function App() {
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== "your_public_key_here") {
      emailjs.init(publicKey);
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-white transition-colors duration-300">

      {/* FONDO FIJO A TODA PANTALLA */}
      <div className="fixed inset-0 w-full h-screen z-0 opacity-40 pointer-events-none">
        <LiquidChrome
          baseColor={[0.02, 0.08, 0.15]}
          speed={0.2}
          amplitude={0.3}
          interactive={false}
        />
      </div>

      {/* SECCIONES SCROLLEABLES */}
      <main className="relative z-10 w-full">
        <Navbar />
        <ProfileSection />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}

export default App;
