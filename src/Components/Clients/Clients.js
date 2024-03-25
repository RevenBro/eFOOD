import React from 'react'

import ClientImg from '../../Assets/Images/Client-img.png'
import TextRamc from '../../Assets/Images/text-ramc.svg'
import TextRamc2 from '../../Assets/Images/text-ramc2.svg'
import LeftIcon from '../../Assets/Images/left-icon.svg'
import RightIcon from '../../Assets/Images/right-icon.svg'

function Clients() {
  return (
    <section>
        <div className='container'>
            <h2 className='text-[36px] text-center font-medium leading-10 mb-[67px] text-[#363853]'>What Our Client Are <span className='text-[#FF7A50]'>Saying</span></h2>
            <div className='flex items-center justify-between'>
                <img src={ClientImg} width={433} height={519}/>
                <div>
                    <div className='mb-[74px] relative w-[573px]'>
                        <img className='absolute top-[-15px] left-[-45px]' src={TextRamc} width={32} height={76}/>
                        <p className='text-[#363853] font-normal text-[20px] leading-10 tracking-[0.5px]'>EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery;</p>
                        <img className='absolute bottom-[-15px] right-[-18px]' src={TextRamc2} width={32} height={76}/>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-orange-500 text-[20px] font-medium leading-6 mb-[16px]'>Anglina Jole</h3>
                            <p className='text-[#AAAAAA] text-[14px] font-normal leading-4'>Food lover</p>
                        </div>
                        <div className='flex items-center gap-[40px]'>
                            <img className='cursor-pointer' src={LeftIcon} width={32} height={32}/>
                            <img className='cursor-pointer' src={RightIcon} width={32} height={32}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clients