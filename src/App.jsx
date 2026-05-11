import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About';

import Shopnow from './Pages/Shopnow';

import UserLogin from './Pages/UserLogin';
import Wishlists from './Pages/Wishlists';
import YourCart from './Pages/YourCart';




function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Header/> */}
       <Route path='/' element={<Home/>}/>
       <Route path='Home' element={<Home/>}/>
      <Route path='Shopnow' element={<Shopnow/>}/>
      <Route path='yourCart' element={<YourCart/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Wishlists' element={<Wishlists/>}/>
      <Route path='UserLogin' element={<UserLogin/>}/>
      
  
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
