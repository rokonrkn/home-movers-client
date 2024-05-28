import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import logo from '../../../public/hm-logo-white.png'
import './Header.css'
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {

    const [color, setColor] = useState(false)

    const colorChange = () =>{
        if(window.screenY >= 1){
            setColor(true)
        } else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', colorChange)

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    

    return (
        <div >
            {/* <div className="h-44"></div> */}
            <div>
                <nav className={color ? 'header-color' : 'header'}>
                    <div className="flex items-center xl:mx-20  justify-between  py-2 text-white ">
                        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110">
                            <img className='w-44' src={logo} alt="" />
                        </div>
                        <ul className="hidden items-center justify-between gap-10 md:flex">
                            <Link smooth to={`/`}><li className="group flex  cursor-pointer flex-col">
                                Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li></Link>
                            <Link smooth to={`#service`}><li className="group flex  cursor-pointer flex-col">
                                Services<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li></Link>
                            <Link smooth to={`#about`}><li className="group flex  cursor-pointer flex-col">
                                About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li></Link>
                            <Link smooth to={`#getqote`}><li className="group flex  cursor-pointer flex-col">
                                Get a quote<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li></Link>
                           <Link smooth to={`#contact`}> <li className="group flex  cursor-pointer flex-col">
                                Contact<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                            </li></Link>
                        </ul>
                    
                    <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                        {dropDownState && (
                            <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                                <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                                    Home
                                </li>
                                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                    Services
                                </li>
                                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                    About
                                </li>
                                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                    Contact
                                </li>
                            </ul>
                        )}
                    </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;