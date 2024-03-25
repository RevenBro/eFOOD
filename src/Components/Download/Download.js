import React from 'react'

import AppStore from '../../Assets/Images/App-store.svg'
import GooglePlay from '../../Assets/Images/Google-play.svg'
import DownloadImg from '../../Assets/Images/Download-img.png'

function Download() {
  return (
    <section className='pt-[135px] pb-[165px]'>
        <div className='container flex items-center justify-between'>
            <div className='w-[538px]'>
                <h2 className='text-[36px] text-[#363853] mb-[30px] font-medium leading-10'>Download  Our <span className='text-[#FF7A50]'>Mobile App</span></h2>
                <p className='text-[#363853] mb-[30px] text-[20px] font-normal leading-7'>It's all at your fingertips -- the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount</p>
                <div className='flex items-center gap-[35px]'>
                    <a target='blank' href='https://apple.com'>
                        <img src={AppStore} width={120} height={40}/>
                    </a>
                    <a target='blank' href='https://play.google.com'>
                        <img src={GooglePlay} width={135} height={40}/>
                    </a>
                </div>
            </div>
            <img src={DownloadImg} width={616} height={480}/>
        </div>
    </section>
  )
}

export default Download