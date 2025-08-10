import React, { useEffect, useState } from 'react'
import { DiVim } from 'react-icons/di';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function Category() {
    const[Categories,setcategory]=useState([]);
     const fetchCategory=async ()=>{
      const response= await fetch("http://localhost:5000/categories")
      const data= await response.json();
      setcategory(data);
     }
     useEffect(()=>{
        fetchCategory();
     },[])

  return (
     <div className='max-w-[1200px] mx-auto'>
    
       <div className='flex items-center justify-between'>
          <div className='text-[25px] font-bold'>What's on your mind?</div>
          <div className='flex'>
              <div className='cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center'><FaArrowLeft/></div>
              <div className='cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center'><FaArrowRight/></div>

          </div>
       </div>
       <div className='flex'>
            {
                Categories.map((cat,index)=>{
                   return(
                         <div className='flex-grow'>
                            <img src={"https://localhost:5000/images/"+cat.image} alt="" />
                         </div>
                   )
                })
            }
       </div>
    
    </div>
  )
}

export default Category