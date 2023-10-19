import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setclick] = useState(false);
    const handleclick = () => setclick(!click);
    const [color, setcolor] = useState(false);
    const changecolor = () => {
        if (window.scrollY >= 100) {
            setcolor(true);

        }
        else {
            setcolor(false);
        }
    };
    window.addEventListener("scroll", changecolor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>
            <div className='hamburger' onClick={handleclick}>
                {click ? (<FaTimes size={20} style={{ color: '#FFF' }} />) : (<FaBars size={20} style={{ color: '#FFF' }} />)}

            </div>

        </div>
    );
}

export default Navbar;
