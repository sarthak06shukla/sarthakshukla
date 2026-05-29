import { Briefcase } from 'lucide-react';
import Reveal from './Reveal';

export default function TimelineItem({ experience, index = 0, isLeft = false }) {
  return (
    <Reveal delay={index * 0.08}>
      <div className={`relative flex items-start gap-6 md:gap-10 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
        <div className="hidden shrink-0 md:flex md:flex-col md:items-center">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/25 bg-[linear-gradient(135deg,rgba(18,32,58,0.98),rgba(43,96,210,0.55))] text-white shadow-[0_0_26px_rgba(63,130,248,0.2)]">
            <Briefcase size={18} />
          </div>
        </div>

        <article
          className={`glass-panel lift-on-hover relative flex-1 rounded-[1.75rem] p-6 sm:p-7 ${
            isLeft ? 'md:text-right' : ''
          }`}
        >
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="mb-5 flex flex-wrap items-center gap-3 md:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-500/25 bg-blue-500/10 text-blue-100">
              <Briefcase size={16} />
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-blue-200/80">
              {experience.duration}
            </span>
          </div>

          <div className={`hidden md:flex md:items-start md:gap-4 ${isLeft ? 'md:justify-end' : 'md:justify-between'}`}>
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-blue-200/80">
                {experience.duration}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white">{experience.role}</h3>
              <p className="mt-1 text-sm text-blue-200/90">
                {experience.company} - {experience.location}
              </p>
            </div>
          </div>

          <div className="md:hidden">
            <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
            <p className="mt-1 text-sm text-blue-200/90">
              {experience.company} - {experience.location}
            </p>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-300">{experience.impact}</p>

          <ul className="mt-5 space-y-3">
            {experience.description.map((item) => (
              <li
                key={item}
                className={`flex gap-3 text-sm leading-7 text-slate-300 ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-slate-200 to-blue-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className={`mt-6 flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
            {experience.techUsed.map((tech) => (
              <span key={tech} className="tag-chip">
                {tech}
              </span>
            ))}
          </div>
        </article>
      </div>
    </Reveal>
  );
}
