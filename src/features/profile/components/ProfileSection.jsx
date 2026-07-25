import Hero from "./Hero";
import About from "./About";
import TiltedCard from "../../../shared/components/ui/TiltedCard";
import BlurText from "../../../shared/components/ui/BlurText";
import FadeContent from "../../../shared/components/ui/FadeContent";
import profileImg from "../../../assets/images/logo1.png";
import { useLanguage } from "../../../shared/context/LanguageContext";

function ProfileSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full text-slate-900 dark:text-white min-h-screen flex items-center justify-center pt-32 pb-20 px-6">
      <div className="max-w-6xl w-full">

        {/* FILA SUPERIOR: Hero + TiltedCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">

          <div>
            <Hero />
          </div>

          <FadeContent delay={300} initialOpacity={1} className="flex justify-center">
            <TiltedCard
              imageSrc={profileImg}
              altText="Marcos Beteta - Foto de perfil"
              captionText="Marcos Beteta"
              containerHeight="380px"
              containerWidth="100%"
              imageHeight="320px"
              imageWidth="280px"
              scaleOnHover={1.05}
              rotateAmplitude={12}
              showTooltip={true}
            />
          </FadeContent>

        </div>

        {/* FILA INFERIOR: About (full width) */}
        <div>
          <div className="text-center mb-12">
            <BlurText
              text={t("about.title")}
              className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
              animateBy="words"
              direction="top"
              delay={200}
            />
            <FadeContent delay={400} blur>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                {t("about.subtitle")}
              </p>
            </FadeContent>
          </div>
          <About />
        </div>

      </div>
    </section>
  );
}

export default ProfileSection;
