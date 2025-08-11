import React, { use, useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from './Card';

function Toprestaurant() {
   const [data,setdata]=useState([]);
   const fetchTopRestaurant= async ()=>{
    const response = await fetch("/restaurantChains.json");
    const apidata = await response.json();
      setdata(apidata);

   }
   useEffect(()=>{
       fetchTopRestaurant();
   },[])

  return (
    <div className="max-w-[1200px] mx-auto px-2">
          {/* Title + Buttons (Desktop view) */}
          <div className="flex items-center justify-between md:flex-row flex-col">
            <div className="text-[25px] pt-[20px] font-bold text-center md:text-left">
              Top restaurant chains in Chhindwara
            </div>
    
            {/* Desktop buttons */}
            <div className="hidden md:flex">
              <div
                
                className="cursor-pointer w-[30px] h-[30px] bg-[#e9e9ea] rounded-full mx-2 flex items-center justify-center duration-200 hover:bg-[#d8d9da]"
              >
                <FaArrowLeft />
                
              </div>
              <div
                
                className="cursor-pointer w-[30px] h-[30px] bg-[#e9e9ea] rounded-full mx-2 flex items-center justify-center duration-200 hover:bg-[#d8d9da]"
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
          {/* <div className='w-[273px] border border-red-200 h-auto'>
                <img src="images/Rolls.jpeg" alt="" className='w-full rounded-full'/>
                <div className='w-[240px] '>
                   <h2>hello</h2>
                   <div className='flex'>
                    <div>*</div>
                    <div>4.3.35-40 mins</div>
                   </div>
                   <p>hhdiufkjdfhiudfhkjfidfhkjfiudfkdhf</p>
                </div>
          </div> */}
          <div className='flex gap-5 overflow-hidden'>
            <Card/>
          </div>
       


    </div>
  )
}

export default Toprestaurant