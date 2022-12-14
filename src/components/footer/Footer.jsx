import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Footer.css'
import logo from '../../assets/logo.jpg'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaCopyright,
} from 'react-icons/fa'
import { VscDebugBreakpointLog } from 'react-icons/vsc'

const footer = () => {
  return (
    <footer>
      <div className="container_footer">
        <Link to="/news" className="footer_links">
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
        <div
          className="row"
          style={{ alignItems: 'center', paddingTop: '1rem' }}
        >
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <div className="footer_social_links">
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://pinterest.com" target="_blank">
                <FaPinterestP />
              </a>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div className="footer_nav_links">
              <Link to="/about#journey" className="footer_nav_links">
                JOURNEY
              </Link>
              <VscDebugBreakpointLog />
              <Link to="/news" className="footer_nav_links">
                NEWS
              </Link>
              <VscDebugBreakpointLog />
              <Link to="/about#purpose" className="footer_nav_links">
                PURPOSE
              </Link>
              <VscDebugBreakpointLog />
              <Link to="/restaurants" className="footer_nav_links">
                RESTAURANTS
              </Link>
              <VscDebugBreakpointLog />
              <Link to="/reservations" className="footer_nav_links">
                RESERVATIONS
              </Link>
              <VscDebugBreakpointLog />
              <a
                href="https://www.github.com/scottishsummer98"
                className="footer_nav_links"
              >
                SCOTTISHSUMMER
              </a>
              <FaCopyright />
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
