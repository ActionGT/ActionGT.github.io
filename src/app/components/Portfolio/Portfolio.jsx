import React from "react";
import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Portfolio() {
  return (
    <div
      className="mt-0 pt-5 -mb-40"
      id="portfolio"
      style={{
        backgroundImage:
          "linear-gradient(-62deg, #EEF7FB 0 50%,  white 0% 100%)",
        width: "100%",
      }}
    >
      <div className="container m-auto ">
        <p
          className="text-[300px]  text-[#468fb4] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
          style={{ transform: "translate(0px,-20px)" }}
        >Test1</p>
        <div className="" style={{ transform: "translate(0px, -290px)" }}>
          <p className="text-[#48AFDE]  md:pl-[80px] px-5 font-extrabold text-5xl">Test2</p>
          <p
            className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
          >Test3</p>
        </div>
      </div>
    </div>
  );
}
