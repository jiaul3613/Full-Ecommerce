import React, { useState, useEffect } from 'react';
import Container from './Container';
import Card from './Card';

const ShopProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, []);

  // Handle dropdown change for items per page
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing limit
  };

  // Pagination Calculations
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Container>
        {/* Header section */}
        <div className='flex justify-between items-center pt-10 pb-2'> 
          <p>home / shop</p>
          <div className='flex gap-2 items-center'>
            <label htmlFor="show">Show :</label>
            <select 
              className='w-15 h-6 border text-center rounded-sm cursor-pointer' 
              name="show"
              id="show"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex">
          {/* Sidebar */}
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

          {/* Product Grid & Pagination Controls */}
          <div className="w-[80%] flex flex-col justify-between pt-5">
            <div className="flex flex-wrap gap-8">
              {loading ? (
                <p>Loading products...</p>
              ) : (
                currentProducts.map((item) => (
                  <Card 
                    key={item.id} 
                    img1={item.thumbnail} 
                    op={item.price} 
                    dis={item.discountPercentage} 
                    np={(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)} 
                    name={item.title} 
                    reviewCount={item.reviews?.length || 0} 
                    rating={item.rating} 
                  />
                ))
              )}
            </div>

            {/* Pagination Controls */}
            {!loading && totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 py-8">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 border rounded text-sm ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                  }`}
                >
                  Prev
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 border rounded text-sm ${
                      currentPage === page 
                        ? 'bg-black text-white' 
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 border rounded text-sm ${
                    currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopProduct;