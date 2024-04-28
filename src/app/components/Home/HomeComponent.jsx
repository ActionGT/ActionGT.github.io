"use client";
import React, { useEffect, useRef } from "react";
// import Slider from "react-slick";
// import { Canvas } from "@react-three/fiber";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Raleway } from "next/font/google";
// import Image from "next/image";
import Spline from "@splinetool/react-spline";
// import Typewriter from "typewriter-effect";


//import useThreeScene from "../Animations/threeTest";

const raleway = Raleway({
  subsets: ["latin"],
  weight: [ "300", "400","500","600","700"]
});
export default function HomeComponent() {
  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>

      <div
        id="home"
        className="bg-[#ecf0f1] h-[750px] w-[400px]   lg:h-[100%]  lg:w-[100%]"
      

      >
          <Spline 
        scene="https://prod.spline.design/3gQ8LsPr-eKOrkpR/scene.splinecode"
        />
        
     
      </div>
    </React.Fragment>
  );
}
