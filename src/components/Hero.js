import React from 'react'
import './Hero.css';
import portimage from '../assets/pre.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-image' src={portimage} alt="img" />
            </div>
            <div className='content'>
                <p>HI,I AM A FREELANCER</p>
                <h1>REACT DEVELOPER</h1>
                <div>
                    <Link to="/projects" className='btn'>projects</Link>
                    <Link to="/contact" className='btn btn-light'>contact</Link>
                </div>
            </div>

        </div>
    );
}

export default Hero;
