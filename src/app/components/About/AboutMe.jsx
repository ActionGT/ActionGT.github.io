"use client";

import React, { useState } from "react";
import { Hind } from "next/font/google";
import { AboutData } from "@/app/data";
import Image from "next/image";

import "./aboutme.css";

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
        id="about"
        className="bg-[#2c3e50] ppt-[250px]  h-full w-full    pb-[100px] lg:h-[600px] "
      >
        <div className="container m-auto ">
          
          <h1 className="absolute landscape:pt-[10px] inset-x-10 top-0 h-26 text-[68px] w-[80%]  overflow-hidden lg:top-[50px] lg:text-center  lg:text-[180px] md:left-30 lg:pl-[200px] lg:pt-[200px]  text-[#bdc3c7]">
            About Me
          </h1>
          <h1 className=" absolute  lg:text-center text-4xl h-[500px]  text-[#a3aab1]    lg:h-[450px] md:px-24  px-5 lg:pl-[350px] lg:pr-[500px]">
            About My Self
          </h1>
          <h4 className=" relative h-[200px] inset-x-4 bottom-[80px] w-full font-[300] lg:text-center lg:pr-[500px]  lg:h-[150px] lg:pl-[350px] md:w-3/4  font-recoleta text-[#f8fdff] text-2xl mb-10 px-5 md:px-24">
            A love of tech meets creativity.
          </h4>
          <section className=" absolute  h-[600px]  pt-40    px-5    md:px-24">
            <p
              className={`w-full  text-[#ffffff] landscape:pt-[100px]   lg:text-center  mr-0 mb-5  font-[200] ${hind.className}`}
            >
              {" "}
              Top Para Lorem ipsum dolor sit amet. Et excepturi assumenda non vitae
              molestiae hic ducimus dolores et fugiat atque vel doloremque alias
              aut quibusdam tempore eum galisum ducimus. Et fuga vitae sit enim
              internos aut soluta facilis est quae provident. Nam itaque nobis
              et iure corporis qui quasi omnis. Et reiciendis dignissimos est
              nihil eaque est saepe dolores ut nemo omnis.
            </p>
            <p
              className={`  text-[#ffffff] mr-0 mb-5 lg:text-center   font-[200] ${hind.className}`}
            >
              {" "}
              Mid Para Et fuga vitae sit enim internos aut soluta facilis est quae
              provident. Nam itaque nobis et iure corporis qui quasi omnis. Et
              reiciendis dignissimos est nihil eaque est saepe dolores ut nemo
              omnis. Et fuga vitae sit enim internos aut soluta facilis est quae
              
            </p>
            <p
              className={` w-full  text-[#ffffff] mr-0 mb-5  lg:pr-[500px] lg:text-center   font-[200] ${hind.className}`}
            >
              {" "}
              Lower Para Et fuga vitae sit enim internos aut soluta facilis est quae
              provident. Nam itaque nobis et iure corporis qui quasi omnis. Et
              reiciendis dignissimos est nihil eaque est saepe dolores ut nemo
              omnis.
            </p>
          </section>
        </div>
      </div>

      <div
        style={{
          backgroundImage: "bg-[#000000])",
          width: "100%",
        }}
        className="lg:-mt-60"
      >
        <section className="container flex  flex-col m-auto px-5 transform translate-y-[-5px] lg:translate-y-[30px] lg:flex-col">
          <div className=" container m-auto">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 ">
              {AboutData.map((item, index) => (
                <a
                  key={index}
                  onClick={() => handleCardClick(item, index)}
                  style={{ boxShadow: "#7f8c8d -5px  10px 20px 0px" }}
                  className={`relative cursor-pointer  transition-all transform duration-300 group rounded-xl center p-6 landscape:p-20 lg:p-10 flex flex-col justify-center  items-center ${
                    selectedIndex == index
                      ? "    bg-[#7f8c8d]  translate-y-[-30px] scale-110  visible"
                      : "hover:bg-[#bdc3c7] hover:shadow-xl  "
                  }`}
                >
                  <div
                    className={`w-16 h-16 sm:w-10 sm:h-10   ${
                      selectedIndex !== index ? "invisible" : ""
                    } lg:w-16 lg:h-16`}
                  >
                    {selectedIndex === index && (
                      <ul
                        className={`${hind.className}  font-[100] list-disc text-[#ffffff] lg:ml-10 text-base lg:text- transition duration-500 transform  undefined undefined`}
                      >
                        {mapData.array.map((obj) => (
                          <li
                            key={obj}
                            className=" h-9 text-[14px] max-h-[33px]   "
                          >
                            {obj}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div
                    className={` w-46 h-46 sm:w-10 sm:h-10  lg:w-16 lg:h-16 ${
                      selectedIndex == index ? "  invisible" : ""
                    }`}
                  >
                    <Image
                      height={350}
                      width={350}
                      src={item.img}
                      alt="internet issues"
                    />
                  </div>
                  <h4
                    className={`text-center text-sm lg:text-xl   font-recoletaBold transition-colors duration-500 group-hover:text-white text-[#47626D] mt-3 ${
                      selectedIndex === index ? "text-white invisible" : ``
                    }`}
                  >
                    {item.title}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
