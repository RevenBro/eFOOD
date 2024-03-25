import React from 'react'

import ServicesOffer from '../ServicesOffer/ServicesOffer'

import ServiceImg from '../../Assets/Images/Service-img.png'
import TimerIcon from '../../Assets/Images/timer-icon.svg'
import DeliveryIcon from '../../Assets/Images/delivery-icon.svg'
import RestarauntIcon from '../../Assets/Images/restaraunt-icon.svg'

function Services() {
  return (
    <section className='mb-[128px]'>
        <div className='container flex items-center justify-between'>
            <img src={ServiceImg} width={626} height={723}/>
            <div className='w-[449px]'>
                <h2 className='text-[#363853] mb-[30px] text-[36px] font-medium leading-10'><span className='text-[#FF7A50]'>Stay</span> At Wome, We Will Provide <span className='text-[#FF7A50]'>Good Food</span></h2>
                <p className='text-[#363853] text-[20px] font-normal leading-7 mb-[18px] opacity-90'>We provide tasty food and superfast delivery at your home.  Let’s use our services right now and get discounts of up to 50%.</p>

                <div className='flex flex-col gap-[25px] mb-[50px]'>
                    <ServicesOffer img={TimerIcon} width={34} height={34} text={"Fasted Delivery in 30 Minutes"}/>
                    <ServicesOffer img={DeliveryIcon} width={30} height={29} text={"300+ Delivery Men"}/>
                    <ServicesOffer img={RestarauntIcon} width={34} height={37} text={"500+ Restaurant & Cafe Shop"}/>
                </div>
                <button className='w-[176px] py-[15px] hover:bg-orange-600 bg-orange-400 rounded-[30px] inline-block text-white shadow-lg'>See More</button>
            </div>
        </div>
    </section>
  )
}

export default Services