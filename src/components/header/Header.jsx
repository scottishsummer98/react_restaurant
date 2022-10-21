import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="container_header">
      <Link to="/cardsandbooks" className="topbar_links">
        <h4>GIFT CARDS & BOOKS</h4>
      </Link>
      <Link to="/" className="topbar_links">
        <h1>KAMPSOAHUS</h1>
      </Link>
      <Link to="/reservations" className="topbar_links">
        <h4>RESERVATIONS</h4>
      </Link>
    </header>
  )
}

export default Header
