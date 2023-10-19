import React from 'react'
import './Aboutcontact.css';
import {Link} from 'react-router-dom';
import some from '../assets/some.jpg';
import good from '../assets/good.jpg';

const Aboutcontact = () => {
  return (
    <div className='aboutcontact'>
    <div className="aboutleft">
<h1>Who Am I</h1>
<p>I am a react front-end developer and create the responsive and secure website for my clients</p>
<Link to="/contact">
    <button className='btn'>CONTACT US</button></Link>
    </div>
    <div className="aboutright">
        <div className="image-container">
            <div className="image-stack top">
                <img src={good} alt="hello"/>
            </div>
            <div className="image-stack bottom">
                <img src={some} alt="hello"/>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Aboutcontact;
