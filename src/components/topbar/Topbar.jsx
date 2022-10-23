import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'

const Topbar = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
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
                    <Link className="dropdown-item" to="/restaurants">
                      DHAKA
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/restaurants">
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
                    <Link className="dropdown-item" to="/menu">
                      APPETIZERS
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu">
                      MAINS
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu">
                      DESSERTS
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu">
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
                    <Link className="dropdown-item" to="/about">
                      OUR JOURNEY
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about">
                      OUR FOOD
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about">
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
              <li className="nav-item">
                <Link className="nav-link" to="/press">
                  PRESS
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  PRIVATE DINING
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/privatedining">
                      DHAKA
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/privatedining">
                      CHITTAGONG
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/careers">
                  CAREERS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Topbar
