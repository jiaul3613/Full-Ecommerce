import { useState, useEffect, useRef } from "react";
import Container from "../component/Container";
import Hero from "../component/Hero";
import Today from "../component/Today";
import Card from "../component/Card";
import Category from "../component/Category";
import BestSale from "../component/BestSale";
import Music from "../component/Music";
import NewArrival from "../component/NewArrival";
import Product from "../component/Product";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ref to target the scrollable products container
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  // Handler to scroll left or right
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth; // Scroll by full container width
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Container>
        <Hero />
        
        {/* Section Header with Left & Right Navigation Arrows */}
        <div className="flex justify-between items-center my-4">

          <Today />

          <div className="flex gap-2 ">
            <button
              onClick={() => handleScroll("left")}
              className="p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Scroll left"
            >
              <FaArrowLeft className="text-lg text-black" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Scroll right"
            >
              <FaArrowRight className="text-lg text-black" />
            </button>
          </div>
        </div>

        {/* Scrollable Container showing 4 cards per row */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((item) => (
            <div key={item.id} className="w-[calc((100%-48px)/3)] shrink-0 ">
              <Card
                productdtl={item}
                img1={item.thumbnail}
                op={item.price}
                dis={item.discountPercentage}
                np={(
                  item.price -
                  item.price * (item.discountPercentage / 100)
                ).toFixed(2)}
                title={item.title}
                reviewCount={item.reviews?.length || 0}
                rating={item.rating}
              />
            </div>
          ))}
        </div>

        <Category />
        <BestSale />
        <Music />
        <Product />
        <NewArrival />
      </Container>
    </div>
  );
};

export default Home;