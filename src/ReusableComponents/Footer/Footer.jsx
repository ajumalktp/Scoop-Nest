import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section about">
          <h3>Scoopsy</h3>
          <p>Your favorite ice cream, delivered with love 🍦</p>
          <div className="contact-info">
            <p><FaMapMarkerAlt className="icon" /> 123 Creamy St, Dessert City, India</p>
            <p><FaPhoneAlt className="icon" /> +91 98765 43210</p>
            <p><FaEnvelope className="icon" /> support@scoopsy.com</p>
          </div>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shopnow">Shop Now</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/YourCart">Cart</Link></li>
            {/* <li><Link to="/privacy">Privacy Policy</Link></li> */}
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Scoopsy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
