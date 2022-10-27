import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Topbar.css'

const Topbar = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
          aria-controls="main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                RESTAURANTS
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/restaurants#dhaka">
                    DHAKA
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/restaurants#ctg">
                    CHITTAGONG
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                MENU
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/menu#appetizers">
                    APPETIZERS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/menu#mains">
                    MAINS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/menu#desserts">
                    DESSERTS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/menu#beverages">
                    BEVERAGES
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link  dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                ABOUT
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/about#journey">
                    OUR JOURNEY
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about#food">
                    OUR FOOD
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/about#purpose">
                    OUR PURPOSE
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">
                NEWS
              </Link>
            </li>
            <li className="nav-item" style={{ width: '15rem' }}>
              <Link className="nav-link" to="/cardsandbooks">
                GIFTS CARDS & BOOKS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reservations">
                RESERVATIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/careers">
                CAREERS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Topbar
