import React from "react";
import Banner from "../component/Banner";
import Hero from "../component/Hero";
import {Link} from 'react-router-dom'
import Services from "../component/Services";
import FeaturedRooms from "../component/FeaturedRooms";


const Home = () => {
  
  return (
    <>
      <Hero>
        <Banner title="Luxurious Rooms" subtitle='VIP Rooms Starting at 4500tk'>
            <Link to='/rooms' className='btn-primary'>Our Rooms</Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms/>
    </>
  );
};

export default Home;
