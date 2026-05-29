import { Link } from 'react-router-dom';

const variants = {
  primary: 'button-primary',
  secondary: 'button-secondary',
  subtle: 'button-subtle',
};

export default function GradientButton({
  children,
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
  disabled = false,
}) {
  const classes = `${variants[variant] || variants.primary} ${disabled ? 'pointer-events-none opacity-60' : ''} ${className}`;
  const inner = <span className="relative z-10 flex items-center gap-2">{children}</span>;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {inner}
    </button>
  );
}
