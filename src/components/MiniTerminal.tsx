import { MiniTerminalProps } from "../types/types"

const MiniTerminal: React.FC<MiniTerminalProps> = ({message, anchor, className}) => {

  return (
    <div 
      id={anchor}
      className={`${ className || ""}`}
    > 
      <div
        className="flex items-center justify-between px-3 py-2 bg-color-terminalHeader border-b border-color-neonGreen rounded-t-lg mt-10"
      >
          <span className="text-xs lg:text-sm text-color-neonGreen tracking-widest">
            root@cyber-portfolio: {anchor}
          </span>
      </div>
      <div 
        className="py-2 px-7 overflow-hidden terminal-glow scanline"
      >
        <pre>
          {message}
        </pre>
      </div>
    </div>
  )
}

export default MiniTerminal