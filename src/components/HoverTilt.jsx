import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const springConfig = {
  stiffness: 200,
  damping: 18,
  mass: 0.7,
};

export default function HoverTilt({
  children,
  className = '',
  inline = false,
  maxTilt = 12,
  scale = 1.02,
  glare = true,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = inline ? motion.span : motion.div;
  const InnerTag = inline ? 'span' : 'div';

  const rotateXInput = useMotionValue(0);
  const rotateYInput = useMotionValue(0);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);

  const rotateX = useSpring(rotateXInput, springConfig);
  const rotateY = useSpring(rotateYInput, springConfig);

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${pointerX}% ${pointerY}%, rgba(255,255,255,0.18), transparent 48%)`;

  const handleMove = (event) => {
    if (reduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    pointerX.set(relativeX * 100);
    pointerY.set(relativeY * 100);
    rotateYInput.set((relativeX - 0.5) * maxTilt * 2);
    rotateXInput.set((0.5 - relativeY) * maxTilt * 2);
  };

  const resetTilt = () => {
    pointerX.set(50);
    pointerY.set(50);
    rotateXInput.set(0);
    rotateYInput.set(0);
  };

  return (
    <MotionTag
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      onFocus={resetTilt}
      className={`tilt-shell group ${inline ? 'inline-block align-baseline' : 'block'} ${className}`}
      style={
        reduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1200,
            }
      }
      whileHover={reduceMotion ? undefined : { scale }}
      transition={{ duration: 0.22 }}
    >
      {glare ? (
        <motion.span
          aria-hidden="true"
          className={`tilt-glare pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 ${
            inline ? 'hidden' : ''
          }`}
          style={{ background: glareBackground }}
        />
      ) : null}
      <InnerTag className={`relative z-10 ${inline ? 'inline-block tilt-depth-sm' : 'h-full tilt-depth-md'}`}>
        {children}
      </InnerTag>
    </MotionTag>
  );
}
