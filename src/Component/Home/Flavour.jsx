import React from 'react'
import './Flavour.css'

function Flavour() {
  return (
   <><div className="heading">
   <h1>🔔🍦 Our Signature Flavours</h1></div>
   <div className="icecream-cards">
  <div className="icecream-card1">
    <p className="subtitle">Natural Sweetness</p>
    <h2 className="flavor-name">Vanila</h2>
    <img src="assets\Images\download__1_-removebg-preview.png" alt="Vanila" className='img1'/>
    <h4>A timeless classic made with rich, creamy milk and real vanilla beans. Smooth, sweet, and naturally delightful — perfect on its own or paired with your favorite dessert.</h4>
  </div>

  <div className="icecream-card2">
    <p className="subtitle">Natural Sweetness</p>
    <h2 className="flavor-name">Matcha</h2>
    <img src="assets\Images\images-removebg-preview.png" alt="Matcha" className='img2'/>
    <h4>A refreshing blend of creamy sweetness and earthy matcha green tea. Smooth, delicate, and naturally rich in antioxidants — a perfect treat for green tea lovers.</h4>
  </div>

  <div className="icecream-card3">
    <p className="subtitle">Natural Sweetness</p>
    <h2 className="flavor-name">Blueberry</h2>
    <img src="assets\Images\blue_berry-removebg-preview.png" alt="Blueberry" className='img3'/>
    <h4>Bursting with the juicy flavor of real blueberries, this creamy delight is both sweet and slightly tangy — a refreshing twist on a fruity favorite.</h4>
  </div>
</div>
</>
  )
}

export default Flavour