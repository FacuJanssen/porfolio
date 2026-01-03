import React from "react";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list-item">
                    <a href="#" className="navbar__item-link">
                        Home
                    </a>
                </li>
                <li className="navbar__list-item">
                    <a href="#" className="navbar__item-link">
                        About
                    </a>
                </li>
                <li className="navbar__list-item">
                    <a href="#" className="navbar__item-link">
                        Projects
                    </a>
                </li>
                <li className="navbar__list-item">
                    <a href="#" className="navbar__item-link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
