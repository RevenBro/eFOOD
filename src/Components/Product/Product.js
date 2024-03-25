import React from 'react'

import ProductNavBtn from '../ProductNavBtn/ProductNavBtn'
import ProductCard from '../ProductCard/ProductCard'

import {BurgerIcon} from '../../Assets/Images/icons'
import { PizzaIcon } from '../../Assets/Images/icons'
import { SandwitchIcon } from '../../Assets/Images/icons'
import { AsianFoodIcon } from '../../Assets/Images/icons'
import { SetMenuIcon } from '../../Assets/Images/icons'
import CheeseBurger from '../../Assets/Images/CheeseBurger.png'
import BeafBurger from '../../Assets/Images/BeafBurger.png'
import RoyalBurger from '../../Assets/Images/RoyalBurger.png'
import BlackBurger from '../../Assets/Images/BlackBurger.png'
import ChickenBurger from '../../Assets/Images/ChickenBurger.png'
import Carousel from '../../Assets/Images/carousel.svg'

function Product() {
  return (
    <>
    <section>
      <div className='container'>
        <h1 className='text-[36px] font-medium leading-10 text-center mb-[55px]'>Our Popular <span className='text-[#FF7A50]'>Category</span></h1>
        <div className='flex items-center justify-between mb-[39px]'>
          <ProductNavBtn title={"Burger"}>
            <BurgerIcon/>
          </ProductNavBtn>

          <ProductNavBtn title={"Pizza"}>
            <PizzaIcon/>
          </ProductNavBtn>

          <ProductNavBtn title={"Sandwich"}>
            <SandwitchIcon/>
          </ProductNavBtn>

          <ProductNavBtn title={"Asian Food"}>
            <AsianFoodIcon/>
          </ProductNavBtn>

          <ProductNavBtn title={"Set Menu"}>
            <SetMenuIcon/>
          </ProductNavBtn>
        </div>
      </div>

      <div className='container'>
        <ul className='flex items-center justify-between mb-[40px]'>
          <ProductCard img={CheeseBurger} title={"Cheeseburger With Salad"} price={"$18.00"}/>
          <ProductCard img={BeafBurger} title={"Beef Burger"} price={"$15.00"}/>
          <ProductCard img={RoyalBurger} title={"Royel Cheeseburger"} price={"$16.00"}/>
          <ProductCard img={BlackBurger} title={"Black Gambugrer"} price={"$14.00"}/>
          <ProductCard img={ChickenBurger} title={"Chicken Burger"} price={"$15.00"}/>
        </ul>
        <img className='mx-auto cursor-pointer' src={Carousel} width={208} height={34}/>
      </div>
    </section>
    </>
    )
  }
  
  export default Product