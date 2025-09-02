import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";
import menu_icon from "../assets/menu-icon.png";

function Navbar() {
  const [sticky, setSticky] = useState(false);
   const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const toggleMenu= () => {
   mobileMenu ? setMobileMenu(false) :  setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu?'':'hide_moble_menu'}>
        <li className="nav-item">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>

        <li className="nav-item">
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>

        <li className="nav-item">
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>

        <li className="nav-item">
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>

        <li className="nav-item">
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            <button type="button" className="btn">
              Contact us
            </button>
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu_icon" onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
