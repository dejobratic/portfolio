import React from "react"
import { BrowserRouter } from "react-router-dom"

import { AppProvider } from "app/context/AppContext"

import Main from "app/Main"
import Header from "app/header/Header"
import Footer from "app/footer/Footer"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Header />
          <Main />
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App
