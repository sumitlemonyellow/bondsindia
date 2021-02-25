import React, {Component} from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './bonds.css';

export default function Bonds() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      
    }
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="./images/bonds1.svg" />
        <h1>Real-Time Trading</h1>
        <h4>Get the best price for your deals</h4>
      </div>
      <div>
        <img src="./images/bonds2.svg" />
        <h1>Real-Time Trading</h1>
        <h4>Get the best price for your deals</h4>
      </div>
      <div>
        <img src="./images/bonds3.svg" />
        <h1>Quick Onboarding</h1>
        <h4>Get onboarded as quick as a flash</h4>
      </div>
    </Slider>
  );
}
