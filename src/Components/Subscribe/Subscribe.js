import React from 'react'

import SendIcon from '../../Assets/Images/send-icon.svg'
import JustIcon from '../../Assets/Images/just-icon.svg'


function Subscribe() {
    return (
        <section className='pb-[90px]'>
            <div className='container'>
                <form className='relative rounded-[15px] bg-[#FF7F56] w-[90%] text-center mx-auto pt-[60px] px-[160px] pb-[90px] text-white' action={"https://echo.htmlacademy.ru"} method={"POST"}>
                    <img className='absolute right[40px]' src={JustIcon} width={17} height={16}/>
                    <h2 className='text-[40px] font-medium leading-10 mb-[12px]'>Subscribe to get the Latest Offer</h2>
                    <p className='text-[16px] opacity-80 font-normal mb-[30px] leading-7'>Get our daily updates by subscribing to our newspaper, please drop your email below</p>
                    <div className='flex relative'>
                        <input className='z-1 rounded-[70px] absolute left-[-55px] py-[24px] outline-none border-orange-400 text-black pl-[40px] w-[838px] mx-auto' type={"email"} autoComplete={"off"} name={"userName"} placeholder={"Enter your email addres"} required/>
                        <button className='z-10 right-[-45px] top-[5.5px] mt-[2px] absolute rounded-[70px] flex items-center justify-center gap-[10px] py-[15px] w-[191px] bg-[#FF7F56]' type={"submit"}>
                            <img src={SendIcon} width={15.6} height={15.6}/>
                            <span className='text-[20px] font-medium leading-7'>Subscribe</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
        )
    }
    
    export default Subscribe