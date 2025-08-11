import React, { use, useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from './Card';

function Toprestaurant() {
   const [data,setdata]=useState([]);
   const [slide, setslide] = useState(0);
   
   const fetchTopRestaurant= async ()=>{
    const response = await fetch("/restaurantChains.json");
    const apidata = await response.json();
      setdata(apidata);

   }
   useEffect(()=>{
       fetchTopRestaurant();
   },[])

   const prevslide=()=>{
      if(slide == 0) return false;
        setslide(slide-1)
     }
     const nextslide=()=>{
      if(Categories.length -3 == slide) return false;
      setslide(slide+1)
     }

  return (
    <div className="max-w-[1200px] mx-auto px-2">
          {/* Title + Buttons (Desktop view) */}
          <div className="flex items-center justify-between md:flex-row flex-col">
            <div className="text-[25px] pt-[20px] pb-[18px] font-bold text-center md:text-left">
              Top restaurant chains in Chhindwara
            </div>
    
            {/* Desktop buttons */}
            <div className="hidden md:flex">
              <div onClick={prevslide}
                
                className="cursor-pointer w-[30px] h-[30px] bg-[#e9e9ea] rounded-full mx-2 flex items-center justify-center duration-200 hover:bg-[#d8d9da]"
              >
                <FaArrowLeft />
                
              </div>
              <div
                
                className="cursor-pointer w-[30px] h-[30px] bg-[#e9e9ea] rounded-full mx-2 flex items-center justify-center duration-200 hover:bg-[#d8d9da]"
                onClick={nextslide}
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
          
          <div className='flex gap-5 overflow-hidden'>
            {
              data.map((items,index)=>{
                   return <Card {...items} key={index}/>
              })
            }
            
            
          </div>
       
      <hr  className='my-4 border-[1px] border-gray-200'/>


    </div>
  )
}

export default Toprestaurant