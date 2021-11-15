import React from "react"
import "./App.css"
import { ThemeProvider } from "@mui/material/styles"
import appTheme from "./constants/appTheme"
import AppRouter from "./router/AppRouter"

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={appTheme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  )
}

export default App
