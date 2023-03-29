import React from 'react'
import "./Home.scss"
import Hero from "../../components/Homepage/Hero/Hero"
import Getaway from '../../components/Homepage/Getaway/Getaway'
import AboutHotel from '../../components/Homepage/AboutHotel/AboutHotel'
import Rooms from '../../components/Homepage/Rooms/Rooms'
import Lakefront from '../../components/Homepage/Lakefront/Lakefront'
import Offers from '../../components/Homepage/Offers/Offers'
import Booking from '../../components/Homepage/Booking/Booking'
import Testimonial from '../../components/Homepage/Testimonial/Testimonial'
import Awaits from '../../components/Homepage/AwaitsSlider/Awaits'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <Getaway/>
      <AboutHotel/>
      <Rooms/>
      <Lakefront/>
      <Awaits/>
      <Offers/>
      <Testimonial/>
      <Booking/>
     </div>
  )
}
 
export default Home
