import React, { useState } from 'react';
import Container from './Container';
//import img from '../assets//Cart-Small.png';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const CartItem = ({title,price,img}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <div>
      <Container>
        <div className="grid grid-cols-4 gap-6 shadow-md p-3 items-center mb-2">
          <div className="flex items-center gap-5">
            <img className="w-13.5 h-13.5" src={img} alt="" />
            <p>{title.slice(0, 25)}</p>
          </div>
          <p>{price}</p>

          <div className="flex items-center justify-between border border-gray-300 w-20 h-10 px-4 rounded">
            {/* Quantity Display */}
            <span className="text-sm font-medium">{quantity}</span>

            {/* Up/Down Arrow Buttons */}
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

          <p>${(price * quantity).toFixed(2)}</p>
        </div>
      </Container>
    </div>
  );
};

export default CartItem;