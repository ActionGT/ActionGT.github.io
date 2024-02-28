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
  const [selectedIndex, setSelectedIndex] = useState(-1);
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

  

  const [isButtonClicked, setIsButtonClicked] = useState(false);

            const handleButtonClick = () => {
              setIsButtonClicked(!isButtonClicked);
            };

  return (
    <React.Fragment>
      <div
        id="about-me-component"
        className="bg-[#000000] ppt-[250px]  relative h-162 w-162   mt-1  pb-[100px] lg:pb-[600px] lg:h-[800px]"
      >
        <div className="container m-auto ">
        <h1 className="absolute inset-x-10 top-0 h-26 text-[68px] w-[80%]  overflow-hidden   lg:text-[140px] md:left-30   text-[#EAF7FC]">
            About Me
          </h1>
          <h1 className=" absolute text-4xl  h-[500px] bottom-[170px] text-[#48AFDE]  -mt-80 lg:left-0  lg:h-[450px] md:px-24 px-5">
            About My Self
          </h1>
          <h4 className=" relative h-[200px] inset-x-4 bottom-[80px] w-full font-[300]   lg:h-[450px] lg:left-0 md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#f8fdff] text-2xl mb-10 px-5 md:px-24">
            A love of tech meets creativity. 
          </h4>
          <section className=" absolute  h-[600px]  pt-40    px-5 lg:flex lg:flex-row  md:px-24">
            <p
              className={`w-full lg:w-1/3 text-[#ffffff] mr-0 mb-5  lg:mr-4 font-[200] ${hind.className}`}
            >
              {" "}
              Lorem ipsum dolor sit amet. Et excepturi assumenda non vitae
              molestiae hic ducimus dolores et fugiat atque vel doloremque alias
              aut quibusdam tempore eum galisum ducimus. Et fuga vitae sit enim
              internos aut soluta facilis est quae provident. Nam itaque nobis
              et iure corporis qui quasi omnis. Et reiciendis dignissimos est
              nihil eaque est saepe dolores ut nemo omnis.
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#ffffff] mr-0 mb-5  lg:mr-4 font-[200] ${hind.className}`}
            >
              {" "}
              Et fuga vitae sit enim internos aut soluta facilis est quae
              provident. Nam itaque nobis et iure corporis qui quasi omnis. Et
              reiciendis dignissimos est nihil eaque est saepe dolores ut nemo
              omnis. Et fuga vitae sit enim internos aut soluta facilis est quae
              provident.
            </p>
            <p
              className={`w-full lg:w-1/3 text-[#ffffff] mr-0 mb-5  lg:mr-4 font-[200] ${hind.className}`}
            >
              {" "}
              Et fuga vitae sit enim internos aut soluta facilis est quae
              provident. Nam itaque nobis et iure corporis qui quasi omnis. Et
              reiciendis dignissimos est nihil eaque est saepe dolores ut nemo
              omnis.
            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(45deg, #0c2461  10%,#48AFDE 30%)",
          width: "100%",
        }}
        className="lg:-mt-60"
      >
        <section className="container flex  flex-col m-auto px-5 transform translate-y-[30px] lg:flex-col"> 
             
          <div className=" container m-auto">
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
          {/* <div className="invisible grid cols-2 gap-2 w-full lg:grid-cols-6  lg:w-full lg:gap-12 ">
             
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
              
            </div> */}
             {/*popup card*/}


        
        </section>
    
      </div>
      
    </React.Fragment>
  );
}
