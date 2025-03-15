import { CommandInputProps } from "../types/types"

const CommandInput: React.FC<CommandInputProps> = ({ handleChange,handleKeyDown, userInput, className }) => {

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