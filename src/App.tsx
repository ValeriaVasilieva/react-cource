import React from "react"
import "./App.css"
import { ThemeProvider } from "@mui/material/styles"
import appTheme from "./constants/appTheme"
import AppRouter from "./router/AppRouter"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ThemeProvider theme={appTheme}>
          <AppRouter />
        </ThemeProvider>
      </div>
    </Provider>
  )
}

export default App
