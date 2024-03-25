import React from 'react'

function ServicesOffer({img, width, height, text}) {
  return (
    <div className='flex items-center gap-[25px]'>
        <img src={img} width={width} height={height}/>
        <span className='text-[#363853] text-[24px] font-normal leading-6'>{text}</span>
    </div>
  )
}

export default ServicesOffer