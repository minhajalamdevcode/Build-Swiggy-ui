import React, { useState } from 'react'
import { MdVisibility } from 'react-icons/md';
import { RxCaretDown } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { PiSignIn } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";


function Header() {
    const[toggle,usetoggle]=useState(false)
     const showSideMenu=()=>{
         usetoggle(true);
     } 
     const hideSideMenu=()=>{
        usetoggle(false);
     }
     const  social=[
        {
            icon:<IoMdSearch/>,
            name:"Search"
        },
        {
            icon:<BiSolidOffer/>,
            name:"Offers",
            sup:"New"
        },
        {
          icon:<IoIosHelpBuoy/>,
          name:"Help"
        },
        {
          icon:<PiSignIn/>,
          name:"Sign In" 
        },
        {
          icon:<FaCartArrowDown/>,
          name:"Cart",
        }
       ]
  return (

    <>
    <div className='black-overlay w-full h-full fixed duration-500'onClick={hideSideMenu} style={{
        opacity:toggle?1:0,
        visibility:toggle?'visible':'hidden'
    }} >
      <div onClick={(e)=>{
        e.stopPropagation();
      }} className='w-[500px] h-full bg-white absolute duration-300'  style={{
        left:toggle?'0%':'-100%'
      }}></div>

    </div>
    <header className='p-3 shadow-xl tex t-[#686b78] '>
        <div className='max-w[1200px] mx-auto border border-t-red-700 flex items-center gap-4'>
            <div className='w-[80px]'>
               <img src="images/logo.jpeg" alt="" className='w-full ' />
            </div>
            <div>
        <span className='cursor-pointer font-bold  border-b-[3px] border-black hover:text-[#fc8019]'onClick={showSideMenu}>Other</span> Ranchi <RxCaretDown  onClick={showSideMenu}fontSize={25}className=' font-bold inline  text-[#fc8019] cursor-pointer' />

            </div>

             <nav className='flex list-none  gap-10 ml-auto font-lighter text-[20px]'>
              {
                social.map((socialink,index)=>{
               return <li key={index} className='cursor-pointer flex hover:text-[#fc8019] items-center gap-3'>{socialink.icon}
                   {socialink.name}
                   <sup>{socialink.sup}</sup>
                   </li>

                })
              }



            </nav>
        </div>

    </header>
    </>
  )

}   

export default Header