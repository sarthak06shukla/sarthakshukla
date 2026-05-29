import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ripplePools = [
  {
    id: 'ripple-1',
    top: '10%',
    left: '5%',
    size: 220,
    opacity: 0.32,
    color: 'rgba(96,165,250,0.18)',
    coreColor: 'rgba(96,165,250,0.08)',
    duration: 18,
    delay: 0.6,
    x: 20,
    y: -14,
  },
  {
    id: 'ripple-2',
    top: '18%',
    right: '10%',
    size: 170,
    opacity: 0.28,
    color: 'rgba(151,217,255,0.18)',
    coreColor: 'rgba(151,217,255,0.07)',
    duration: 15,
    delay: 1.4,
    x: -16,
    y: 18,
  },
  {
    id: 'ripple-3',
    top: '48%',
    left: '11%',
    size: 140,
    opacity: 0.22,
    color: 'rgba(63,130,248,0.14)',
    coreColor: 'rgba(63,130,248,0.05)',
    duration: 20,
    delay: 0.4,
    x: 18,
    y: -16,
  },
  {
    id: 'ripple-4',
    bottom: '14%',
    right: '12%',
    size: 260,
    opacity: 0.26,
    color: 'rgba(59,130,246,0.16)',
    coreColor: 'rgba(59,130,246,0.06)',
    duration: 22,
    delay: 2,
    x: -20,
    y: 20,
  },
  {
    id: 'ripple-5',
    bottom: '8%',
    left: '40%',
    size: 160,
    opacity: 0.2,
    color: 'rgba(151,217,255,0.16)',
    coreColor: 'rgba(151,217,255,0.06)',
    duration: 16,
    delay: 1.2,
    x: 14,
    y: -18,
  },
];

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_26%,rgba(17,58,89,0.32),transparent_30%),linear-gradient(180deg,#060708_0%,#07090b_48%,#050608_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(63,130,248,0.13),transparent_24%),radial-gradient(circle_at_78%_16%,rgba(89,146,255,0.1),transparent_24%),radial-gradient(circle_at_48%_80%,rgba(151,217,255,0.05),transparent_22%)]" />
      <div className="grid-overlay absolute inset-0 opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,17,0)_0%,rgba(4,6,17,0.15)_35%,rgba(4,6,17,0.7)_100%)]" />

      <div className="hero-orb left-[-14rem] top-[-8rem] h-[28rem] w-[28rem] bg-blue-500/20" />
      <div className="hero-orb bottom-[-10rem] right-[-10rem] h-[30rem] w-[30rem] bg-sky-300/10 [animation-delay:1.5s]" />
      <div className="hero-orb left-[35%] top-[32%] h-[18rem] w-[18rem] bg-blue-400/10 [animation-delay:3s]" />

      {ripplePools.map((ripple) => (
        <motion.div
          key={ripple.id}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, ripple.x, 0],
                  y: [0, ripple.y, 0],
                  scale: [1, 1.03, 1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: ripple.duration,
                  delay: ripple.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
          className="liquid-ripple absolute"
          style={{
            top: ripple.top,
            right: ripple.right,
            bottom: ripple.bottom,
            left: ripple.left,
            width: ripple.size,
            height: ripple.size,
            opacity: ripple.opacity,
            '--ripple-color': ripple.color,
            '--ripple-core': ripple.coreColor,
          }}
        >
          <span className="ripple-core" />
          <span className="ripple-ring ripple-ring-1" />
          <span className="ripple-ring ripple-ring-2" />
          <span className="ripple-ring ripple-ring-3" />
        </motion.div>
      ))}

      <motion.div
        animate={{
          x: mousePos.x ? mousePos.x - 260 : 0,
          y: mousePos.y ? mousePos.y - 260 : 0,
        }}
        transition={{ type: 'spring', damping: 26, stiffness: 70, mass: 0.35 }}
        className="absolute h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(63,130,248,0.1),rgba(151,217,255,0.04)_45%,transparent_70%)] blur-3xl"
      />

      <motion.div
        animate={{
          x: mousePos.x ? mousePos.x - 88 : 0,
          y: mousePos.y ? mousePos.y - 88 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 120, mass: 0.25 }}
        className="pointer-ripple absolute hidden md:block"
      >
        <span className="ripple-core" />
        <span className="ripple-ring ripple-ring-1" />
        <span className="ripple-ring ripple-ring-2" />
        <span className="ripple-ring ripple-ring-3" />
      </motion.div>
    </div>
  );
}
