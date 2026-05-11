import React, { useState } from 'react';
import './Header.css';
import {
  FaHeart,
  FaShoppingCart,
  FaHome,
  FaStore,
  FaInfoCircle,
  FaSignInAlt,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span role="img" aria-label="icecream">🍦</span>
        <div className="logo-text">
          <h3>Scoop Nest</h3>
        </div>
      </div>


      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <Link to="/Home"><FaHome /> Home</Link>
        <Link to="/Shopnow"><FaStore /> Shop</Link>
        <Link to="/YourCart"><FaShoppingCart /> Cart</Link>
        <Link to="/About"><FaInfoCircle /> About Us</Link>
        <Link to="/Wishlists"><FaHeart /> Wishlist</Link>
        <Link to="/UserLogin"><FaSignInAlt /> Login</Link>
      </div>

     
    </nav>
  );
}

export default Header;
