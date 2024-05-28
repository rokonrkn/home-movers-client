import React from 'react';
import img from '../../../public/forklift.png'
import img2 from '../../../public/movers_14-1080x540.jpg'
import img3 from '../../../public/movers_151-1080x540.jpg'
import img4 from '../../../public/movers_18-1080x540.jpg'
import { GrBlockQuote } from 'react-icons/gr';
import './About.css'

const AboutUs = () => {
    return (
        <div className=' xl:mx-20 about-content mt-20' id='about'>
            <div className="grid xl:grid-cols-3 gap-7">
                <div className="mt-36 about-container">
                    <h4 className='uppercase text-md font-bold text-gray-700 flex justify-end'>our core value</h4>
                    <h3 className='uppercase text-3xl font-bold mt-3 text-gray-700 flex justify-end'>ABOUT US AND OUR </h3>
                    <span className='flex uppercase text-3xl font-bold text-gray-700 justify-end'>SKILLS</span>
                </div>
                <div className="xl:mt-36 flex text-gray-600">
                    <span><GrBlockQuote className='text-5xl' /></span>
                    <p>The core values are the guiding principles that dictate behavior and action. There are many different types of core values and many different examples of core values depending upon the context.</p>
                </div>
                <div className="">
                    <img className='w-80' src={img} alt="" />
                </div>
            </div>
            <div className="mt-8">
                <div className="grid xl:grid-cols-3 gap-8">
                    <div className="shadow-2xl p-3">
                        <img src={img2} alt="" />
                        <p className='font-bold mt-5'>Around the world</p>
                        <h3 className='text-yellow-400 mt-1 text-2xl font-bold'>Home moving</h3>
                        <p className='text-xm mt-1'>Duis hendrerit est nec eleifend euismod. Nulla tristique suscipit lacinia. Fusce vel vestibulum nulla, eget vehicula elit. In ut sodales ante. Duis nec.</p>
                    </div>
                    <div className="shadow-2xl p-3">
                        <img src={img3} alt="" />
                        <p className='font-bold mt-5'>Tackle challenging relocations</p>
                        <h3 className='text-yellow-400 mt-1 text-2xl font-bold'>New service</h3>
                        <p className='text-xm mt-1'>Donec scelerisque velit vel tempor laoreet. Etiam rhoncus placerat ex id porttitor. Quisque interdum purus vel ligula mattis egestas.</p>
                    </div>
                    <div className="shadow-2xl p-3">
                        <img src={img4} alt="" />
                        <p className='font-bold mt-5'>New service</p>
                        <h3 className='text-yellow-400 mt-1 text-2xl font-bold'>Office relocation</h3>
                        <p className='text-xm mt-1'>Pellentesque convallis semper venenatis. Proin vitae quam nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;