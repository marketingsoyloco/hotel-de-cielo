export function SectionHeader({ kicker, title, subtitle, center = false }) {
  return (
    <header className={center ? 'center' : undefined}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </header>
  );
}
