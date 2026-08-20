import React, { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removeFromCart, removeFromFav } from '../slicer/Product';

const CartItem = ({ title, price, img, productdtl, type }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const numericPrice = typeof price === 'number' 
    ? price 
    : parseFloat(String(price).replace(/[^0-9.-]+/g, '')) || 0;

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleRemove = () => { 
    if (!productdtl) {
      console.error("No product detail provided to CartItem");
      return;
    }
    
    if (type === 'fav') {
      dispatch(removeFromFav(productdtl));
      toast.error('Item removed from Favorites');
    } else {
      dispatch(removeFromCart(productdtl));
      toast.error('Item removed from Cart');
    }
  };

  return (
    <div className="grid grid-cols-4 gap-6 shadow-md p-2 items-center mb-2">
      <div className="flex items-center gap-5 relative">
        <span 
          onClick={handleRemove} 
          className='size-5 bg-red-700 text-white rounded-full flex absolute top-0 left-0 cursor-pointer justify-center items-center text-xs hover:bg-red-800 transition-colors'
        >
          ✕
        </span>
        <img className="w-13.5 h-13.5 object-contain" src={img} alt={title} />
        <p className="truncate">{title?.slice(0, 25)}</p>
      </div>
      
      <p>${numericPrice.toFixed(2)}</p>

      <div className="flex items-center justify-between border border-gray-300 w-20 h-10 px-4 rounded">
        <span className="text-sm font-medium">{quantity}</span>

        <div className="flex flex-col justify-center items-center">
          <MdKeyboardArrowUp
            className="cursor-pointer hover:text-black text-gray-600 text-sm"
            onClick={handleIncrease}
          />
          <MdKeyboardArrowDown
            className="cursor-pointer hover:text-black text-gray-600 text-sm"
            onClick={handleDecrease}
          />
        </div>
      </div>

      <p>${(numericPrice * quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;