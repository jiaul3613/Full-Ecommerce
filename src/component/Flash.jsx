import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../assets/frame611.png';
import img1 from '../assets/Frame613.png'
import img2 from '../assets/Frame614.png'
import img3 from '../assets/Frame615.png'

import Cart from "./Cart";
import Container from "./Container";
// Install react-icons if not installed: npm install react-icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; 

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-gray-300"
    >
      <FaAngleRight size={20} color="#000" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gray-200 p-2 rounded-full hover:bg-gray-300"
    >
      <FaAngleLeft size={20} color="#000" />
    </div>
  );
}

function Flash() {
  const settings = {
    // dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative mt-10 ml-2">
      <Container> 
        <Slider.default {...settings}>
          <div><Cart name='HAVIT HV-G92 Gamepad' img={img} dis={'-40%'} price='120' oldp='160' /></div>
          <div><Cart name='HAVIT HV-G92 Gamepad' img={img1} dis={'-40%'} price='120' oldp='160' /></div>
          <div><Cart name='HAVIT HV-G92 Gamepad' img={img2} dis={'-40%'} price='120' oldp='160' /></div>
          <div><Cart name='HAVIT HV-G92 Gamepad' img={img3} dis={'-40%'} price='120' oldp='160' /></div>
          <div><Cart name='HAVIT HV-G92 Gamepad' img={img} dis={'-40%'} price='120' oldp='160' /></div>
          <div><Cart name='HAVIT HV-G92 Gamepad' img={img} dis={'-40%'} price='120' oldp='160' /></div>
        </Slider.default>
      </Container>
    </div>
  );
}

export default Flash;