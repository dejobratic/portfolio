import React from "react"
import { BrowserRouter } from "react-router-dom"

import { AppProvider } from "app/context/AppContext"

import Main from "app/Main"
import Header from "app/header/Header"
import Footer from "app/footer/Footer"

const App = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
