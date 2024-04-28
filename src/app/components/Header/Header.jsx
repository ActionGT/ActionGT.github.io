"use client";
import React, { useEffect, useState } from "react";
import { reactProductionProfiling } from "../../../../next.config";
import Drawer from "./DiagDraw";
import Image from "next/image";
import "../Header/DiagDraw.css";
import Spline from "@splinetool/react-spline";

export default function Header() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <div className={`diagonal-drawer ${isOpen ? "open" : ""}`}>
        <Drawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedIndex1={selectedIndex1}
          setSelectedIndex1={setSelectedIndex1}
        />
      </div>

      <header
        className={`${
          isScrolled ? "headerShow" : ""
        } w-full fixed top-0 z-50 transition-all duration-500`}
        style={{ backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
        boxShadow: isScrolled ? "#ecf0f1 -10px 25px 50px 10px" : "none"
      }}
      >
        <div className="relative">
          <div
            onClick={openDrawer}
            className="z-30 absolute cursor-pointer w-14 h-14 lg:w-24 lg:h-24 bg-[#2c3e50] flex justify-center items-center rounded-br-3xl"
          >
            <div className="relative w-7 lg:w-10 h-7 lg:h-10 flex justify-center items-center">
            <Spline scene="https://prod.spline.design/TojH3MU1O82WLNBM/scene.splinecode" />
   
            </div>
          </div>
        </div>

        <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto ">
          <ul className="flex font-recoletaBlack flex-row items-center h-24">
            <li className="group text-2xl relative font-bold mr-20">
              {/* {selectedIndex1 === 0 ? (
                <span className="menu-effect  transform opacity-60 -rotate-0 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )} */}
              <a
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-[#ffffff]" : "text-[#212952]"
                } text-[#313f48] group-hover:text-white`}
                href="/#home"
                onClick={() => setSelectedIndex1(0)}
                style={{ 
                  color: selectedIndex1 === 0 ? "white" : "#212952",
                  backgroundColor: selectedIndex1 === 0 ? "#212952" : "transparent",
                  padding: selectedIndex1 === 0 ? "10px 20px" : "0px",
                  borderRadius: selectedIndex1 === 0 ? "20px" : "0px",
                  color: isScrolled ? "#7093a9" : "text-bold" 
              }}
              >
                Home
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {/* {selectedIndex1 === 1 ? (
                <span className="menu-effectP  transform opacity-60 -rotate-0 group-hover:-rotate-12 group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effectP  transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )} */}
              <a
              className={`menu-item ${
                selectedIndex1 === 1 ? "text-[#ffffff]" : "text-[#212952]"
              } text-[#313f48] group-hover:text-white`}
                href="/#portfolio"
                onClick={() => setSelectedIndex1(1)}
                style={{ 
                  color: selectedIndex1 === 1 ? "white" : "#212952",
                  backgroundColor: selectedIndex1 === 1 ? "#212952" : "transparent",
                  padding: selectedIndex1 === 1 ? "10px 20px" : "0px",
                  borderRadius: selectedIndex1 === 1 ? "20px" : "0px",
                  color: isScrolled ? "#7093a9" : "text-bold" 
              }}
              >
                Portfolio
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
          
              <a
                 className={`menu-item ${
                  selectedIndex1 === 2 ? "text-[#ffffff]" : "text-[#212952]"
                } text-[#313f48] group-hover:text-white`}
                href="/#about"
                onClick={() => setSelectedIndex1(2)
                
                }
                style={{ 
                  color: selectedIndex1 === 2 ? "white" : "#212952",
                  backgroundColor: selectedIndex1 === 2 ? "#212952" : "transparent",
                  padding: selectedIndex1 === 2 ? "10px 20px" : "0px",
                  borderRadius: selectedIndex1 === 2 ? "20px" : "0px",
                  color: isScrolled ? "#7093a9" : "text-bold" 

              }}
              >
                AboutMe
              </a>
            </li>
            <li className="group text-2xl relative font-bold mr-20">
              {selectedIndex1 === 3 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
                ) : (
                  <span className="menu-effect transform opacity-0 rotate-12 group-hover:-rotate-12 group-hover:opacity-100"></span>
              )}
              {/* <Link className={`menu-item ${selectedIndex1 === 3 ? "text-black":""} text-[#666d47] group-hover:text-black`}
                  href="/page/contactme"
                  onClick={()=> setSelectedIndex1(3)}
                  >
                    Hire me
                  </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}
