import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

const FadeContent = ({
  children,
  blur = false,
  duration = 1,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = '',
  ...props
}) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold, triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || !inView || hasAnimated) return;

    const el = ref.current;

    gsap.set(el, {
      autoAlpha: initialOpacity,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      willChange: 'opacity, filter'
    });

    gsap.to(el, {
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration,
      ease,
      delay,
      onComplete: () => setHasAnimated(true)
    });
  }, [inView, blur, duration, ease, delay, initialOpacity, hasAnimated]);

  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  return (
    <div ref={setRefs} className={className} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;
