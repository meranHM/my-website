import { createSlice } from "@reduxjs/toolkit"



interface RetroState {
    isRetro: boolean
    isRetroPending: boolean
}

const initialState: RetroState = {
    isRetro: false,
    isRetroPending: false,
}

const retroSlice = createSlice({
    name: "retro",
    initialState,
    reducers: {
        startRetroTransition: (state) => {
            state.isRetroPending = true
        },
        activateRetro: (state) => {
            state.isRetro = true
            state.isRetroPending = false
        },
        deactivateRetro: (state) => {
            state.isRetro = false
            state.isRetroPending = false
        }
     }
})

export const { 
    startRetroTransition, 
    activateRetro, 
    deactivateRetro  } = retroSlice.actions
export default retroSlice.reducer