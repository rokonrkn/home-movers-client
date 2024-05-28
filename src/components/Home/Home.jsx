import React from 'react';
import SwiperHome from '../Swiper/SwiperHome';
import AboutUs from '../AboutUs/AboutUs';
import Client from '../Client/Client';
import Service from '../Service/Service';
import Numbers from '../Numbers/Numbers';
import Map from '../Map/Map';

const Home = () => {
    return (
        <div>
            <SwiperHome></SwiperHome>
            <AboutUs></AboutUs>
            <Client></Client>
            <Service></Service>
            <Numbers></Numbers>
            <Map></Map>
        </div>
    );
};

export default Home;