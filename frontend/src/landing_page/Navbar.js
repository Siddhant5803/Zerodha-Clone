import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <nav 
        class="navbar navbar-expand-lg border-bottom" 
        style={{backgroundColor:"#FFF"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/">
            <img src="images\logo.svg" alt="logo" style={{width:"22%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link active" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link active" aria-current="page" to="/product">
                    Product
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link active" aria-current="page" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item active">
                  <a class="nav-link active" aria-current="page" href="/support">
                    Support
                  </a>
                </li>
              </ul>  
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
