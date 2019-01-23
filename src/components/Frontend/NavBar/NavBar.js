import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  return (
    <nav>
        <div className="nav">
            <div className="nav__logo">
                <a className="brand-logo">Game Collect</a>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/SignUp">Sign-Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul> 
        </div>    
    </nav>
  );
};

export default NavBar;
