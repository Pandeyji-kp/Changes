"use client"; // For Next.js App Router

import React from "react";
import Slider from "react-slick";

const SliderComponent = () => {
  const images = [
    "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg",
    "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg",
    "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
