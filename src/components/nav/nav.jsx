import React from 'react';
import { NavLink } from "react-router-dom";
import "./nav.scss";

const Nav = ({ userobj }) => {
    return (
        <nav className="nav">
            <NavLink exact className="nav__nav" to="/" activeStyle={{
                color: "#1b9cfc"
            }}>Home</NavLink>
            <NavLink className="nav__nav" to="/profile" activeStyle={{
                color: "#1b9cfc"
            }}>Profile</NavLink>
        </nav>
    )
};

export default Nav;