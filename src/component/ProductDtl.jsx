import React, { useEffect, useState } from 'react';
import Container from './Container';
import defaultMainImg from '../assets/Frame894.png';
import defaultThumbImg from '../assets/Frame897.png';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

const ProductDtl = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // 1. Add state to hold fetched API product details
  const [apiProduct, setApiProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Read current product from Redux state (if any)
  const reduxProduct = useSelector((state) => state.cart?.ProductDtl);

  useEffect(() => {
    if (!id || id === "[object Object]") {
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // 2. Store fetched API product in state
       
        setApiProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch product:', err);
        setLoading(false);
      });
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="py-20 text-center font-semibold text-lg">
        Loading product details...
      </div>
    );
  }
 console.log(apiProduct);
  // 3. Prioritize API product -> Redux product -> Fallback default
  const product = apiProduct || reduxProduct;

  const title = product?.title || 'Havic HV G-92 Gamepad';
  const price = typeof product?.price === 'number' ? product.price : 192.0;
  const description = product?.description || 'PlayStation 5 Controller featuring haptic feedback, dynamic adaptive triggers, and a built-in microphone.';
  const mainImage = product?.thumbnail || product?.images?.[0] || product?.image || defaultMainImg;
  
  // Use API/Redux thumbnails if available, otherwise fallback
  const thumbnails = product?.images?.length 
    ? product.images.slice(0, 4) 
    : [defaultThumbImg, defaultThumbImg, defaultThumbImg, defaultThumbImg];

  return (
    <div className="py-10"> 
      <Container>
        <div className="flex mt-20 gap-10 items-start">
          
          {/* Thumbnail Column */}
          <div className="flex flex-col gap-4">
            {thumbnails.map((thumb, index) => (
              <img 
                key={index} 
                src={thumb} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-20 h-20 object-cover cursor-pointer rounded border border-gray-200 hover:border-black transition"
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="max-w-md w-full bg-gray-100 rounded-md p-4 flex items-center justify-center">
            <img 
              src={mainImage} 
              alt={title} 
              className="w-full h-80 object-contain"
            />
          </div>

          {/* Product Details & Actions */}
          <div className="space-y-4 max-w-sm">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-xl font-semibold text-gray-700">${price.toFixed(2)}</p>
            
            <p className="text-sm text-gray-500">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 space-y-2">
              <button className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition">
                Buy Now
              </button>
              <button className="w-full border border-gray-300 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default ProductDtl;