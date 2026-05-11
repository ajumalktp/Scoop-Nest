import React from 'react';
import { Link } from 'react-router-dom';  // import Link here
import './Second.css';

function Second() {
  return (
    <section className="number1">

    <div className="overlay-content">
  <h1>
    <span className="line1">Scoop up happiness,</span>
    <br />
    <span className="line2">one flavour at a time.</span>
  </h1>
  
  <Link to="/shopnow">
    <button className="shop-btn">
      Shop Now
    </button>
  </Link>

        <div className="ice-wrapper">
          <img
            src="assets\Images\Screenshot_2025-08-05_175225-removebg-preview.png"
            alt="Ice cream cone"
            className="ice-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Second;
