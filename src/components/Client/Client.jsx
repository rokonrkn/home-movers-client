import React from 'react';
import './Client.css'
import { GrBlockQuote } from 'react-icons/gr';
import img from '../../../public/sign_1.png'

const Client = () => {
    return (
        <div className='background mt-20 pb-16'>
            <div className="xl:mx-20 service-container">
                <div className="grid xl:grid-cols-3 gap-8 text-white">
                    <div className="mt-20">
                        <h4 className='uppercase text-md font-bold flex justify-end'>OUR CLIENTS</h4>
                        <h3 className='uppercase text-3xl font-bold mt-3 flex justify-end'>CLIENTS THAT TRUST </h3>
                        <span className='flex uppercase text-3xl font-bold  justify-end'>OUR SERVICES</span>
                        <p className='mt-3 flex justify-end'>The core values are the guiding principles that dictate behavior and action. There are many different types of core values and many different examples of core values depending upon the context.</p>
                    </div>
                    <div className=" py-14 px-5 mt-20 back-container">
                        <div className=" flex text-gray-600">
                            <span><GrBlockQuote className='text-5xl' /></span>
                            <p className='text-white text-xm ml-4'>Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier; wish you were better.</p>

                        </div>
                        <div className="mt-10">
                            <div className="flex justify-end">
                                <img  src={img} alt="" />
                            </div>
                            <h2 className='text-xl font-bold flex justify-end uppercase'>John smith</h2>
                            <h2 className='text-xm font-bold flex justify-end uppercase'>CTO of KLM</h2>
                        </div>
                    </div>
                    <div className="  py-14 px-5 mt-20 back-container">
                        <div className=" flex text-gray-600">
                            <span><GrBlockQuote className='text-5xl' /></span>
                            <p className='text-white text-xm ml-4'>I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.</p>

                        </div>
                        <div className="mt-10">
                            <div className="flex justify-end">
                                <img  src={img} alt="" />
                            </div>
                            <h2 className='text-xl font-bold flex justify-end uppercase'>PATRICK HEAD</h2>
                            <h2 className='text-xm font-bold flex justify-end uppercase'>CTO of KLM</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;