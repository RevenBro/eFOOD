import React from 'react'

import Star from '../../Assets/Images/Star.svg'

function ProductCard({img, title, price}) {
  return (
    <li className='w-[208px] rounded-[12px] pb-[12px] bg-slate-200 flex items-center flex-col justify-between'>
        <img src={img} alt={"Burger"} width={144} height={144}/>
        <img className='mb-[20px]' src={Star} width={120} height={19}/>
        <h4 className='text-[#363853] text-[15px] font-normal mb-[9px]'>{title}</h4>
        <strong className='text-[#363853] text-[15px]'>{price}</strong>
        <button className='rounded-[2px] w-[106px] py-[7px] bg-orange-400 hover:bg-orange-600 text-white mt-[10px] text-[15px] font-normal leading-4'>Add to Card</button>
    </li>
  )
}

export default ProductCard