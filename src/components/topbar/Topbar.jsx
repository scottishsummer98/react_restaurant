import React from 'react'
import './Topbar.css'

const Topbar = () => {
  return (
    <section>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link  dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  RESTAURANTS
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      DHAKA
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CHITTAGONG
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link  dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  MENU
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      APPETIZERS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      MAINS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      DESSERTS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      BEVERAGES
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link  dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  ABOUT
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      OUR JOURNEY
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      OUR FOOD
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      OUR PURPOSE
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  NEWS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  PRESS
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link  dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  PRIVATE DINING
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      DHAKA
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      CHITTAGONG
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
