import React, { useState, useEffect } from 'react';
import Container from './Container';
import Card from './Card';


const ShopProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        // dummyjson returns an object with a `products` array property: { products: [...], total: 30, ... }
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts
 
 console.log(products);
  return (
    <div>
      <Container>
        <div className='flex justify-between items-center pt-10 pb-2'> 
          <p>home / shop </p>
          <div className='flex gap-2 items-center'>
          <label for="show">Show :</label>
            <select className='w-15 h-6 border text-center rounded-sm' name="show" >
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>

        </div>
        <div className="flex">
          <div className="w-[20%] pt-5 pb-2">
            <ul className="flex flex-col gap-y-3 text-sm text-black leading-loose font-poppins font-[16px]">
              <li>Woman’s Fashion</li>
              <li>Men’s Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Health & Beauty</li>
              <li>Groceries &</li>
            </ul>
          </div>
          <div className="w-[80%] flex flex-wrap gap-8 pt-5">
            {loading ? (
              <p>Loading products...</p>
            ) : (
              products.map((item) => (
                <Card key={item.id} img1={item.thumbnail} op={item.price} dis={item.discountPercentage} np={(item.price-(item.price*(item.discountPercentage/100))).toFixed(2)} name = {item.title} reviewCount={item.reviews.length} rating={item.rating} />
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopProduct;

