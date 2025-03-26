import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Naresh's Portfolio</div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Navbar Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
