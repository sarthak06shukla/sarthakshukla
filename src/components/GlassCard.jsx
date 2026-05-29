export default function GlassCard({ children, className = '', hover = false, glow = false }) {
  return (
    <div className={`glass-panel ${hover ? 'lift-on-hover' : ''} ${glow ? 'glow-ring' : ''} ${className}`}>
      {children}
    </div>
  );
}
