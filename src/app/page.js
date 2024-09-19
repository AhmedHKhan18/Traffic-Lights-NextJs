"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [color, setColor] = useState("invisible");
  const [yellowcolor, setYellowColor] = useState("invisible");
  const [greencolor, setGreenColor] = useState("invisible");
  function lights(){  
  setInterval(() => {
      if(color === "invisible" && yellowcolor === "invisible"){
        setColor("visible")
        setYellowColor("invisible")
        setGreenColor("invisible")
      }else if(yellowcolor === "invisible"){
        setYellowColor("visible")
        setColor("invisible")
        setGreenColor("invisible")
      }else if(greencolor === "invisible"){
        setGreenColor("visible")
        setColor("invisible")
        setYellowColor("invisible")
      }
    }, 3000)
  }
  lights()


  return (
    <div className="flex items-center min-h-screen justify-center flex-col">
    <div className="mt-[10%] h-[53vh] w-[25vw] flex flex-col justify-between items-center">
      <img className="absolute mt-[-6%]" src="https://images.vexels.com/content/132502/preview/traffic-signal-light-sign-6145f9.png"/>
    <div className={`bg-red-500 h-[17vh] w-[17vh] rounded-full ${color}`}>Re</div>
    <div className={`bg-yellow-500 h-[17vh] w-[17vh] rounded-full ${yellowcolor}`}>yell</div>
    <div className={`bg-green-500 h-[17vh] w-[17vh]  rounded-full ${greencolor}`}>gre</div>
  </div>
    </div>
  );
}
