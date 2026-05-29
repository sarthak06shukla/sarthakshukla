import Container from './Container';
import Reveal from './Reveal';

export default function PageHeader({
  eyebrow = 'Portfolio',
  title,
  description,
  align = 'left',
  className = '',
  actions,
}) {
  const aligned = align === 'center';

  return (
    <Container className={className}>
      <Reveal
        className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-12 shadow-[0_20px_80px_rgba(4,6,24,0.55)] backdrop-blur-xl sm:px-10 lg:px-14 lg:py-16 ${
          aligned ? 'text-center' : 'text-left'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(63,130,248,0.13),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(151,217,255,0.08),transparent_24%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative z-10">
          <span className="eyebrow-chip">{eyebrow}</span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p
              className={`mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg ${
                aligned ? 'mx-auto' : ''
              }`}
            >
              {description}
            </p>
          ) : null}
          {actions ? (
            <div
              className={`mt-8 flex flex-wrap gap-4 ${
                aligned ? 'justify-center' : 'justify-start'
              }`}
            >
              {actions}
            </div>
          ) : null}
        </div>
      </Reveal>
    </Container>
  );
}
