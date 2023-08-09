import React from 'react'
import { Link ,NavLink} from 'react-router-dom';
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="RouteMateLogo" />
        <span>TaskMate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className = "link">Home</NavLink>
        <NavLink to="/products" className = "link">Products</NavLink>
        <NavLink to="/contact" className = "link"> Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header