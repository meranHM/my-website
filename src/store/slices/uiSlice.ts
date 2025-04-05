import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UIState {
    isNewsPaperMode: boolean
    isTerminalOpen: boolean
}

const initialState: UIState = {
    isNewsPaperMode: false,
    isTerminalOpen: false,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleNewsPaperMode: (state) => {
            state.isNewsPaperMode = !state.isNewsPaperMode
        },
        setNewsPaperMode: (state, action: PayloadAction<boolean>) => {
            state.isNewsPaperMode = action.payload
        },
        toggleTerminal: (state) => {
            state.isTerminalOpen = !state.isTerminalOpen
        },
        setTerminalOpen: (state, action: PayloadAction<boolean>) => {
            state.isTerminalOpen = action.payload
        },
    },
})

export const { 
    toggleNewsPaperMode, 
    setNewsPaperMode, 
    toggleTerminal, 
    setTerminalOpen } = uiSlice.actions
    
export default uiSlice.reducer