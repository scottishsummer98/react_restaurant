import React from 'react'
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
                    <a className="dropdown-item" href="#">
                      DHAKA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CHITTAGONG
                    </a>
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
                    <a className="dropdown-item" href="#">
                      APPETIZERS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MAINS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      DESSERTS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      BEVERAGES
                    </a>
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
                    <a className="dropdown-item" href="#">
                      OUR JOURNEY
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      OUR FOOD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      OUR PURPOSE
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  NEWS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PRESS
                </a>
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
                    <a className="dropdown-item" href="#">
                      DHAKA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CHITTAGONG
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CAREERS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Topbar
