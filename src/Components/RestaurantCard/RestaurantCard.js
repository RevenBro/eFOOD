import React from 'react'

import GoIcon from '../../Assets/Images/go-icon.svg'
import Timer from '../../Assets/Images/timer.svg'


function RestaurantCard({CardImg, title, time}) {
  return (
    <div className='restaurant-card flex flex-col bg-slate-100 w-[361px] mb-[30px]'>
        <img src={CardImg} width={361} height={299}/>
        <div className='p-[22px]'>
        <h3 className='mb-[14px] text-[#363853] text-[24px] font-normal leading-7'>{title}</h3>
            <div className='flex items-center gap-[20px]'>
                <img src={Timer}/>
                <time>{time}</time>
                <button className='restaurant-btn'>
                    <img className='mx-auto' src={GoIcon} width={14} height={12}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCard