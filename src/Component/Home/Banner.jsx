import React from 'react';
import { Link } from 'react-router-dom';  // import Link
import './Banner.css';

function Banner() {
  return (
    <div className="promo-banner">
      <div className="promo-left">
        <h4 className="promo-tagline">NATURAL INGREDIENTS</h4>
        <h1 className="promo-title">YUMMY</h1>
        <p className="promo-subtext">BEST FLAVOURS COLLECTION</p>
      </div>

      <div className="promo-center">
        <img
          src="assets\Images\07f39cc4edda2cc73c74a3dfe49214ffgirleeey-removebg-preview.png"
          alt="Girl with Ice Cream"
        />
      </div>

      <div className="promo-right">
        <h2>
          Hot Deal ! Sale Up To <span>20% Off</span>
        </h2>
        <p className="deal-expired">Expired</p>
        <Link to="/shopnow">
          <button className="promo-button">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
