import useScrollProgress from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__fill" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
