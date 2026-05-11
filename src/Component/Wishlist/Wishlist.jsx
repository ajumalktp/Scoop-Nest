// src/Component/Wishlist/Wishlist.jsx
import React, { useEffect, useState } from "react";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Fetch wishlist items from db.json
  useEffect(() => {
    fetch("http://localhost:3001/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlist(data))
      .catch((err) => console.error("Error fetching wishlist:", err));
  }, []);

  const removeFromWishlist = async (id) => {
    try {
      await fetch(`http://localhost:3001/wishlist/${id}`, { method: "DELETE" });
      setWishlist(wishlist.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  return (
    <div className="wishlist-container">
      <h2>❤️ Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty-msg">Your wishlist is empty 🛒</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.name} className="wishlist-img" />
              <h3>{item.name}</h3>
              <p className="company">{item.company}</p>
              <p className="price">₹{item.price}</p>
              <button
                className="remove-btn"
                onClick={() => removeFromWishlist(item.id)}

              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
