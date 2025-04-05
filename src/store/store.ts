import { configureStore } from "@reduxjs/toolkit"
import uiReducer from "./slices/uiSlice"
import terminalReducer from "./slices/terminalSlice"

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        terminal: terminalReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch