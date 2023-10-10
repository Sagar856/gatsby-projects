import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { FaAlignJustify } from "@react-icons/all-files/fa/FaAlignJustify";
import "../assets/styles/main.css";

const Navbar = () => {
  const[show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="just recipes logo" />
          </Link>
          <button className="nav-btn" onClick={()=> setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link to="/" 
            className="nav-link" 
            activeClassName="active-link"
            onClick={()=> setShow(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={()=> setShow(false)}
          >
            recipes
          </Link>
          <Link to="/tags"
            className="nav-link" 
            activeClassName="active-link"
            onClick={()=> setShow(false)}
          >
            tags
          </Link>
          <Link to="/about" 
            className="nav-link" 
            activeClassName="active-link"
            onClick={()=> setShow(false)}
          >
            about
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            activeClassName="active-link"
            onClick={()=> setShow(false)}
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
