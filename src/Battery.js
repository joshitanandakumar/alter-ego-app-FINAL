import React, { useState } from "react";

import howSThat from "./assets/howsthat.svg";
import looking from "./assets/looking.svg";
import socialBattery from "./assets/socialbatFINAL.svg";
import union from "./assets/Union.svg";
import arrow from "./assets/arrow.svg";

export default function Battery({ onEnergySelect }) {
  const [sliderValue, setSliderValue] = useState(0); // default to medium

  const getLabel = () => {
    if (sliderValue < 33) return "Low";
    if (sliderValue < 66) return "Medium";
    return "High";
  };

  return (
    <div className="relative bg-[#d3e0ff] font-sans min-h-screen max-h-screen overflow-hidden flex justify-center items-center">
      <div className="relative w-full max-w-[414px] aspect-[414/896]">

        {/* Cloud background */}
        <img
          src={union}
          alt="Cloud background"
          className="fixed top-[130px] left-0 w-full h-auto object-cover z-0"
        />

        {/* Header text */}
        <div className="flex flex-col items-center justify-center w-full z-10 relative mt-[7vh] mb-[5vh] space-y-4">
          <img src={howSThat} alt="How's that" className="w-[17%]" />
          <img src={socialBattery} alt="Social Battery" className="w-[85%]" />
          <img src={looking} alt="Looking" className="w-[14%]" />
        </div>

        {/* Slider + label + button */}
        <div className="z-10 relative flex flex-col items-center justify-center mt-[21vh]">
        <div className="flex justify-center items-end h-[260px]">
        <input
  type="range"
  min="0"
  max="100"
  step="1"
  value={sliderValue}
  onChange={(e) => setSliderValue(parseInt(e.target.value))}
  className="vertical-slider"
  style={{
    '--fill-level': `${sliderValue}%`
  }}
/>

          </div>

          <div className="mt-4 text-[black] font-bold text-lg font-major-mono">
  {getLabel().toLowerCase()}
</div>



<img
  src={arrow}
  alt="Next"
  onClick={() => onEnergySelect(getLabel())}
  className="w-8 h-8 mt-24 mx-auto cursor-pointer transition-transform hover:scale-110 active:scale-95 bounce"
/>



        </div>
      </div>
    </div>
  );
}
