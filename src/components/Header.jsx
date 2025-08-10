import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { PiSignIn } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Header() {
    const [toggle, setToggle] = useState(false); // Mobile menu
    const [desktopOverlay, setDesktopOverlay] = useState(false); // Desktop location overlay

    const social = [
        { icon: <IoMdSearch />, name: "Search" },
        { icon: <BiSolidOffer />, name: "Offers", sup: "New" },
        { icon: <IoIosHelpBuoy />, name: "Help" },
        { icon: <PiSignIn />, name: "Sign In" },
        { icon: <FaCartArrowDown />, name: "Cart" }
    ];

    return (
        <>
            {/* ===== Mobile Black Overlay Menu ===== */}
            <div
                className='fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-500 md:hidden'
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? 'visible' : 'hidden'
                }}
                onClick={() => setToggle(false)}
            >
                <div
                    className='w-[260px] h-full bg-white absolute top-0 left-0 shadow-lg z-50 transition-transform duration-300'
                    style={{
                        transform: toggle ? 'translateX(0%)' : 'translateX(-100%)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between p-4 border-b">
                        <img src="images/logo.jpeg" alt="Swiggy Logo" className="w-20 h-auto" />
                        <HiX className="text-2xl cursor-pointer" onClick={() => setToggle(false)} />
                    </div>
                    <div className="p-4 border-b">
                        <p className="font-bold text-gray-700">Other</p>
                        <p className="text-sm text-gray-500">Ranchi</p>
                    </div>
                    <div className="p-4 border-b">
                        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                            <IoMdSearch className="text-xl text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent outline-none flex-1 text-sm"
                            />
                        </div>
                    </div>
                    <ul className="p-4 flex flex-col gap-4 text-gray-700 text-lg">
                        {social.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 hover:text-[#fc8019] cursor-pointer">
                                {item.icon} {item.name}
                                {item.sup && (
                                    <sup className="text-xs bg-[#fc8019] text-white px-1 rounded">
                                        {item.sup}
                                    </sup>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ===== Desktop Left Overlay for Location ===== */}
            <div
                className='fixed inset-0 z-40 transition-all duration-500 hidden md:block'
                style={{
                    backgroundColor: desktopOverlay ? 'rgba(0,0,0,0.5)' : 'transparent',
                    opacity: desktopOverlay ? 1 : 0,
                    visibility: desktopOverlay ? 'visible' : 'hidden'
                }}
                onClick={() => setDesktopOverlay(false)}
            >
                <div
                    className='w-[300px] h-full bg-white absolute top-0 left-0 shadow-lg z-50 transition-transform duration-300'
                    style={{
                        transform: desktopOverlay ? 'translateX(0%)' : 'translateX(-100%)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-4 font-bold text-lg">Hello</div>
                </div>
            </div>

            {/* ===== Header ===== */}
            <header className='p-3 shadow-md text-[#686b78] bg-white'>
                <div className='max-w-[1200px] mx-auto flex items-center gap-4'>
                    <div className='w-[80px]'>
                        <img src="images/logo.jpeg" alt="logo" className='w-full' />
                    </div>

                    {/* Location Trigger (Desktop Only) */}
                    <div
                        className="hidden md:block cursor-pointer font-bold border-b-[3px] border-black hover:text-[#fc8019]"
                        onClick={() => setDesktopOverlay(true)}
                    >
                        Other Ranchi
                        <RxCaretDown fontSize={25} className='font-bold inline text-[#fc8019]' />
                    </div>

                    {/* Desktop Menu */}
                    <nav className='hidden md:flex list-none gap-10 ml-auto font-light text-[18px]'>
                        {social.map((socialink, index) => (
                            <li
                                key={index}
                                className='cursor-pointer flex hover:text-[#fc8019] items-center gap-2'
                            >
                                {socialink.icon}
                                {socialink.name}
                                <sup>{socialink.sup}</sup>
                            </li>
                        ))}
                    </nav>

                    {/* Mobile Hamburger */}
                    <div className="ml-auto md:hidden">
                        <HiMenuAlt3
                            className="text-3xl cursor-pointer text-[#fc8019]"
                            onClick={() => setToggle(true)}
                        />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
