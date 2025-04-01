import { useState, useEffect, useRef } from 'react'
import { asciiArt, allWelcomeMessages, commands } from "../constants"
import GlitchEffect from './GlitchEffect'
import TerminalNavbar from './TerminalNavbar'
import CommandInput from './CommandInput'
import CommandOutput from './CommandOutput'
import { useNavigate } from 'react-router'



const MainTerminal = () => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [showComponent, setShowComponent] = useState<boolean>(false)
  const [commandHistory, setCommandHistory] = useState<string[]>(["Enter 'help' to see available commands.",])
  const [userInput, setUserInput] = useState<string>("") 
  const navigate = useNavigate()
  const outputRef = useRef<HTMLDivElement>(null)
  const [randomIndex] = useState<number>(Math.floor(Math.random() * allWelcomeMessages.length))
  const messages:string[] = allWelcomeMessages[randomIndex]

  // Handling user commands
  const handleCommand = (command: string) => {
    let newHistory = [...commandHistory, `>${command}`]

    switch (command.toLocaleLowerCase().trim()) {
        case "help":
            newHistory.push(
                "Available commands:",
                "help - Show available commands",
                "clear - Clear the terminal",
                "cd home - Go to Home page",
                "cd projects - Go to Projects page",
                "cd about - Go to About page",
                "cd contact - Go to Contact page",
            )
            break

        case "clear":
            newHistory = []
            break
            
        case "cd home":    
        case "cd projects":    
        case "cd about":    
        case "cd contact":
            navigate(`${command.split(" ")[1]}`)
            break
        
        default:
            newHistory.push("Unknown command. Type 'help' for a list of commands.")    
    }

    setCommandHistory(newHistory)
  }

  // Handling keydowns
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && userInput.trim() !== "") {
        setUserInput("")
        handleCommand(userInput)
    } else if (e.key === "Tab") {
        e.preventDefault()

        const matches = commands.filter(cmd => cmd.startsWith(userInput))
        if (matches.length === 1) {
            setUserInput(matches[0])
        } else if (matches.length > 1) {
            setCommandHistory([...commandHistory, `> ${userInput}`, `Suggestions: ${matches.join(", ")}`])
            setUserInput("")
        }
    }
  }

  // Handling user input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.currentTarget.value)
  }

  // Delay rendering certain components
  useEffect(() => {
    const timer = setTimeout(() => {
        setShowComponent(true)
    },3200)

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
      if (index < messages.length) {
      const timer = setTimeout(() => {
          setCurrentMessage((prev) => `${prev}\n${messages[index]}`)
          setIndex(i => i + 1);
      }, 800);

      return () => clearTimeout(timer);
      }
  }, [index, messages]);



  return (
    <div 
        className="w-[90vw] max-w-3xl z-50 mx-auto mt-10 bg-color-terminalBlack rounded-lg shadow-lg neon-border"
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
        className="p-4 max-h-[80vh] min-h-[300px] overflow-y-auto terminal-glow"
        ref={outputRef}
        id="terminal-message"
    >
        <GlitchEffect 
            id="pre"
            className="text-center scanline text-[0.6rem] md:text-lg"
        >
          {asciiArt}
        </GlitchEffect>
        <pre className="text-md md:text-lg text-wrap scanline p-3">
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
                <CommandOutput 
                    commandHistory={commandHistory}
                />     
            </>
        )}
    </div>
    <CommandInput 
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
        userInput={userInput}
    />
</div>
  )
}

export default MainTerminal