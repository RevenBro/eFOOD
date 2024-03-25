import React, { Children } from 'react'

function ProductNavBtn({children, title}) {
  return (
    <button className='w-[210px] rounded-lg py-[14px] flex items-center gap-[8px] hover:text-white bg-slate-200 justify-center hover:bg-[#FF7A50]'>
        {children}
        <span className='text-[20px] font-medium leading-6'>{title}</span>
    </button>
  )
}

export default ProductNavBtn