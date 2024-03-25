import React from 'react'

import SiteLogo from '../../Assets/Images/logo.svg'
import LocationIcon from '../../Assets/Images/location-icon.svg'
import PhoneIcon from '../../Assets/Images/phone-icon.svg'
import EmailIcon from '../../Assets/Images/email-icon.svg'
import FacebookIcon from '../../Assets/Images/facebook-icon.svg'
import TwtIcon from '../../Assets/Images/x-icon.svg'
import InstagramIcon from '../../Assets/Images/instagram-icon.svg'
import PinterestIcon from '../../Assets/Images/pinterest-icon.svg'

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='mb-[25px] flex items-center justify-between'>
          <ul className='flex flex-col gap-[15px] text-[16px] font-normal leading-7'>
            <li>
              <img src={SiteLogo} width={106} height={38} alt={"Site Logo"}/>
            </li>
            <li className='flex items-center gap-[7px]'>
              <img src={LocationIcon} width={24} height={24} alt={"Location icon"}/>
              <span>Dhaka, Bangladesh</span>
            </li>
            <li className='flex items-center gap-[7px]'>
              <img src={PhoneIcon} width={24} height={24} alt={"Phone icon"}/>
              <a className='hover:text-orange-600' href={"tel:0943833399"}>0943833399</a>
            </li>
            <li className='flex items-center gap-[7px]'>
              <img src={EmailIcon} width={24} height={24} alt={"Email icon"}/>
              <a className='hover:text-orange-600'  href={"mailto:support@efood.com"}>support@efood.com</a>
            </li>
            <li>
              <div className='flex items-center gap-[13px]'>
                <a target={"blank"} href={"https://facebook.com"}>
                  <img src={FacebookIcon} width={39} height={39} alt={"Facebook link"}/>
                </a>
                <a target={"blank"} href={"https://x.com"}>
                  <img src={TwtIcon} width={39} height={39} alt={"X link"}/>
                </a>
                <a target={"blank"} href={"https://instagram.com"}>
                  <img src={InstagramIcon} width={39} height={39} alt={"Instagram link"}/>
                </a>
                <a target={"blank"} href={"https://pinterest.com"}>
                  <img src={PinterestIcon} width={39} height={39} alt={"Pinterest link"}/>
                </a>
              </div>
            </li>
          </ul>

          <ul className='flex flex-col gap-[12px]'>
            <li>
              <strong>Service</strong>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>How it works</a>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>Home delivery</a>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>Products</a>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>Menu</a>
            </li>
          </ul>

          <ul className='flex flex-col gap-[12px]'>
            <li>
              <strong>Supports</strong>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>Help center</a>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>Feedback</a>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>Contact us</a>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>Terms conditins</a>
            </li>
          </ul>

          <ul className='flex flex-col gap-[12px]'>
            <li>
              <strong>Resources</strong>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>Download app</a>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>Blog</a>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>What's new</a>
            </li>
            <li>
              <a className='hover:text-orange-600'  href={"#"}>Sitemap</a>
            </li>
          </ul>
        </div>

        <hr></hr>

        <div className='pt-[26px] pb-[36px] flex items-center justify-between'>
          <p>© 2021 EFood - All rights reserved.</p>
          <div className=''>
            <ul className='flex items-center gap-[50px]'>
              <li>
                <a className='hover:text-orange-600'  href={"#"}>Privacy</a>
              </li>
              <li>
                <a className='hover:text-orange-600'  href={"#"}>Security</a>
              </li>
              <li>
                <a className='hover:text-orange-600'  href={"#"}>Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer