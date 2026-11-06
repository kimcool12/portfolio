export default function SectionHeader({ eyebrow, title }) {
  return (
    <header className="section-header">
      <span className="section-header__eyebrow">{`// ${eyebrow}`}</span>
      <h2>{title}</h2>
    </header>
  )
}
