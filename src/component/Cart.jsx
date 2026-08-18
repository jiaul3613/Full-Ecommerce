import React from 'react'
import img1 from '../assets/Frame575.png'

const Cart = ({ img, title, price, dis, oldp }) => {
  return (
    <div className="w-67.5">
      {/* Container with relative position */}
      <div className="relative w-full h-62.5 bg-[#f7f7f7] rounded-sm p-3 flex flex-col justify-between">
        
        {/* Top bar: Discount badge and Wishlist icon */}
        <div className="flex justify-between items-center z-10">
          {dis ? (
            <button className="px-3 py-1 bg-red-600 rounded-sm text-xs text-white">
              {dis}
            </button>
          ) : <div />}
          <img src={img1} className="w-8 h-8 cursor-pointer" alt="Wishlist" />
        </div>

        {/* Centered Image Container */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img 
            src={img} 
            alt={title} 
            className="max-h-full max-w-full object-contain" 
          />
        </div>

      </div>

      {/* Product Details */}
      <p className="py-2 font-medium">{title}</p>
      <div className="flex gap-3">
        <p className="text-red-500 font-semibold">${price}</p>
        {oldp && <p className="text-gray-400 line-through">${oldp}</p>}
      </div>
    </div>
  )
}

export default Cart