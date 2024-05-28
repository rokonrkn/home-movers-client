
import React, { useRef, useState } from 'react';
// Import Swiper React components
import './Swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SwiperHome = () => {
    return (
        <div className='xl:mx-20'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='xl:px-20 text-white ' >
                    <div className="xl:py-10 swiper-container">
                        <h4 className='text-xl font-bold'>Welcome to</h4>
                        <h3 className='text-6xl font-bold uppercase mt-4'>Home Relocation <br /> Company</h3>
                        <p className='text-xl font-bold mt-6'>Global turnkey logistics and transportation services via sea, land and air. <br /> We will protect you from risk and liability.

                        </p>
                        <div className="mt-10">
                            <Link className='py-3 uppercase text-white font-bold rounded-sm px-6 bg-yellow-500'>About us</Link>
                            <Link className='py-3 uppercase text-white font-bold ml-6 rounded-sm px-6 bg-gray-700'>Get a quote</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text-white xl:px-20'>
                    <div className="xl:mt-10 swiper-container">
                        <h4 className='text-xl font-bold'>Transport Your Goods</h4>
                        <h3 className='text-6xl font-bold uppercase mt-4'>Locally and around<br /> the world</h3>
                        <p className='text-xl font-bold mt-6'>Molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero <br /> eros et accumsan et iusto. Ut wisi enim. </p>
                        <div className="py-10 ">
                            <Link className='py-3 uppercase text-white font-bold rounded-sm px-6 bg-yellow-500'>About us</Link>
                            <Link className='py-3 uppercase text-white font-bold ml-6 rounded-sm px-6 bg-gray-700'>Get a quote</Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperHome;