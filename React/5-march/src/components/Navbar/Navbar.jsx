import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" >Home</Link>
            <Link to="/contact" >Contact</Link>
            <Link to="/career" >Career</Link>
            <Link to="/community" >Community</Link>
        </div>
    )
}

export default Navbar;