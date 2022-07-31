import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className = 'hero'>
        <div className = 'container'>
            {/* Leftside */}

            <div className = 'left'>
                <p>Busy & Sell Crypto 24/7 using your retirement account</p>
                <h1>Invest in Cryptocurrency with your IRA</h1>
                <p>Buy, Sell, and store hundreds of Cryptocurrencies</p>
                <div className = 'input-container'>
                    <input type='email' placeholder = 'Enter your email'/>
                    <button className = 'btn' onClick = {() => alert('Coming soon...')}>Learn More</button>
                </div>
            </div>


            {/* Rightside */}
            <div className = 'right'>
              <div className = 'img-container'>
                <img src = {Crypto} alt = ''/>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero