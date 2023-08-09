import React from 'react'
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        <img src={logo} alt="RouteMateLogo" />
      </a>
      <nav className="navigation"></nav>
    </header>
  );
}

export default Header