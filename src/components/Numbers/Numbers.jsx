import React, { useState } from 'react';
import './Numbres.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Numbers = () => {

    const [countOn, setCountOn] = useState(false)

    const ProgressNumber = 76;
    const ProgressNumber2 = 61;
    const ProgressNumber3 = 54;
    const ProgressNumber4 = 100;

    


    return (
        <div className="background pb-20 mt-20" id='getqote'>
            <div className='xl:mx-20 number3-container'>
                <div className="number-container">
                    <div className="mt-20 text-white">
                        <h4 className='uppercase text-md font-bold   flex justify-end'>WE ARE THE BEST</h4>
                        <h3 className='uppercase text-3xl font-bold mt-3 flex justify-end'>CARGO IN NUMBERS </h3>
                        <p className='mt-10 flex justify-end'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.</p>
                    </div>
                    <div className="mt-20">
                        <div className="flex flex-col w-full mx-auto gap-2">
                            <h3 className='text-white font-bold'>MARKET SHARE IN CE REGION</h3>
                            <div className={`flex h-7 w-full  items-center justify-center bg-yellow-200`}>
                                <div style={{ width: `${ProgressNumber}%` }} className={`transition-width flex justify-center items-center mr-auto h-full w-0   bg-yellow-600 duration-500`} >
                                    <span className="font-medium  text-center text-white"> {ProgressNumber} %</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-5 w-full mx-auto gap-2">
                            <h3 className='text-white font-bold'>REVENUE GROWTH PER YEAR</h3>
                            <div className={`flex h-7 w-full  items-center justify-center bg-yellow-200`}>
                                <div style={{ width: `${ProgressNumber2}%` }} className={`transition-width flex justify-center items-center mr-auto h-full w-0   bg-yellow-600 duration-500`} >
                                    <span className="font-medium  text-center text-white"> {ProgressNumber2} %</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-5 w-full mx-auto gap-2">
                            <h3 className='text-white font-bold'>PROFIT GROWTH PER YEAR</h3>
                            <div className={`flex h-7 w-full  items-center justify-center bg-yellow-200`}>
                                <div style={{ width: `${ProgressNumber3}%` }} className={`transition-width flex justify-center items-center mr-auto h-full w-0   bg-yellow-600 duration-500`} >
                                    <span className="font-medium  text-center text-white"> {ProgressNumber3} %</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-5 w-full mx-auto gap-2">
                            <h3 className='text-white font-bold'>INCREASE IN NUMBER OF LOGISTICS CENTERS</h3>
                            <div className={`flex h-7 w-full  items-center justify-center bg-yellow-200`}>
                                <div style={{ width: `${ProgressNumber4}%` }} className={`transition-width flex justify-center items-center mr-auto h-full w-0   bg-yellow-600 duration-500`} >
                                    <span className="font-medium  text-center text-white"> {ProgressNumber4} %</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="grid xl:grid-cols-3">
                        <div className="text-center text-white bottom-border xl:border-r">
                            <ScrollTrigger onEnter={ ()=> setCountOn(true)} onExit={()=> setCountOn(false)}>
                                {
                                    countOn && <h1 className='xl:text-7xl count-up font-bold'> <CountUp start={0} end={473793} duration={2}></CountUp> </h1>
                                }
                            </ScrollTrigger>

                            <h3 className='uppercase text-xl mt-2'>km per year</h3>
                            <p className='mt-2'>Pellentesque sollicitudin molestie libero at commodo. Nunc cursus ligula magna, ut imperdiet turpis pellentesque sit amet.</p>
                        </div>
                        <div className="text-center bottom-border text-white xl:border-r">
                            <ScrollTrigger onEnter={ ()=> setCountOn(true)} onExit={()=> setCountOn(false)}>
                                {
                                    countOn && <h1 className='xl:text-7xl count-up font-bold'> <CountUp start={0} end={3279} duration={2}></CountUp> </h1>
                                }
                            </ScrollTrigger>

                            <h3 className='uppercase text-xl mt-2'>TONS OF GOODS</h3>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante arcu, lacinia dictum ullamcorper vitae, tempor nec quam</p>
                        </div>
                        <div className="text-center text-white border-">
                            <ScrollTrigger onEnter={ ()=> setCountOn(true)} onExit={()=> setCountOn(false)}>
                                {
                                    countOn && <h1 className='xl:text-7xl count-up font-bold'> <CountUp start={0} end={513} duration={2}></CountUp> </h1>
                                }
                            </ScrollTrigger>

                            <h3 className='uppercase text-xl mt-2'>SATISFIED CLIENTS</h3>
                            <p className='mt-2'>Quisque tincidunt, nisi in venenatis commodo, neque quam pharetra dolor, nec lacinia urna quam. Praesent eu rhoncus nibh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Numbers;