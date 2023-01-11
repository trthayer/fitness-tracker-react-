import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="navbar">
            <header className="navbar-container">
                <div className="navabar-title">Fitness Tracker</div>
                <nav className="nav-links">
                    <ul>
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/routines">Routines</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/myroutines">My Routines</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/activities">Activites</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}




export default Navbar;