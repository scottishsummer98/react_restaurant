import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/logo.jpg'

const footer = () => {
  return (
    <footer>
      <div className="container_footer">
        <Link to="/menu" className="topbar_links">
          <div className="cols">
            <h4>LATEST NEWS</h4>
            <p>
              Introducing Our New Seafood Menu… To Dhaka and Chittagong Again
            </p>
          </div>
        </Link>
        <Link to="/" className="topbar_links">
          <div className="cols">
            <img src={logo} alt="logo" className="image_logo" />
          </div>
        </Link>
        <Link to="/careers" className="topbar_links">
          <div className="cols_brm">
            <h4>CAREERS</h4>
          </div>
        </Link>
      </div>
    </footer>
  )
}

export default footer
