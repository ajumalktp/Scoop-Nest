import React from 'react'
import './Card1.css'
import { Link } from 'react-router-dom'

function Card1() {
  return (
   <>
    <div className="icecream-wrapper">
  <h1 className="page-title">Our Ice Cream Collections</h1>
      <div className="card-container">
    
    <div className="icecream-card">
      <img src="assets\Images\Chocolate.jpg" alt="Coconut"/>
      <div className="label">Chocolate</div>
 
    </div>

    <div className="icecream-card">
      <img src="assets\Images\blue berry.jpg" alt="Chocolate"/>
      <div className="label">Blue Berry</div>
     
    </div>

    <div className="icecream-card">
      <img src="assets\Images\butter scotch.jpg" alt="Strawberry"/>
      <div className="label">Butter Scotch</div>
    
    </div>

    <div className="icecream-card">
      <img src="assets\Images\strawberry.jpg" alt="Corn"/>
      <div className="label">Strawberry</div>
     
    </div>

  <div className="icecream-card">
      <img src="assets\Images\pine app.jpg" alt="Corn"/>
      <div className="label">Pine Apple</div>
    </div>
    <div className="icecream-card">
      <img src="assets\Images\download (8)cheryyy.jpg" alt="Corn"/>
      <div className="label">Cherry</div>
    </div>
    <div className="icecream-card">
      <img src="assets\Images\download (8)oreoo.jpg" alt="Corn"/>
      <div className="label">Oreo</div>
    </div>

    <div className="icecream-card">
      <img src="assets\Images\mango.jpg" alt="Corn"/>
      <div className="label">Mango</div>
      
    </div>
      </div>
      <div className="more-btn-container"> 
          <Link to="/Shopnow">
            <button className='more-btn'>Show More</button>
          </Link>
        </div>
      
</div>


   </>
  )
}

export default Card1