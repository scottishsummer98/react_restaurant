import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Topbar from './components/topbar/Topbar'
import Footer from './components/footer/Footer'
import Home from './components/pages/Home'
import CardsAndBooks from './components/pages/CardsAndBooks'
import Reservations from './components/pages/Reservations'
import Menu from './components/pages/Menu'
import Career from './components/pages/Career'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Topbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/cardsandbooks"
          element={
            <>
              <CardsAndBooks />
            </>
          }
        ></Route>
        <Route
          path="/reservations"
          element={
            <>
              <Reservations />
            </>
          }
        ></Route>
        <Route
          path="/careers"
          element={
            <>
              <Career />
            </>
          }
        ></Route>
        <Route
          path="/menu"
          element={
            <>
              <Menu />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
