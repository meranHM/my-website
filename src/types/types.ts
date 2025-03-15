import { ReactNode } from "react"

export interface GlitchEffectProps {
    className?: string
    children: ReactNode
    id?: string
  }

export interface CommandInputProps {
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  userInput?: string
  className?: string
}

export interface CommandOutputProps {
  commandHistory: string[]
}

export interface MenuSvgProps {
  openNavigation: boolean
}

export interface MiniTerminalProps {
  message: string
  anchor: string
  className?: string
}