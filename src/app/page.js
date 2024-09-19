"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [color, setColor] = useState("white");
  const [yellowcolor, setYellowColor] = useState("white");
  const [greencolor, setGreenColor] = useState("white");
    setInterval(() => {
      if (color === "white" && yellowcolor === "white" && greencolor === "white") {
        setColor("red");
      } else if (color === "red") {
        setColor("white");
        setYellowColor("yellow");
      } else if (yellowcolor === "yellow") {
        setGreenColor("green");
        setYellowColor("white");
        setColor("white");
      } else if (greencolor === "green") {
        setColor("white")
        setYellowColor("white")
        setGreenColor("white")
      }
    }, 3000)



  return (
    <div className="flex items-center justify-center flex-col">
    <div className="mt-[10%] h-[53vh] w-[25vw] flex flex-col justify-between items-center">
      <img className="absolute mt-[-6%]" src="https://images.vexels.com/content/132502/preview/traffic-signal-light-sign-6145f9.png"/>
    <div className={`bg-${color}-500 h-[17vh] w-[17vh] rounded-full`}>Re</div>
    <div className={`bg-${yellowcolor}-500 h-[17vh] w-[17vh] rounded-full`}>yell</div>
    <div className={`bg-${greencolor}-500 h-[17vh] w-[17vh]  rounded-full`}>gre</div>
  </div>
    </div>
  );
}
