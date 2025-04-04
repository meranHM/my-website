import { useEffect} from 'react'
import { GlitchEffectProps } from '../types/types'


const GlitchEffect: React.FC<GlitchEffectProps> = ({className, children, id}) => {
  
  useEffect(() => {
    const applyGlitchEffect = () => {
      const element = document.getElementById("hasGlitch")

      if (!element) return

      element.classList.add("glitch")

      setTimeout(() => {
        element.classList.remove("glitch")
      }, 1000)

      const nextTime = Math.random() * 5000 + 5000
      setTimeout(applyGlitchEffect, nextTime)
    }

    applyGlitchEffect()
  },[])

  const renderPre = () => (
    <pre className={className} id="hasGlitch">
      {children}
    </pre>
  )

  const renderParagraph = () => (
      <p className={className} id="hasGlitch">
        {children}
      </p>
  )



  return id === "pre" ? renderPre() : renderParagraph()
}

export default GlitchEffect