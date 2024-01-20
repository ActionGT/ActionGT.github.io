"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { Canvas } from "@react-three/fiber";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Raleway } from "next/font/google";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Typewriter from "typewriter-effect";


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
        style={{
          backgroundImage: "linear-gradient(to right,white 15%, #97bdde 115%)",

          // backgroundImage: `url("https://www.transparenttextures.com/patterns/axiom-pattern.png")`,
          // // backgroundColor: "#7dc0d1",

          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="bg-white flex flex-col mx-auto justify-center col-span-12 md:col-span-5 md:bg-transparent">
          <div className="container m-auto ">
            <div className="grid grid-cols-12 ">
              {/* buttons and text */}

              <div className="bg-white d-flex flex-column mx-auto fullscreen col-span-12 md:col-span-12 md:bg-transparent">
                <div className="container m-auto">
                  <div className="lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center">
                    <p
                      className={`text-[#48AFDE] text-3xl md:text-base lg:text-2xl ${raleway.className}`}
                    >
                      Hello
                    </p>
                    <h2
                      className="text-10 text-uppercase fw-600 mb-4 wow fadeInUp"
                      style={{ color: "white" }}
                    ></h2>
                    <h1 className={`text-[#223740] font-recoletaBlack text-7xl md:text-6xl lg:text-7xl xl:text-5xl mt-5 md:mt-3 ${raleway.className}`}>
                      I'm Gary
                    </h1>
                    <h2
                      className={`text-[#223740] font-recoletaBlack text-7xl md:text-6xl lg:text-7xl xl:text-5xl mt-5 md:mt-3`}
                    >
                      <Typewriter
                        options={{
                          strings: [
                            "Full Stack Developer",
                            "Music Producer",
                            "AI Engineer",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                        className={`text-[#54b1da]  text-7xl md:text-6xl lg:text-7xl xl:text-5xl mt-5 md:mt-3 ${raleway.className}`}
                      />
                    </h2>
                    <a
                      href="/#portfolio"
                      className={`inline-block bg-[#42a1cd] transition-all duration-300 ease-in-out rounded-lg  text-white hover:bg-[#223740] hover:shadow-lg transform hover:-translate-y-1 py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 xl:mt-10 ${raleway.className}`}
                    >
                      Projects
                    </a>
                    <a
                      href="Gary Tracey CV.pdf"
                      download="Gary Tracey CV.pdf"
                      className={`ml-10 inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg  text-white hover:bg-[#48AFDE] hover:shadow-lg transform hover:-translate-y-1 py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 xl:mt-10 ${raleway.className}`}
                    >
                      Curiculum vitae
                    </a>
                  </div>
                </div>
              </div>

              {/* image */}
              <div className="md:col-span-12 col-span-12  md:pt-[5px] pt-[5px] md:bg-transparent bg-[#d9eef7]">
                <div
                  className="m-auto  container"
                  style={{ width: "100%", height: "100%" }}
                >
                  <Spline
                    className=""
                    decoding="async"
                    data-nimg="intrinsic"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                    // scene="https://prod.spline.design/N78eLVXfJNc2BVdS/scene.splinecode"
                    scene="https://prod.spline.design/hDWyFgCqKa11gYrg/scene.splinecode"
                  />
                </div>
              </div>
            </div>

            {/* slider */}
            <div className="container m-auto absolute">
              <div className="px-3">
                <div
                  className="relative max-w-sm bottom-[70px] md:max-w-xl lg:max-w-5xl xl:max-w-6xl lg:px-14 px-5 overflow-auto mx-auto bg-white rounded-2xl z-20 "
                  style={{
                    boxShadow: "#48AFDE -10px 25px 50px 10px",
                  }}
                >
                  <div className="lg:py-10 py-10 md:py-6 cursor-all-scroll">
                    <Slider {...settings}>
                      <Image
                        height={8}
                        width={50}
                        src="/mongodb.png"
                        alt=""
                        className="h-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer "
                      />
                      <Image
                        height={8}
                        width={50}
                        src="/expressjs.png"
                        alt=""
                        className="h-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer "
                      />
                      <Image
                        height={8}
                        width={50}
                        src="/reactjs.png"
                        alt=""
                        className="h-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer  "
                      />
                      <Image
                        height={8}
                        width={50}
                        src="/nextjs.png"
                        alt=""
                        className="h-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer "
                      />
                      <Image
                        height={8}
                        width={50}
                        src="/docker.png"
                        alt=""
                        className="h-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer "
                      />
                      <Image
                        height={8}
                        width={50}
                        src="/expressjs.png"
                        alt=""
                        className="h-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer "
                      />
                      <Image
                        height={8}
                        width={50}
                        src="/nodejs.png"
                        alt=""
                        className="h-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 cursor-pointer "
                      />
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
