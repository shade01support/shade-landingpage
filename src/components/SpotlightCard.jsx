import { useRef } from 'react'
import './SpotlightCard.css'

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(93, 24, 236, 0.15)',
  background = '#ffffff',
  border = '1px solid rgba(0, 0, 0, 0.08)'
}) => {
  const divRef = useRef(null)

  const handleMouseMove = e => {
    const rect = divRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    divRef.current.style.setProperty('--mouse-x', `${x}px`)
    divRef.current.style.setProperty('--mouse-y', `${y}px`)
    divRef.current.style.setProperty('--spotlight-color', spotlightColor)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
      style={{ background, border }}
    >
      {children}
    </div>
  )
}

export default SpotlightCard

