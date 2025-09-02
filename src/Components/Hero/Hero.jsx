import React from 'react'
import './hero.css'
import dark from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
    
      <div className='hero-text'>
        <h1>we ensure better education for better world</h1>
        <p>our cutting adge curriculum is designated to empower the students with knowledge, skill and expreince nedeed to excel in the dynamic field of education</p>
        
        

        <button className='btn'> Explore more  <img src={dark}></img> </button>
        

      </div>

      
    </div>
  )
}

export default Hero
