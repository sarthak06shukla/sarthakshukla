import Reveal from './Reveal';

export default function SectionHeading({
  title,
  subtitle,
  eyebrow = 'Section',
  align = 'center',
  className = '',
}) {
  const centered = align === 'center';

  return (
    <Reveal className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <span className="eyebrow-chip">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      ) : null}
      <div
        className={`mt-6 h-px w-28 bg-gradient-to-r from-slate-200 via-slate-300 to-blue-400 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </Reveal>
  );
}
