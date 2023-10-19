import React from 'react'
import './PriceCard.css';
import {Link} from 'react-router-dom';

const PriceCard = () => {
  return (
    <div className='price-card'>
<div className="card-container">
    <div className="card">
        <h3>--Basic--</h3>
        <span className='bar'></span>
        <div className="btc">$100</div>
        <p>--3 Days--</p>
        <p>--3 Pages--</p>
        <p>Featured</p>
        <p>Responsive Design</p>
        <Link to="/contact" className='btn'>BUY NOW</Link>

    </div>
    <div className="card">
        <h3>--Premium--</h3>
        <span className='bar'></span>
        <div className="btc">$300</div>
        <p>--1 Month--</p>
        <p>--20 Pages--</p>
        <p>Featured</p>
        <p>Responsive Design</p>
        <Link to="/contact" className='btn'>BUY NOW</Link>

    </div>
    <div className="card">
        <h3>--Business--</h3>
        <span className='bar'></span>
        <div className="btc">$500</div>
        <p>--6 Months--</p>
        <p>--200 Pages--</p>
        <p>Featured</p>
        <p>Responsive Design</p>
        <Link to="/contact" className='btn'>BUY NOW</Link>

    </div>
</div>
    </div>
  );

}

export default PriceCard;
