import React from "react";
import { Hind } from "next/font/google";
//import MySlider from "../OrigSliderCard/MySlider";
//  import MySlider from "../SliderCard/MySlider";
 import Spline from '@splinetool/react-spline';
//  import Scene from './Port3D';

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

  export default function Portfolio() {
    return (
      
      <>
      {/* <div
      style={{
        backgroundImage: "bg-[#000000])",
        width: "100%",
      }}
      className="bg-[#2c3e50] ppt-[250px]  relative h-162 w-162   mt-1  pb-[100px] lg:pb-[600px] lg:h-[800px]"
      >
       
       <div className="container m-auto">
          <p
            className="text-[300px] lg:text-[150px] text-[#F7FBFD]  md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
            
          >
            Portfolio
          </p>
          
          <div className="" style={{ transform: "translate(0px, -290px)" }}>
            <p className="text-[#48AFDE]  md:pl-[80px] px-5 font-extrabold text-5xl">
              Recent Works
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
            >
              Lorem ipsum dolor sit amet. Et excepturi assumenda non vitae
              molestiae hic ducimus dolores et fugiat atque vel doloremque alias
              aut quibusdam tempore eum galisum ducimus. Et fuga vitae sit enim
              internos aut soluta facilis est quae provident. Nam itaque nobis
              et iure corporis qui quasi omnis. Et reiciendis dignissimos est
              nihil eaque est saepe dolores ut nemo omnis.
            </p>
          </div>
       
        </div>
     
        
  
      </div> */}
      
      {/*  bg-[#ecf0f1] */}
      <div
        id="portfolio"
      className="  bg-[#ecf0f1]  flex flex-wrap content-center pt-[120px] lg:h-[100%]  lg:w-[100%]   " 
      
      >
      
          <div className="container m-auto  ">
          
      
            <h1 className=" absolute text-[60px] h-[200px] mb-[550px] lg:mb-[300px] pl-[70px] w-[100%] text-[#47626D]  md:pl-[50px] lg:px-5 lg:pb-[700px] lg:text-[150px] lg:max-w-[750px] lg:w-[100%] ">
              Portfolio
            </h1>
            <p className="text-[#48AFDE] h-[50px] text-3xl mb-[500px] md:pl-[80px] lg:pr-[200px]  font-extrabold lg:text-5xl">
                Recent Works
              </p>
      
              <p
                className={`absolute  pl-[60px] lg:pr-[100px] mb-[250px] h-[100px] max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
              >
                Lorem ipsum dolor sit amet. 
                Et excepturi assumenda 
                non vitae molestiae
                hic ducimus dolores 
                et fugiat atque vel 
                doloremque alias aut quibusdam
                tempore eum galisum ducimus. Et fuga vitae sit enim internos aut soluta
                facilis est quae provident. Nam itaque nobis et iure corporis qui quasi
                omnis. Et reiciendis dignissimos est nihil eaque est saepe dolores ut
                nemo omnis.
                Lorem ipsum dolor sit amet. 
                Et excepturi assumenda 
                non vitae molestiae
                hic ducimus dolores 
                et fugiat atque vel 
                doloremque alias aut quibusdam
                tempore eum galisum ducimus. Et fuga vitae sit enim internos aut soluta
                facilis est quae provident. Nam itaque nobis et iure corporis qui quasi
                omnis. Et reiciendis dignissimos est nihil eaque est saepe dolores ut
                nemo omnis.
                
              </p>
       
          </div>
          <div className="relative w-[390px] landscape:w-[100%] lg:w-[100%] h-[500px]  bg-[#ffffff] lg:h-[1000px]    ">
      <Spline scene="https://prod.spline.design/jAn7JG75oyx2eNA9/scene.splinecode" />
      </div>
       
      </div>
      
    
     
      
      </>
      
      
    );
  }

