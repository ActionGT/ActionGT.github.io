"use client";
import Image from 'next/image'
import HomeComponent from './components/Home/HomeComponent';
 import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/AboutMe';
import Game from './components/About/GameMain';
import Scene from './components/Home/HomeTestScreen';
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
       
       <Portfolio/>
       {/* <About/>  */}
       {/* <Test/>  */}

       {/* <Game/> */}
     
   
      
   
   
    </main>
  )
}
