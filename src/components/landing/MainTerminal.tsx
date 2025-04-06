import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { asciiArt, allWelcomeMessages } from "../../constants"
import GlitchEffect from '../design/GlitchEffect'
import TerminalNavbar from './TerminalNavbar'
import CommandInput from '../CommandInput'
import CommandOutput from './CommandOutput'




const MainTerminal = () => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [showComponent, setShowComponent] = useState<boolean>(false)
  const commandHistory = useSelector((state: RootState) => state.terminal.commandHistory)
  const outputRef = useRef<HTMLDivElement>(null)
  const hasStartedTyping = useRef(false)
  const [randomIndex] = useState<number>(Math.floor(Math.random() * allWelcomeMessages.length))
  const messages:string[] = allWelcomeMessages[randomIndex]


  // Delay rendering certain components
  useEffect(() => {
    const timer = setTimeout(() => {
        setShowComponent(true)
    },2200)

    return () => clearTimeout(timer)
  }, [])

  // Auto scrolling
  useEffect(() => {
      if (outputRef.current) {
          outputRef.current.scrollTop = outputRef.current.scrollHeight
      }
  }, [commandHistory, showComponent])

  //Adding the typewriter effect for the welcome message
  useEffect(() => {
    if (hasStartedTyping.current) return;
    hasStartedTyping.current = true

    if (index < messages.length) {
        let charIndex = 0
        const sentence = messages[index]

        const typewriter = () => {
            if (charIndex < sentence.length - 1) {
                setCurrentMessage((prev) => prev + sentence[charIndex])
                charIndex++
                setTimeout(typewriter, 10)
            } else {
                setTimeout(() => {
                    setCurrentMessage((prev) => prev + "\n")
                    setIndex((i) => i + 1)
                    hasStartedTyping.current = false
                }, 200)
            }
        }

        typewriter()
    }
  }, [index, messages])


  return (
    <div 
        className="w-[90vw] max-w-3xl z-50 mx-auto mt-10 bg-color-terminalBlack rounded-lg neon-border overflow-hidden"
        id="terminal"
    >
        <div
            className="flex items-center justify-between px-3 py-2 bg-color-terminalHeader border-b border-color-neonGreen rounded-t-lg"
            id="terminal-header"
        >
            <div className="flex gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-xs text-color-neonGreen">root@cyber-portfolio:~</span>
            <div className="w-12"/>
        </div>
    <div 
        className="p-4 max-h-[80dvh] min-h-[400px] overflow-y-auto terminal-glow"
        ref={outputRef}
        id="terminal-message"
    >
        <GlitchEffect 
            id="pre"
            className="text-center scanline text-[0.6rem] md:text-lg"
        >
          {asciiArt}
        </GlitchEffect>
        <pre className="text-xs md:text-lg text-wrap scanline p-3">
            {currentMessage}
        </pre>
        {showComponent && (
            <>
                <h2
                className="scanline p-3 mt-1"
                >
                Navigate using the system menu or enter a command.
                </h2>
                <TerminalNavbar />
                <CommandOutput />
            </>
        )}
    </div>
    <CommandInput />
</div>
  )
}

export default MainTerminal
