import React from 'react'

import RestaurantCard from '../RestaurantCard/RestaurantCard'
import CardImg1 from '../../Assets/Images/Restaurant1.png'
import CardImg2 from '../../Assets/Images/Restaurant2.png'
import CardImg3 from '../../Assets/Images/Restaurant3.png'
import CardImg4 from '../../Assets/Images/Restaurant4.png'
import CardImg5 from '../../Assets/Images/Restaurant5.png'
import CardImg6 from '../../Assets/Images/Restaurant6.png'

function Restaurant() {
  return (
    <secttion>
        <div className='container'>
            <h2 className='text-[#363853] text-center mb-[50px] text-[36px] font-medium leading-7'>Top Food <span className='text-[#FF7A50]'>Restaurant</span></h2>
            <div className='flex flex-wrap justify-between'>
                <RestaurantCard CardImg={CardImg1} title={"Blaze Pizza"} time={"11.00 AM - 10.00 PM"}/>
                <RestaurantCard CardImg={CardImg2} title={"Pizza Ranch"} time={"09.00 AM - 10.00 PM"}/>
                <RestaurantCard CardImg={CardImg3} title={"	Dion's Pizza Hut"} time={"10.00 AM - 12.00 PM"}/>
                <RestaurantCard CardImg={CardImg4} title={"Royel Burger"} time={"11.00 AM - 10.00 PM"}/>
                <RestaurantCard CardImg={CardImg5} title={"KFC Restaurant"} time={"09.00 AM - 10.00 PM"}/>
                <RestaurantCard CardImg={CardImg6} title={"Star Food"} time={"10.00 AM - 12.00 PM"}/>
            </div>
        </div>
    </secttion>
  )
}

export default Restaurant