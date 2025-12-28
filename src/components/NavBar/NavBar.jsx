import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li>
                    <a href="#" className="navbar__list-item">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="navbar__list-item">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="navbar__list-item">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#" className="navbar__list-item">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
