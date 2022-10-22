import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="container_header">
      <Link to="/cardsandbooks" className="header_links">
        <h5>GIFT CARDS & BOOKS</h5>
      </Link>
      <Link to="/" className="header_links">
        <h2>
          <b>KAMPSOAHUS</b>
        </h2>
      </Link>
      <Link to="/reservations" className="header_links">
        <h5>RESERVATIONS</h5>
      </Link>
    </header>
  )
}

export default Header
