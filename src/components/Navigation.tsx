import React from "react";
import { Link } from "react-router-dom";
import "../pages/navbar.css";
import logo from "../../public/assets/images/720p White.png";
import "../pages/logo.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <ul>
            <img src={logo} alt="Logo" className="navbar-logo" />{" "}
            {/* Logo image */}
            <li className="home-link">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/streams">Streams</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
