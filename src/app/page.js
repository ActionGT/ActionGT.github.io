"use client";
import Image from 'next/image'
import HomeComponent from './components/Home/HomeComponent';
//import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/AboutMe';
import Game from './components/About/GameMain';
//import TestApp from './components/Home/HomeTestScreen';
// import Header from './components/Header/Header';
import Test from "./components/About/TestTail"
import { Hind } from "next/font/google";


const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className=" min-h-screen relative">
      {/* <HomeComponent/> */}
       {/* <TestApp/>  */}
       {/* <Portfolio/> */}
       <About/> 
       {/* <Test/>  */}

       {/* <Game/> */}
     
      <div
        className="mt-0 pt-5 -mb-40"
        id="portfolio"
        style={{
          backgroundImage:
          "linear-gradient(-62deg, #EEF7FB 0 50%,  white 0% 100%)",
          width: "100%",
        }}
      >
      <div className='container m-auto '>
      <p
            className="text-[300px]  text-[#468fb4] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
            style={{ transform: "translate(0px,-20px)" }}
          >
          
          </p>
          <div className="" style={{ transform: "translate(0px, -290px)" }}>
          <p className="text-[#48AFDE]  md:pl-[80px] px-5 font-extrabold text-5xl">
            
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
            ></p>
          </div>
      </div>
       
      </div>
      
   
   
    </main>
  )
}
