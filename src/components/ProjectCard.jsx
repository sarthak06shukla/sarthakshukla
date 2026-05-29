import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectCard({ project, index = 0, compact = false }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const rotateXInput = useMotionValue(0);
  const rotateYInput = useMotionValue(0);
  const primaryLink = project.live || project.github;

  const rotateX = useSpring(rotateXInput, { stiffness: 190, damping: 18, mass: 0.7 });
  const rotateY = useSpring(rotateYInput, { stiffness: 190, damping: 18, mass: 0.7 });

  const glowBackground = useMotionTemplate`radial-gradient(320px circle at ${pointerX}% ${pointerY}%, rgba(63,130,248,0.14), transparent 62%)`;
  const glareBackground = useMotionTemplate`radial-gradient(220px circle at ${pointerX}% ${pointerY}%, rgba(255,255,255,0.16), transparent 50%)`;

  const visibleTech = compact ? project.techStack.slice(0, 3) : project.techStack;

  const handleMouseMove = (event) => {
    if (reduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    pointerX.set(relativeX * 100);
    pointerY.set(relativeY * 100);
    rotateYInput.set((relativeX - 0.5) * 16);
    rotateXInput.set((0.5 - relativeY) * 16);
  };

  const resetTilt = () => {
    pointerX.set(50);
    pointerY.set(50);
    rotateXInput.set(0);
    rotateYInput.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduceMotion ? { y: -8 } : { y: -8, scale: 1.014 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="group relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-slate-950/50 shadow-[0_24px_80px_rgba(4,6,24,0.42)] backdrop-blur-xl transition duration-500 hover:border-blue-500/22"
      style={
        reduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1200,
              transformStyle: 'preserve-3d',
            }
      }
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition duration-500 group-hover:opacity-100"
        style={{ background: glareBackground }}
      />

      {primaryLink ? (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block ${compact ? 'h-36' : 'h-44'} bg-gradient-to-br ${project.gradient} tilt-depth-sm`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.3))]" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
            <span className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-200 backdrop-blur-xl">
              {project.category}
            </span>
            <span className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs text-slate-200 backdrop-blur-xl">
              {project.year}
            </span>
          </div>
        </a>
      ) : (
        <div className={`relative ${compact ? 'h-36' : 'h-44'} bg-gradient-to-br ${project.gradient} tilt-depth-sm`}>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04),rgba(2,6,23,0.3))]" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
            <span className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-200 backdrop-blur-xl">
              {project.category}
            </span>
            <span className="rounded-full border border-white/12 bg-slate-950/35 px-3 py-1.5 text-xs text-slate-200 backdrop-blur-xl">
              {project.year}
            </span>
          </div>
        </div>
      )}

      <div className="relative p-6 sm:p-7 tilt-depth-md">
        <div className="flex items-start justify-between gap-4">
          <div>
            {primaryLink ? (
              <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-blue-100">
                  {project.title}
                </h3>
              </a>
            ) : (
              <h3 className="text-2xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-blue-100">
                {project.title}
              </h3>
            )}
            <p className="mt-2 text-sm text-blue-200">{project.status}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          {compact ? project.summary || project.description : project.description}
        </p>
        {!compact ? (
          <p className="mt-3 text-sm leading-7 text-slate-400">{project.outcome}</p>
        ) : null}

        {!compact ? (
          <div className="mt-6 space-y-3">
            {project.highlights.slice(0, 2).map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-slate-200 to-blue-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <span key={tech} className="tag-chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="relative z-20 mt-8 flex flex-wrap items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary pointer-events-auto !px-4 !py-3"
            >
              <span className="relative z-10 flex items-center gap-2">
                <GithubIcon size={16} />
                GitHub
              </span>
            </a>
          ) : null}

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary pointer-events-auto !px-4 !py-3"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ExternalLink size={16} />
                Live Demo
              </span>
            </a>
          ) : (
            <span className="button-subtle pointer-events-none !px-4 !py-3 opacity-70">
              <span className="relative z-10 flex items-center gap-2">
                <ArrowUpRight size={16} />
                Private project
              </span>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
