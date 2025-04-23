import React from "react";

import workIcon from "./assets/workicon.svg";
import chillIcon from "./assets/chillicon.svg";
import thrillIcon from "./assets/thrillicon.svg";

import union from "./assets/Union.svg";
import whatKindOf from "./assets/what-kind-of.svg";
import plans from "./assets/plans.svg";
import areLinedUp from "./assets/are-lined-up.svg";

export default function Plans({ onSelectPlan }) {
  return (
    <div className="relative bg-[#143768] font-sans min-h-screen max-h-screen overflow-hidden flex justify-center items-center">
      <div className="relative w-full max-w-[414px] aspect-[414/896]">

        {/* Cloud background - stays fixed */}
        <img
          src={union}
          alt="Cloud background"
          className="fixed top-[120px] left-0 w-full h-auto object-cover z-0"
        />

        {/* Header - brought even further down */}
        <div className="flex flex-col items-center justify-center w-full z-10 relative mt-[5vh] mb-[4vh]">
          <img src={whatKindOf} alt="What kind of" className="w-[20%] mb-[2vh]" />
          <img src={plans} alt="Plans" className="w-[120px] mb-[2vh]" />
          <img src={areLinedUp} alt="Are lined up?" className="w-[20%]" />
        </div>

        {/* Cards - same as before */}
        <div className="absolute left-0 top-0 w-full h-full z-10">
          <button
            onClick={() => onSelectPlan("Work")}
            className="absolute left-[7.9%] w-[84.1%] h-[15.6%] top-[35%] rounded-[20px] bg-cover bg-center flex flex-col items-center justify-center transition-transform hover:scale-105"
            style={{
              backgroundImage: `url(${require('./assets/workcard.svg')})`,
              animation: "pulseGlow 3s ease-in-out infinite",
            }}
          >
            <img src={workIcon} alt="Work" className="w-[72px] h-[72px] mb-[0.5vh] object-contain" />
            <span className="text-white text-sm font-bold uppercase tracking-widest text-center drop-shadow-sm">
              WORK
            </span>
          </button>

          <button
            onClick={() => onSelectPlan("Chill")}
            className="absolute left-[7.9%] w-[84.1%] h-[15.6%] top-[54%] rounded-[20px] bg-cover bg-center flex flex-col items-center justify-center transition-transform hover:scale-105"
            style={{
              backgroundImage: `url(${require('./assets/chillcard.svg')})`,
              animation: "pulseGlow 3s ease-in-out infinite",
            }}
          >
            <img src={chillIcon} alt="Chill" className="w-[72px] h-[72px] mb-[0.5vh] object-contain" />
            <span className="text-white text-sm font-bold uppercase tracking-widest text-center drop-shadow-sm">
              CHILL
            </span>
          </button>

          <button
            onClick={() => onSelectPlan("Thrill")}
            className="absolute left-[7.9%] w-[84.1%] h-[15.6%] top-[73%] rounded-[20px] bg-cover bg-center flex flex-col items-center justify-center transition-transform hover:scale-105"
            style={{
              backgroundImage: `url(${require('./assets/thrillcard.svg')})`,
              animation: "pulseGlow 3s ease-in-out infinite",
            }}
          >
            <img src={thrillIcon} alt="Thrill" className="w-[72px] h-[72px] mb-[0.5vh] object-contain" />
            <span className="text-white text-sm font-bold uppercase tracking-widest text-center drop-shadow-sm">
              THRILL
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
