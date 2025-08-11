import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Category() {
  const [Categories, setcategory] = useState([]);
  const [slide, setslide] = useState(0);

  const fetchCategory = async () => {
    const response = await fetch("/category.json");
    const data = await response.json();
    setcategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const prevslide = () => {
    if (slide === 0) return false;
    setslide(slide - (window.innerWidth < 768 ? 2 : 3)); // mobile me 2 ka slide
  };

  const nextslide = () => {
    if (slide >= Categories.length - (window.innerWidth < 768 ? 2 : 8)) return false;
    setslide(slide + (window.innerWidth < 768 ? 2 : 3));
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      {/* Title + Buttons (Desktop view) */}
      <div className="flex items-center justify-between md:flex-row flex-col">
        <div className="text-[25px] pt-[20px] font-bold text-center md:text-left">
          What's on your mind?
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex">
          <div
            onClick={prevslide}
            className="cursor-pointer w-[30px] h-[30px] bg-[#e9e9ea] rounded-full mx-2 flex items-center justify-center duration-200 hover:bg-[#d8d9da]"
          >
            <FaArrowLeft />
            
          </div>
          <div
            onClick={nextslide}
            className="cursor-pointer w-[30px] h-[30px] bg-[#e9e9ea] rounded-full mx-2 flex items-center justify-center duration-200 hover:bg-[#d8d9da]"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="flex overflow-hidden mt-3">
        {Categories.map((cat, index) => (
          <div
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
            key={index}
            className="duration-500 shrink-0 w-1/2 md:w-[170px]" // mobile me half width (2 slides per row)
          >
            <img src={cat.image} alt={cat.name} className="w-full" />
          </div>
        ))}
      </div>

      {/* Mobile buttons */}
      <div className="flex md:hidden justify-center mt-3">
        <div
          onClick={prevslide}
          className="cursor-pointer w-[35px] h-[35px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center"
        >
          <FaArrowLeft />
        </div>
        <div
          onClick={nextslide}
          className="cursor-pointer w-[35px] h-[35px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center"
        >
          <FaArrowRight />
        </div>
      </div>
      <hr  className='my-4 border-[1px] border-gray-200'/>
    </div>
  );
}

export default Category;
