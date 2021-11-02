import React from "react"
import "./App.css"
import ChatsPage from "./pages/ChatsPage"
import { ThemeProvider } from "@mui/material/styles"
import appTheme from "./constants/appTheme"

const text = "Добрый вечерочек"

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={appTheme}>
        <ChatsPage></ChatsPage>
      </ThemeProvider>
    </div>
  )
}

export default App
