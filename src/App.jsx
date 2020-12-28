import React from "react"
import { BrowserRouter } from "react-router-dom"

import { AppProvider } from "app/context/AppContext"

import Header from "app/header/Header"

const App = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
