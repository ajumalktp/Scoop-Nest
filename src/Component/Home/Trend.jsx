import React from 'react';
import './Trend.css';
import { Link } from 'react-router-dom';

const icecreams = [
    {
  name: "Galaxy Swirl",
  description: "Rich matcha green tea ice cream",
  btnColor: "#6e51df",  // ✅ FIXED HEX COLOR
  bgColor: "#e3c2f1ff",
  image: "Galaxy-Ice-Cream-2.webp",
  titleColor: "#1f1f1f"
},

  {
    name: "Matcha Blast",
    description: "Rich matcha green tea ice cream",
    btnColor: "#2e7d32",
    bgColor: "#d2f5d0",
    image: "Green-Tea-Ice-Cream-1-of-1.webp",
    titleColor: "#1f4f1f"
  },
  
  {
    name: "Mango Tango",
    description: "Sweet and tangy mango delight",
    btnColor: "#FFA500",
    bgColor: "#ffe5b4",
    image: "download (8)mango tango.jpg",
    titleColor: "#ff9100"
  }
];

function Trend() {
  return (
    <div className="trending-section">
      <h2 className="trending-title">Trending Now</h2>
      <div className="trending-cards">
        {icecreams.map((item, index) => (
          <div className="card" key={index} style={{ backgroundColor: item.bgColor }}>
           <div className="image-wrapper" style={{ backgroundColor: item.bgColor }}>
    <img src={`assets/Images/${item.image}`} alt={item.name} />
    <div className="heart">♡</div>
  </div>
  <div className="card-content">
    <h3 style={{ color: item.titleColor }}>{item.name}</h3>
    <p>{item.description}</p>
    <Link to="/Shopnow">
    <button style={{ borderColor: item.btnColor, color: item.btnColor }}>
      Try Now
    </button>
    </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trend;

