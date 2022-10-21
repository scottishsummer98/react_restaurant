import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/logo.jpg'

const footer = () => {
  return (
    <footer>
      <div className="container_footer">
        <Link to="/menu" className="footer_links">
          <div className="cols">
            <h6>LATEST NEWS</h6>
            <p>
              Introducing Our New Seafood Menu… To Dhaka and Chittagong Again
            </p>
          </div>
        </Link>
        <Link to="/" className="footer_links">
          <div className="cols">
            <img src={logo} alt="logo" className="image_logo" />
          </div>
        </Link>
        <Link to="/careers" className="footer_links">
          <div className="cols_brm">
            <h6>CAREERS</h6>
          </div>
        </Link>
      </div>
    </footer>
  )
}

export default footer
