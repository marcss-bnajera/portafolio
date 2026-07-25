import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

const AnimatedContent = ({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  className = '',
  ...props
}) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (!ref.current || !inView) return;

    const el = ref.current;
    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'visible'
    });

    gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay
    });
  }, [inView, distance, direction, reverse, duration, ease, initialOpacity, animateOpacity, scale, delay]);

  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  return (
    <div ref={setRefs} className={`invisible ${className}`} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContent;
