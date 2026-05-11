import React from 'react';
import './Offer.css';

function Offer() {
  return (
    <section className="offer-page">
      <h1 className="offer-heading">🍦 Buy 2 Get 1 Free! 🍦</h1>
      <p className="offer-subtitle">
        Enjoy our delicious ice creams with this amazing limited-time offer.
      </p>

      <div className="offer-images">
        <div className="offer-item">
          <img src='assets\Images\download (8)buy2.jpg'
            alt="Ice Cream Offer"
            className="offer-img"
          />
          <p>Buy any 2 ice creams and get 1 free!</p>
        </div>

        <div className="offer-item">
          <img
            src="assets/Images/bowl-removebg-preview.png"
            alt="Ice Cream Bowl"
            className="offer-img"
          />
          <p>Mix & Match any flavors.</p>
        </div>

        <div className="offer-item">
          <img
            src="assets/Images/sale-removebg-preview.png"
            alt="Sale Offer"
            className="offer-img"
          />
          <p>Hurry! Limited period only.</p>
        </div>
      </div>
    </section>
  );
}

export default Offer;
