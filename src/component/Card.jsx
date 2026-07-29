import React from 'react';
import { Rate } from 'antd';
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const Card = ({ img1, name, np, op, dis, rating = 5, reviewCount = 88 }) => {
  return (
    <div className='w-67.5 group mt-10'>
      {/* Product Image & Overlay Section */}
      <div className='relative overflow-hidden bg-[#F5F5F5] rounded-sm'>
        {dis && (
          <span className='px-4 py-2 bg-primary rounded-sm text-xs text-white absolute left-4 top-4 z-10'>
            {dis}
          </span>
        )}
        
        <img 
          className="h-62.5 w-full object-contain p-4 mix-blend-multiply" 
          src={img1} 
          alt={name} 
        /> 

        {/* Action Icons */}
        <div className='absolute top-4 right-4 space-y-2 z-10'>
          <button 
            type="button"
            className='text-xl p-1.5 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer'
          >
            <CiHeart />
          </button>
          <button 
            type="button"
            className='text-xl p-1.5 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer'
          >
            <IoEyeOutline />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button 
          type="button"
          className='bg-black text-white absolute group-hover:bottom-0 -bottom-11 left-0 font-medium w-full py-2.25 duration-200 ease-linear cursor-pointer text-sm rounded-b-sm'
        >
          Add To Cart
        </button>
      </div>
        
      {/* Product Information */}
      <h3 className='mt-4 mb-2 font-medium text-base truncate'>{name}</h3>
      
      {/* Price */}
      <div className='flex items-center gap-3 mb-2'>
        <span className='text-primary font-medium text-base'>${np}</span>
        {op && <span className='text-black/40 line-through font-medium text-base'>${op}</span>}
      </div>

      {/* Ratings */}
      <div className='flex items-center gap-2 text-xs text-black/60 font-semibold'>
        <Rate allowHalf disabled value={rating} className='text-sm' />
        <span>({reviewCount})</span>
      </div>
    </div>
  );
};

export default Card;