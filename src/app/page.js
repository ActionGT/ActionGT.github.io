"use client";
import Image from 'next/image'
import HomeComponent from './components/Home/HomeComponent';
import Portfolio from './components/Portfolio/Portfolio';
// import Port3D from './components/Portfolio/Port3D';
import About from './components/About/AboutMe';
// import Game from './components/Game/GameMain';
// import UiScene from './components/Home/HomeTestScreen';
// import Header from './components/Header/Header';
// import Test from "./components/About/TestTail"
import { Hind } from "next/font/google";
// import mySlider from './components/SliderCard/MySlider';
// import SliderCard from "./components/SliderCard/sliderCard";
// import { Canvas } from "@react-three/fiber";


const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});



export default function Site(){
  return(
    <main className=" min-h-screen relative">
       <HomeComponent/>
     
          <About/> 
       <Portfolio/>
   {/* <UiScene/> 
   <ComputersCanvas/>  */}
          
       {/* <Test/>  */}

       {/* <Port3D/> */}
    </main>

       
       
    
       
    


    
  )
}
