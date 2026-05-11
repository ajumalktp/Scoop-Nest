import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Fetch cart items from JSON Server
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get('http://localhost:3001/cart');
        setCartItems(res.data);
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      }
    };
    fetchCart();
  }, []);

  // Remove item
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  // Update quantity
  const handleQuantityChange = async (id, amount) => {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;
    const newQty = Math.max(1, item.quantity + amount);
    try {
      // Patch only quantity instead of replacing entire object
      await axios.patch(`http://localhost:3001/cart/${id}`, { quantity: newQty });
      setCartItems(prev =>
        prev.map(i => (i.id === id ? { ...i, quantity: newQty } : i))
      );
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🍦</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div className="quantity">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>
                  <p>Subtotal: ₹{item.price * item.quantity}</p>
                  <button className="remove" onClick={() => handleRemove(item.id)}>
                    <FaTrashAlt /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ₹{totalAmount}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
