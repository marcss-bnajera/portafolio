import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = { damping: 30, stiffness: 100, mass: 2 };

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = false,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);

  function handleMouse(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function handleMouseEnter() { scale.set(scaleOnHover); opacity.set(1); }
  function handleMouseLeave() {
    opacity.set(0); scale.set(1); rotateX.set(0); rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative flex flex-col items-center justify-center [perspective:800px]"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden text-slate-400">
          Este efecto funciona mejor en escritorio.
        </div>
      )}
      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{ width: imageWidth, height: imageHeight, rotateX, rotateY, scale }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)] border-2 border-cyan-400/20 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          style={{ width: imageWidth, height: imageHeight }}
        />
        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>
      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-slate-900/90 border border-cyan-400/30 px-[10px] py-[4px] text-[10px] text-cyan-400 opacity-0 z-[3] hidden sm:block"
          style={{ x, y, opacity }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
