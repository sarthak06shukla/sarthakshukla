import Container from '../components/Container';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { quickFacts } from '../data/profile';
import { skillCategories } from '../data/skills';

const aboutPointers = [
  {
    title: 'B.Tech ECE student',
    description:
      'Indian Institute of Information Technology, Sri City. Batch: 2023 - 2027.',
  },
  {
    title: 'Primary areas',
    description:
      'Full-stack development, backend systems, internal tools, and applied machine learning.',
  },
  {
    title: 'Technical work',
    description:
      'React, Angular, FastAPI, SQLite, Python, SQL, NLP libraries, and machine learning workflows.',
  },
  {
    title: 'Current experience',
    description:
      'Information Technology Intern at Radisson Hotel Group; previous Software Intern at NSE India.',
  },
];

export default function About() {
  return (
    <section className="px-4 pb-24 pt-28 sm:pt-32">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <GlassCard className="rounded-[2rem] p-6 sm:p-8">
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="eyebrow-chip">About me</span>
                  <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Quick profile.
                  </h1>
                </div>

                <div className="space-y-4">
                  {aboutPointers.map((item, index) => (
                    <div
                      key={item.title}
                      className="group relative overflow-hidden rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.045] hover:shadow-[0_18px_55px_rgba(63,130,248,0.12)]"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/25 to-transparent opacity-0 transition group-hover:opacity-100" />
                      <div className="relative z-10 flex gap-4">
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-300/20 bg-blue-500/[0.08] text-xs font-semibold text-blue-100">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h2 className="text-base font-semibold text-white">{item.title}</h2>
                          <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="glow-ring rounded-[2rem] p-6 sm:p-8">
              <div className="relative z-10">
                <span className="eyebrow-chip">At a glance</span>
                <div className="mt-6 space-y-4">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-start justify-between gap-4 rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <span className="text-xs uppercase tracking-[0.22em] text-slate-500">{fact.label}</span>
                      <span className="text-right text-sm font-medium text-white">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Container>

      <Container className="mt-24">
        <SectionHeading
          eyebrow="Skills"
          title="A stack shaped around full-stack builds and applied ML."
          subtitle="My toolkit covers web interfaces, backend APIs, structured data work, and machine learning libraries for automation-heavy use cases."
          align="left"
        />

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.08}>
              <div>
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard key={skill.name} {...skill} index={skillIndex} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
