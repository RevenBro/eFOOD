import React from 'react'

import HeroBg from "../../Assets/Images/hero-bg.png"

function Hero() {
  return (
    <section className='mb-[94px]'>
    <div className='container'>
      <div className='flex '>
        <div className='w-[530px] mt-[83px]'>
          <h1 className='hero-title'>Super Fast <span>Food Delivery</span> Service</h1>
          <p className='hero-text'>We provide super fast-delivery service. Let's use our services right now and get discounts of up to 50%</p>
        <div>
          <a className="header__link hero__link">Explore Food</a>
          <button className='hero-link2'>Download App</button>
        </div>
      </div>
      <img src={HeroBg}/>
      </div>
    </div>
  </section>
  )
}

export default Hero