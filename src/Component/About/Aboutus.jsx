import React from 'react';
import './Aboutus.css';

function Aboutus() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>
        <p className="intro">
          Welcome to <span>Yummy Ice Cream</span> – where every scoop tells a story!
        </p>

        <p>
          We believe in serving happiness with every flavor. Our ice creams are made with
          100% natural ingredients, fresh milk, and a whole lot of love.
        </p>

        <p>
          From timeless vanilla to exotic berry blends, our collection is crafted to
          delight every taste bud. Whether you're young or young-at-heart, there's always
          something sweet waiting for you here.
        </p>

        <h3>Our Mission</h3>
        <p>
          To spread smiles through irresistible, high-quality ice cream that's both fun
          and flavorful.
        </p>
      </div>

      <div className="about-image">
        <img
          src="assets\Images\assortment-of-colorful-ice-cream-scoops-in-waffle-cones-with-fresh-fruits-on-a-transparent-background-png-removebg-preview.png"
          alt="Ice Cream Cone"
        />
      </div>
    </div>
  );
}

export default Aboutus;
