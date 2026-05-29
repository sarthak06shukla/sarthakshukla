import Reveal from './Reveal';

export default function SkillCard({ name, icon: Icon, index = 0 }) {
  return (
    <Reveal delay={index * 0.04}>
      <div className="glass-panel lift-on-hover group flex items-center gap-4 rounded-2xl px-4 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-blue-200 transition duration-300 group-hover:border-blue-500/35 group-hover:text-white">
          {Icon ? <Icon size={20} strokeWidth={1.8} /> : null}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">Tooling</p>
        </div>
      </div>
    </Reveal>
  );
}
