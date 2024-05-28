import React from 'react';
import './Service.css'
import img from '../../../public/movers_06-1080x540.jpg'
import img2 from '../../../public/movers_08-1080x540.jpg'
import img3 from '../../../public/movers_12-1080x540.jpg'
import img4 from '../../../public/movers_17-1080x540.jpg'
import img5 from '../../../public/movers_191-1080x540.jpg'
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { TiWorld } from 'react-icons/ti';
import { MdTrolley } from 'react-icons/md';
import { FaTruckPickup } from 'react-icons/fa';

const Service = () => {
    return (
        <div className='background2 xl:mx-20 service-container' id='service'>
            <div className="grid xl:grid-cols-3 gap-8">
                <div className="mt-20">
                    <h4 className='uppercase text-md font-bold flex justify-end'>OUR CLIENTS</h4>
                    <h3 className='uppercase text-3xl font-bold mt-3 flex justify-end'>CLIENTS THAT TRUST </h3>
                    <span className='flex uppercase text-3xl font-bold  justify-end'>OUR SERVICES</span>

                </div>
                <div className="bg-white xl:mt-20">
                    <img src={img} alt="" />
                    <div className="flex px-5 mt-10">
                        <span><BsTelephoneOutboundFill className='text-5xl text-yellow-400' /></span>
                        <div className="ml-10 pb-6">
                            <h3 className='text-xl font-bold'> 24 hours support</h3>
                            <p className='mt-3'>Duis hendrerit est nec eleifend euismod. Nulla tristique suscipit lacinia. Fusce vel vestibulum nulla, eget vehicula elit.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white xl:mt-20">
                    <img src={img2} alt="" />
                    <div className="flex px-5 mt-10">
                        <span><TiWorld className='text-6xl text-yellow-400' /></span>
                        <div className="ml-5">
                            <h3 className='text-xl font-bold'>  Worldwide</h3>
                            <p className='mt-3'>Duis hendrerit est nec eleifend euismod. Nulla tristique suscipit lacinia. Fusce vel vestibulum nulla, eget vehicula elit.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid xl:grid-cols-3 gap-8">

                <div className="bg-white shadow-2xl mt-10">
                    <img src={img3} alt="" />
                    <div className="flex px-5 mt-10">
                        <span><BsTelephoneOutboundFill className='text-5xl text-yellow-400' /></span>
                        <div className="ml-10">
                            <h3 className='text-xl font-bold'> Tracking service</h3>
                            <p className='mt-3'>Duis hendrerit est nec eleifend euismod. Nulla tristique suscipit lacinia. Fusce vel vestibulum nulla, eget vehicula elit.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-2xl mt-10">
                    <img src={img4} alt="" />
                    <div className="flex px-5 mt-10">
                        <span><MdTrolley className='text-5xl text-yellow-400' /></span>
                        <div className="ml-10">
                            <h3 className='text-xl font-bold'>
                                Storage</h3>
                            <p className='mt-3'>Duis hendrerit est nec eleifend euismod. Nulla tristique suscipit lacinia. Fusce vel vestibulum nulla, eget vehicula elit.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-2xl mt-10">
                    <img src={img5} alt="" />
                    <div className="flex px-5 mt-10">
                        <span><FaTruckPickup  className='text-6xl text-yellow-400' /></span>
                        <div className="ml-5 pb-8">
                            <h3 className='text-xl font-bold'>
                                Fast and reliable</h3>
                            <p className='mt-3'>Duis hendrerit est nec eleifend euismod. Nulla tristique suscipit lacinia. Fusce vel vestibulum nulla, eget vehicula elit.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;