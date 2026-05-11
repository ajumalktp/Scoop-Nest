import React from 'react';
import './FeatureCards.css';
import {
  FaTruck,
  FaGift,
  FaIceCream,
  FaShoppingCart,
  FaRegSmile,
  FaClock,
  FaLeaf,
  FaMobileAlt,
} from 'react-icons/fa';

const features = [
  { icon: <FaTruck />, title: "Fast Delivery" },
  { icon: <FaGift />, title: "Surprise Gifts" },
  { icon: <FaIceCream />, title: "Premium Flavors" },
  { icon: <FaShoppingCart />, title: "Easy Ordering" },
  { icon: <FaRegSmile />, title: "Customer Satisfaction" },
  { icon: <FaClock />, title: "24/7 Service" },
  { icon: <FaLeaf />, title: "Natural Ingredients" }, // NEW
  { icon: <FaMobileAlt />, title: "Mobile Friendly" }, // NEW
];

function FeatureCards() {
  return (
    <div className="feature-section">
      <h2>Our Features</h2>
      <div className="cards-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-box">{feature.icon}</div>
            <div className="title">{feature.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCards;
