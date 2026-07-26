import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroimg from '../assets/heroimg.png'

function TestCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider.default {...settings}>
      <div>
        <img className='w-223 h-86 pl-10 mt-10 ' src={heroimg} alt="" />
      </div>
      <div>
        <img className='w-223 h-86 pl-10 mt-10 ' src={heroimg} alt="" />
      </div>
      <div>
        <img className='w-223 h-86 pl-10 mt-10 ' src={heroimg} alt="" />
      </div>
      <div>
        <img className='w-223 h-86 pl-10 mt-10 ' src={heroimg} alt="" />
      </div>
    </Slider.default>
  );
}

export default TestCarousel;