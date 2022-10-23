import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import $ from 'jquery'
import Popper from 'popper.js'
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
import Restaurants from './components/pages/Restaurants'
import About from './components/pages/About'
import News from './components/pages/News'
import Press from './components/pages/Press'
import Contact from './components/pages/Contact'
import PrivateDining from './components/pages/PrivateDining'

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
        <Route
          path="/restaurants"
          element={
            <>
              <Restaurants />
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
          path="/press"
          element={
            <>
              <Press />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        ></Route>
        <Route
          path="/privatedining"
          element={
            <>
              <PrivateDining />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
