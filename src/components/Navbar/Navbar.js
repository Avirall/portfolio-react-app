import React from 'react';
import logo from "../../assets/logo.png";
import "./Navbar.css";
const navbar = () => {
  return (
    <nav>
        <div className="nav-logo">
            <img src={logo} alt="logo"></img>
        </div>
        <div className='nav-links'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Portfolio</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default navbar