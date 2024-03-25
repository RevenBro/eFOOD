import React from 'react'

import NavLink from "../../Components/Navlink/Navlink"

import SiteLogo from "../../Assets/Images/logo.svg"
import SearchIcon from "../../Assets/Images/Search.svg"
import BasketIcon from "../../Assets/Images/basket-icon.svg"


function header() {
  return (
    <header className='pt-[50px] pb-[125px]'>
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        <a href='/'>
          <img src={SiteLogo} alt='Site logo' width={106} height={38}></img>
        </a>
        <div className='flex items-center gap-[60px]'>
          <ul className='flex items-center gap-[50px]'>
            <NavLink title={"Home"}/>
            <NavLink title={"Service"}/>
            <NavLink title={"Top cities"}/>
            <NavLink title={"Contract"}/>
          </ul>
          <div className='flex items-center gap-[50px]'>
            <button>
              <img src={SearchIcon} alt='Search icon' width={24} height={24}/>
            </button>
            <button>
              <img src={BasketIcon} alt='Basket icon' width={18} height={17}/>
            </button>
          </div>
          <button className='header__link'>Sign Up</button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default header