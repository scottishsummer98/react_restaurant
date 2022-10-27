import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="container_header">
      <Link to="/" className="header_links">
        <h2>
          <b>KAMPSOAHUS</b>
        </h2>
      </Link>
    </header>
  )
}

export default Header
