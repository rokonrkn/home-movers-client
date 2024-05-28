import React from 'react';
import { PiPhoneCallBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import './Map.css'

const Map = () => {
    return (
        <div id='contact'>
            <div className="bg-yellow-600 ">
                <div className="xl:mx-20 caontact-contaienre grid xl:grid-cols-4 py-16">
                    <div className="text-white">
                        <p className='text-xl'>WE’LL BE GLAD TO HELP</p>
                        <h3 className='text-4xl font-bold'>CONTACT US</h3>
                    </div>
                    <div className="text-white caontact flex">
                        <p className='text-xl'><PiPhoneCallBold className='text-4xl ' /></p>
                        <div className="ml-3">
                            <h3 className='text-2xl font-bold'> CALL CENTER</h3>
                            <h5>Give us a free call </h5>
                            <h5>+1 555-676-1020 </h5>
                        </div>
                    </div>
                    <div className="text-white caontact flex">
                        <p className='text-xl'><PiPhoneCallBold className='text-4xl ' /></p>
                        <div className="ml-3">
                            <h3 className='text-2xl font-bold'> CALL CENTER</h3>
                            <h5>Give us a free call </h5>
                            <h5>+1 555-676-1020 </h5>
                        </div>
                    </div>
                    <div className="text-white caontact flex">
                        <p className='text-xl'><PiPhoneCallBold className='text-4xl ' /></p>
                        <div className="ml-3">
                            <h3 className='text-2xl font-bold'> CALL CENTER</h3>
                            <h5>Give us a free call </h5>
                            <h5>+1 555-676-1020 </h5>
                        </div>
                    </div>
                </div>
            </div>
            <address>
                <div className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153003.15092460596!2d90.28095510973166!3d23.761646777918962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1714928112692!5m2!1sen!2sbd" width="100%" height="450" loading="lazy" allowFullScreen sreferrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </address>
        </div>
    );
};

export default Map;