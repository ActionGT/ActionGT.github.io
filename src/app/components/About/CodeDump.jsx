"use client";
import React, { useState } from "react";
import { Hind } from "next/font/google";
import { AboutData } from "@/app/data";
import Image from "next/image";

import './aboutme.css'

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AboutMe() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mapData, setMapData] = useState(AboutData[0]);

  const myFunctions = (data) => {
    setIsFlipped(false);
    setIsFaded(false);
    setMapData(data);
  };

  const handleCardClick = (data, index) => {
    setIsFlipped(true);
    setIsFaded(true);
    setSelectedIndex(index);

    setTimeout(() => myFunctions(data), 600);
  };

  const HandleNext = () => {
    if (selectedIndex < 5) {
      handleCardClick(AboutData[selectedIndex + 1], selectedIndex + 1);
    } else {
      handleCardClick(AboutData[0], 0);
    }
  };
  const HandlePrev = () => {
    if (selectedIndex !== 0) {
      handleCardClick(AboutData[selectedIndex - 1], selectedIndex - 1);
    } else {
      handleCardClick(AboutData[5], 5);
    }
  };

  return (
    <section className="container flex  flex-col m-auto px-5 transform translate-y-[30px] lg:flex-col">
             
    <div className="      ">
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-12">
        {AboutData.map((item, index) => (
          <a key={index}
            onClick={() => handleCardClick(item, index)}
            style={{ boxShadow: "#48AFDE -5px  10px 20px 0px" }}
            className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center  items-center ${
              selectedIndex == index
                ? " -translate-y-24 translate-x-24 bg-[#d14949] scale-120 top-[10px] left-[-110px] invisible"
                : "hover:bg-[#476571] hover:shadow-xl hover:-translate-y-24  bg-white"
            }`}
          >
              
          
                        
            <div className={`w-16 h-16 sm:w-10 sm:h-10  lg:w-16 lg:h-16 ${
              selectedIndex == index
              ? " "
              : ""
            
            }`}>
              <Image 
              height={100}
              width={100}
              src={item.img} alt="internet issues"/>
            </div>
            <h4
              className={`text-center text-sm lg:text-xl   font-recoletaBold transition-colors duration-500 group-hover:text-white text-[#47626D] mt-3 ${
                selectedIndex === index ? "text-white " : ""
              }`}
            >
              {item.title}
            </h4>
  

            <div
              className={`absolute -top-2 -right-2 transform transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-[#476571] flex justify-center items-center font-bold text-white font-recoletaBold text-xl  ${
                selectedIndex === index
                  ? "opacity-100 rotate-12"
                  : "group-hover:rotate-12"
              }`}
            >
              {item.count}
            </div>

          </a>
        ))}
        
      </div>
    </div>

      {/*popup card*/}
    <div className="invisible grid cols-2 gap-2 w-full lg:grid-cols-6  lg:w-full lg:gap-12 ">{/*grid sm:grid-cols-2 w-[200px] xl:grid-cols-6 gap-12 mr-0 lg:mr-10 */}
       
        {AboutData.map((item, index) => (
          <a key={index}
            onClick={() => handleCardClick(item, index)}
            style={{ boxShadow: "#48AFDE -5px  10px 20px 0px" }}
            className={`relative cursor-pointer transition-all transform duration-300 group rounded-xl center p-6 lg:p-10 flex flex-col justify-center  items-center ${
              selectedIndex == index
                ? " -translate-y-24 translate-x-24 bg-[#4991d1] scale-120 bottom-[210px] left-[-110px] visible"
                : "hover:bg-[#476571] hover:shadow-xl hover:-translate-y-24  bg-white"
            }`}
          >
              {selectedIndex === index && (
                <ul
                  class={`${hind.className} font-[100] list-disc text-[#47626D] ml-8 lg:ml-10 text-base lg:text- transition duration-500 transform  opacity-100 undefined undefined`}
                >
                  {mapData?.array?.map((obj) => (
                    <li key={obj} class="mb-2">{obj}</li>
                  ))}
                </ul>
              )}
      
          
       
            <div className={`w-16 h-16 sm:w-10 sm:h-10  lg:w-16 lg:h-16 ${
              selectedIndex == index
              ? " invisible"
              : ""
            
            }`}>
              <Image 
              height={100}
              width={100}
              src={item.img} alt="internet issues"/>
            </div>
            <h4
              className={`text-center text-sm lg:text-xl   font-recoletaBold transition-colors duration-500 group-hover:text-white text-[#47626D] mt-3 ${
                selectedIndex === index ? "text-white " : ""
              }`}
            >
              {item.title}
            </h4>
  

            <div
              className={`absolute -top-2 -right-2 transform transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-xl w-12 h-12 rounded-lg bg-[#476571] flex justify-center items-center font-bold text-white font-recoletaBold text-xl  ${
                selectedIndex === index
                  ? "opacity-100 rotate-12"
                  : "group-hover:rotate-12"
              }`}
            >
              {item.count}
            </div>

          </a>
        ))}
        
      </div>
       {/*popup card*/}


  
  </section>
  );
}


<div className={`w-16 h-16 sm:w-10 sm:h-10 invisible lg:w-16 lg:h-16 ${
  selectedIndex === index ? "visible" : ""
}`}>
  {selectedIndex === index && (
    <ul
      className={`${hind.className} font-[100] list-disc text-[#47626D] lg:ml-10 text-base lg:text- transition duration-500 transform opacity-100 undefined undefined`}
    >
      {mapData.array.map((obj) => (
        <li key={obj} className="mb-[-8px] h-6">{obj}</li>
      ))}
    </ul>
  )}
</div>