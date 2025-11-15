import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <h1 className="nav-logo">CakraLogy</h1>

        {/* Menu Icon */}
        <div className="nav-menu-icon" onClick={() => setOpen(!open)}>
          {open ? "×" : "☰"}
        </div>

        {/* Nav Links */}
        <ul className={open ? "nav-links active" : "nav-links"}>
          <li><a href="#Hero" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#About" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#Edu" onClick={() => setOpen(false)}>Edukasi</a></li>
          <li><a href="#Testimoni" onClick={() => setOpen(false)}>Testimoni</a></li>
          <li><a href="#Contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
