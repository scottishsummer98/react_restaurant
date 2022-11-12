import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import $ from 'jquery'
import Popper from 'popper.js'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './components/topbar/Topbar'
import Footer from './components/footer/Footer'
import Home from './components/pages/Home'
import CardsAndBooks from './components/pages/CardsAndBooks'
import Reservations from './components/pages/Reservations'
import Menu from './components/pages/Menu'
import Career from './components/pages/Career'
import Restaurants from './components/pages/Restaurants'
import About from './components/pages/About'
import News from './components/pages/News'

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <hr />
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
          path="/restaurants"
          element={
            <>
              <Restaurants />
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
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        ></Route>
        <Route
          path="/news"
          element={
            <>
              <News />
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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
