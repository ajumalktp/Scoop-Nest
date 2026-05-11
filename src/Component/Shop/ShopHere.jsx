import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShopHere.css';

const ShopHere = () => {
  const [flavorFilter, setFlavorFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlist, setWishlist] = useState(() => {
    // Load wishlist from sessionStorage when component mounts
    const saved = sessionStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save wishlist to sessionStorage when it changes
  useEffect(() => {
    sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Ice cream data
  const iceCreamData = [
    { id: 1, flavor: 'Vanilla', company: 'CoolCreams', price: 60, image: 'assets/Images/images (4) vanila.jpg' },
    { id: 2, flavor: 'Chocolate', company: 'FrostBite', price: 110, image: 'assets/Images/download (7).jpg' },
    { id: 3, flavor: 'Strawberry', company: 'BerryDelight', price: 45, image: 'assets/Images/download (6).jpg' },
    { id: 4, flavor: 'Mango', company: 'FruitBlast', price: 70, image: 'assets/Images/download (7) mangoo.jpg' },
    { id: 5, flavor: 'Belgium Chocolate', company: 'Choco crush', price: 120, image: 'assets/Images/belgium chooooooo.jpg' },
    { id: 6, flavor: 'Avcado', company: 'FruitBlast', price: 90, image: 'assets/Images/avacadoooooooo.jpeg' },
    { id: 7, flavor: 'Blue Berry', company: 'Berry Blast', price: 70, image: 'assets/Images/blue berry.jpg' },
    { id: 8, flavor: 'Butter Scotch', company: 'Creamy Milk', price: 80, image: 'assets/Images/butter scotch.jpg' },
    { id: 9, flavor: 'Black Berry', company: 'Berry Blast', price: 140, image: 'assets/Images/black berry.jpg' },
    { id: 10, flavor: 'Choco-Chip', company: 'FrostBite', price: 70, image: 'assets/Images/choco chip.jpg' },
    { id: 11, flavor: 'Coconut', company: 'FruitBlast', price: 100, image: 'assets/Images/coconut.jpg' },
    { id: 12, flavor: 'Black Current', company: 'FruitBlast', price: 60, image: 'assets/Images/download (2).jpg' },
    { id: 13, flavor: 'Coffe', company: 'CoolCreams', price: 80, image: 'assets/Images/coffe.jpg' },
    { id: 14, flavor: 'Grape', company: 'FruitBlast', price: 70, image: 'assets/Images/grape.jpg' },
    { id: 15, flavor: 'Hazelnut', company: 'CoolCreams', price: 70, image: 'assets/Images/hazelnut.jpg' },
    { id: 16, flavor: 'Jack Fruit', company: 'FruitBlast', price: 50, image: 'assets/Images/jack fruit.jpg' },
    { id: 17, flavor: 'Mint', company: 'FruitBlast', price: 70, image: 'assets/Images/mint.jpg' },
    { id: 18, flavor: 'Orange', company: 'FruitBlast', price: 80, image: 'assets/Images/orange.jpg' },
    { id: 19, flavor: 'Red Welvet', company: 'CoolCreams', price: 130, image: 'assets/Images/red velvet.jpg' },
    { id: 20, flavor: 'Passion Fruit', company: 'FruitBlast', price: 70, image: 'assets/Images/passion-fruit-.webp' },
    { id: 21, flavor: 'Pista', company: 'FrostBite', price: 50, image: 'assets/Images/pista.jpg' },
    { id: 22, flavor: 'Peach', company: 'FruitBlast', price: 90, image: 'assets/Images/peach.jpg' },
    { id: 23, flavor: 'WaterMelon', company: 'FruitBlast', price: 70, image: 'assets/Images/download (8)watereeeee.jpg' },
    { id: 24, flavor: 'Fig', company: 'Berry Blast', price: 130, image: 'assets/Images/download (8)fig.jpg' },
    { id: 25, flavor: 'Matcha', company: 'CoolCreams', price: 100, image: 'assets/Images/download (8)matchaaaa.jpg' },
    { id: 26, flavor: 'Saffron', company: 'CoolCreams', price: 150, image: 'assets/Images/download (8) saffrone.jpg' },
    { id: 27, flavor: 'Rainbow', company: 'BerryDelight', price: 120, image: 'assets/Images/download (8)raaaaaaaa.jpg' },
    { id: 28, flavor: 'Spanish deight', company: 'CoolCreams', price: 120, image: 'assets/Images/spanish delight.jpg' },
  ];

  // ✅ Filtering with search + filters
  const filteredIceCreams = iceCreamData.filter(item => {
    const matchSearch =
      searchTerm === '' ||
      item.flavor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchFlavor = flavorFilter === 'all' || item.flavor.toLowerCase().includes(flavorFilter);
    const matchPrice =
      priceFilter === 'all' ||
      (priceFilter === 'low' && item.price < 50) ||
      (priceFilter === 'mid' && item.price >= 50 && item.price <= 100) ||
      (priceFilter === 'high' && item.price > 100);

    return matchSearch && matchFlavor && matchPrice;
  });

  // ✅ Add to Cart
  const addToCart = async (item) => {
    try {
      const cartItem = {
        name: item.flavor,
        description: item.company,
        price: item.price,
        quantity: 1,
        image: item.image
      };
      await axios.post('http://localhost:3001/cart', cartItem);
      alert(`${item.flavor} added to cart!`);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      alert('Failed to add to cart');
    }
  };

  // ✅ Toggle Wishlist
  const toggleWishlist = async (item) => {
    const exists = wishlist.some(w => w.id === item.id);

    if (exists) {
      // Remove from wishlist
      const updated = wishlist.filter(w => w.id !== item.id);
      setWishlist(updated);
      alert(`${item.flavor} removed from wishlist 🤍`);
    } else {
      // Add to wishlist (both local + API)
      setWishlist([...wishlist, item]);
      try {
        await fetch("http://localhost:3001/wishlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        });
      } catch (err) {
        console.error("Error adding to wishlist:", err);
      }
      alert(`${item.flavor} added to wishlist ❤️`);
    }
  };

  return (
    <div className="shop-container">
      <h1>🍦 Ice Cream Shop</h1>

      {/* Filters */}
      <div className="filters">
        <div className="search-bar">🔎
          <input
            type="text"
            placeholder="Search by flavor or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select onChange={(e) => setFlavorFilter(e.target.value.toLowerCase())}>
          <option value="all">All Flavours</option>
          {iceCreamData.map((ice) => (
            <option key={ice.id} value={ice.flavor.toLowerCase()}>
              {ice.flavor}
            </option>
          ))}
        </select>

        <select onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="all">All Prices</option>
          <option value="low">Below ₹50</option>
          <option value="mid">₹50 - ₹100</option>
          <option value="high">Above ₹100</option>
        </select>
      </div>

      {/* Cards */}
      <div className="card-grid">
        {filteredIceCreams.map((item) => (
          <div key={item.id} className="icecream-card">
            <img src={item.image} alt={item.flavor} />
            <h3>{item.flavor}</h3>
            <p className="company">{item.company}</p>
            <p className="price">₹{item.price}</p>
            <div className="btn-group">
              <button className="cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
              <button className="wishlists-btn" onClick={() => toggleWishlist(item)}>
                {wishlist.some(w => w.id === item.id) ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        ))}
        {filteredIceCreams.length === 0 && <p className="no-results">No ice creams found 😢</p>}
      </div>
    </div>
  );
};

export default ShopHere;
