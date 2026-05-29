import { motion } from 'framer-motion';

const defaultTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1],
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  x = 0,
  y = 24,
  once = true,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
