import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Code2, Download, GraduationCap, Mail, MapPin } from 'lucide-react';
import Container from '../components/Container';
import GlassCard from '../components/GlassCard';
import GradientButton from '../components/GradientButton';
import HoverTilt from '../components/HoverTilt';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/experience';
import { profile, quickFacts, socialLinks } from '../data/profile';
import { projects } from '../data/projects';

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
const coverImage = `${import.meta.env.BASE_URL}cover.jpeg`;
const resumeFile = `${import.meta.env.BASE_URL}Sarthak-Shukla-Resume.pdf`;

const heroPanelItems = [
  {
    label: 'Studying',
    value: 'B.Tech in ECE at IIIT Sri City',
    icon: GraduationCap,
  },
  {
    label: 'Working with',
    value: 'React, FastAPI, Python, and applied ML',
    icon: Code2,
  },
  {
    label: 'Based in',
    value: profile.location,
    icon: MapPin,
  },
];

const heroIntroPoints = [
  'B.Tech ECE student at IIIT Sri City.',
  'Building web products, internal tools, and backend workflows.',
  'Working across applied ML, APIs, databases, and IT infrastructure.',
];

const heroInterests = [
  'Frontend',
  'Backend',
  'Internal tools',
  'Machine learning',
  'APIs',
  'Databases',
  'Automation',
  'Networking',
  'System support',
  'UI engineering',
];

export default function Home() {
  const linkedIn = socialLinks.find((item) => item.label === 'LinkedIn');

  return (
    <section className="px-4 pb-24 pt-28 sm:pt-32">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 18, rotateX: -8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.65,
                    delay: 0.18,
                    ease: [0.16, 1, 0.3, 1],
                    staggerChildren: 0.1,
                    delayChildren: 0.28,
                  },
                },
              }}
              className="group/hero relative min-h-[28rem] max-w-3xl outline-none [perspective:1400px] sm:min-h-[30rem]"
              tabIndex={0}
            >
              <div className="absolute inset-0 rounded-[2rem] transition duration-700 [transform-style:preserve-3d] group-hover/hero:[transform:rotateY(180deg)] group-focus/hero:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl [backface-visibility:hidden] sm:p-8">
                  <motion.div
                    aria-hidden="true"
                    animate={{ x: ['-130%', '140%'] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2.2 }}
                    className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
                  />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
                  <h1 className="relative z-10 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Hi, I&apos;m
                    <br />
                    <HoverTilt inline maxTilt={18} scale={1.045} glare={false}>
                      <span className="gradient-text-glow">{profile.fullName}.</span>
                    </HoverTilt>
                  </h1>
                  <div className="relative z-10 mt-10 rounded-[1.6rem] border border-white/10 bg-slate-950/35 p-5 backdrop-blur-xl sm:p-6">
                    <div className="space-y-3 border-l border-blue-300/35 pl-5">
                      {heroIntroPoints.map((point) => (
                        <motion.div
                          key={point}
                          variants={{
                            hidden: { opacity: 0, y: 14, rotateX: -12, filter: 'blur(7px)' },
                            visible: { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' },
                          }}
                          transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-start gap-3 text-sm leading-7 text-slate-200 sm:text-base"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-200 shadow-[0_0_16px_rgba(147,197,253,0.6)]" />
                          <span>{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/12 bg-slate-950 shadow-[0_24px_90px_rgba(0,0,0,0.42)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <img
                    src={coverImage}
                    alt={`${profile.fullName} at NSE`}
                    className="h-full w-full object-cover object-[56%_26%]"
                  />
                </div>
              </div>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={resumeFile}
                download="Sarthak-Shukla-Resume.pdf"
                className="button-primary"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download CV
                  <Download size={18} />
                </span>
              </a>
              <GradientButton to="/projects" variant="secondary">
                Projects
                <ArrowRight size={18} />
              </GradientButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {quickFacts.slice(0, 3).map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300 backdrop-blur-xl"
                >
                  <span className="mr-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                    {fact.label}
                  </span>
                  <span className="font-medium text-white">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <HoverTilt className="rounded-[2rem]" maxTilt={10} scale={1.018}>
              <GlassCard className="overflow-hidden rounded-[2rem] p-6 sm:p-8">
                <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(113,166,255,0.28),rgba(17,20,26,0)_72%)] blur-2xl" />
                <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(79,137,255,0.16),rgba(17,20,26,0)_70%)] blur-3xl" />
                <div className="relative z-10">
                  <span className="eyebrow-chip">Current focus</span>

                  <div className="mt-6 space-y-3">
                    {heroPanelItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="flex items-start gap-4 rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-blue-200">
                            <Icon size={18} />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                              {item.label}
                            </p>
                            <p className="mt-2 text-sm leading-7 text-white">{item.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Interests</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {heroInterests.map((item) => (
                        <span key={item} className="tag-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition hover:border-blue-500/25 hover:bg-white/[0.05]"
                    >
                      <Mail size={16} className="text-blue-200" />
                      Email
                    </a>
                    {linkedIn ? (
                      <a
                        href={linkedIn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition hover:border-blue-500/25 hover:bg-white/[0.05]"
                      >
                        LinkedIn
                        <ArrowUpRight size={16} className="text-blue-200" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </GlassCard>
            </HoverTilt>
          </motion.div>
        </div>
      </Container>

      <Container className="mt-24">
        <SectionHeading
          eyebrow="Projects"
          title="A few things I&apos;ve worked on."
          align="left"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} compact />
          ))}
        </div>
      </Container>

      <Container className="mt-24">
        <Reveal>
          <GlassCard className="rounded-[2rem] p-6 sm:p-8">
            <div className="relative z-10">
              <span className="eyebrow-chip">Experience</span>
              <h2 className="mt-6 text-3xl font-semibold text-white">Recent work.</h2>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {experiences.slice(0, 2).map((item) => (
                  <div key={item.id} className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                        <p className="mt-1 text-sm text-blue-200/90">{item.company}</p>
                      </div>
                      <span className="tag-chip">{item.duration}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{item.impact}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <GradientButton to="/experience" variant="secondary">
                  View experience
                  <ArrowRight size={18} />
                </GradientButton>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
