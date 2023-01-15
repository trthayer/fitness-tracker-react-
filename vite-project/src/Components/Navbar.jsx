import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const token = localStorage.getItem('token');

    return (
        <div className="navbar">
            <header className="navbar-container">
                <h1 className="navbar-title">Fitness Tracker</h1>
                <nav className="nav-links">
                    <ul>
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/routines">Routines</Link>
                        </li>
                        {token ?
                        <li className="nav-item">
                            <Link to="/myroutines">My Routines</Link>
                        </li>
                        : null}
                        <li className="nav-item">
                            <Link to="/activities">Activites</Link>
                        </li>
                        {!token ?
                        <li className="nav-item">
                            <Link to="/signin">Login</Link>
                        </li>
                        : null}
                        {!token ?
                        <li className="nav-item">
                            <Link to="/register">SignUp</Link>
                        </li>
                        : null}
                        {token ?
                        <li>
                            <button type="submit" onClick={(e) => {
                                e.preventDefault()
                                localStorage.clear()
                            }}>Log Out</button>
                        </li>
                        : null}
                    </ul>
                </nav>
            </header>
        </div>
    )
}




export default Navbar;