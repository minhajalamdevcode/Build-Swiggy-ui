import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";


function Header() {
    const[toggle,usetoggle]=useState(false)
     const showSideMenu=()=>{
         usetoggle(true);
     } 
  return (

    <>
    <div className='black-overlay w-full h-full fixed duration-500'style={{
        opacity:toggle?1:0
    }} ></div>
    <header className='p-3 shadow-xl tex t-[#686b78] '>
        <div className='max-w[1200px] mx-auto border border-t-red-700 flex items-center gap-4'>
            <div className='w-[80px]'>
               <img src="images/logo.jpeg" alt="" className='w-full ' />
            </div>
            <div>
        <span className='font-bold  border-b-[3px] border-black text-[#fc8019]'>Ranchi</span> Jharkhand <RxCaretDown  onClick={showSideMenu}fontSize={25}className=' font-bold inline  text-[#fc8019]' />

            </div>
        </div>

    </header>
    </>
  )

}   

export default Header