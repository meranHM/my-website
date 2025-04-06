import { CommandInputProps } from "../types/types"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../store/store"
import { 
  setUserInput,
  addCommandToHistory,
  clearHistory
} from "../store/slices/terminalSlice"
import { startRetroTransition } from "../store/slices/retroSlice"
import { useNavigate } from "react-router"
import { commands } from "../constants"



const CommandInput: React.FC<CommandInputProps> = ({ className }) => {
  const userInput = useSelector((state: RootState) => state.terminal.userInput)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleCommand = (command: string) => {
    let newHistory = [`> ${command}`]
  
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
              "retro - Go back in time..."
            )
            break

        case "retro":
          dispatch(startRetroTransition())
          break    
        
        case "clear":
            dispatch(clearHistory())
            return
              
        case "cd home":    
        case "cd projects":    
        case "cd about":    
        case "cd contact":
            navigate(`${command.split(" ")[1]}`)
            break
          
        default:
            newHistory.push("Unknown command. Type 'help' for a list of commands.")    
    }
  
    dispatch(addCommandToHistory(newHistory))
    }

    // Handling keydowns
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && userInput.trim() !== "") {
          dispatch(setUserInput(""))
          handleCommand(userInput)
      } else if (e.key === "Tab") {
          e.preventDefault()
  
          const matches = commands.filter(cmd => cmd.startsWith(userInput))
  
          if (matches.length === 1) {
              dispatch(setUserInput(matches[0]))
          } else if (matches.length > 1) {
              dispatch(addCommandToHistory([
                  `> ${userInput}`,
                  `Suggestions: ${matches.join(", ")}`
              ]))
              dispatch(setUserInput(""))
          }
      }
    }

  // Handling user input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserInput(e.currentTarget.value))
  }

  return (
    <div 
    className={`flex items-center p-2 border-t border-t-color-neonGreen bg-color-terminalBlack ${className || "" }`}
    id="command-input"
>
    <span className="text-neonGreen"></span>
    <input 
        type="text"
        className="w-full bg-transparent caret-inherit text-color-neonGreen outline-none pl-2"
        placeholder="Enter command..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={userInput}
        autoFocus
    />
    </div>
  )
}

export default CommandInput