import React from "react"
import Message from "./components/Message"
import "./App.css"

const text = "Добрый вечерочек"

function App() {
  return (
    <div className="app">
      <Message message={text} />
    </div>
  )
}

export default App
