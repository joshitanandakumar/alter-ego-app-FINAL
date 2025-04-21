import React from "react";

import sunnyIcon from "./assets/clear-day.svg";
import rainyIcon from "./assets/heavy-showers.svg";
import foggyIcon from "./assets/partly-cloudy-night.svg";
import cloudyIcon from "./assets/cloudy.svg";
import breezyIcon from "./assets/group-21.svg";
import coldIcon from "./assets/heavy-snow.svg";

import sunnyCard from "./assets/sunnycard.svg";
import rainyCard from "./assets/rainycard.svg";
import foggyCard from "./assets/foggycard.svg";
import cloudyCard from "./assets/cloudycard.svg";
import breezyCard from "./assets/breezycard.svg";
import coldCard from "./assets/coldcard.svg";
import unionIcon from "./assets/Union.svg";

const weatherOptions = [
  { name: "Sunny", icon: sunnyIcon, background: sunnyCard },
  { name: "Cloudy", icon: cloudyIcon, background: cloudyCard },
  { name: "Rainy", icon: rainyIcon, background: rainyCard },
  { name: "Breezy", icon: breezyIcon, background: breezyCard },
  { name: "Foggy", icon: foggyIcon, background: foggyCard },
  { name: "Cold", icon: coldIcon, background: coldCard },
];

// Figma size: 414 x 896
const cardPositions = {
  Sunny: {
    top: (217 / 896) * 100 + "%",
    left: (17.5 / 414) * 100 + "%",
    width: (176 / 414) * 100 + "%",
    height: (231 / 896) * 100 + "%",
  },
  Cloudy: {
    top: (180 / 896) * 100 + "%",
    left: (218.5 / 414) * 100 + "%",
    width: (176 / 414) * 100 + "%",
    height: (194 / 896) * 100 + "%",
  },
  Rainy: {
    top: (485 / 896) * 100 + "%",
    left: (17.5 / 414) * 100 + "%",
    width: (176 / 414) * 100 + "%",
    height: (167 / 896) * 100 + "%",
  },
  Breezy: {
    top: (403 / 896) * 100 + "%",
    left: (218.5 / 414) * 100 + "%",
    width: (176 / 414) * 100 + "%",
    height: (191 / 896) * 100 + "%",
  },
  Foggy: {
    top: (683 / 896) * 100 + "%",
    left: (17.5 / 414) * 100 + "%",
    width: (176 / 414) * 100 + "%",
    height: (188 / 896) * 100 + "%",
  },
  Cold: {
    top: (625 / 896) * 100 + "%",
    left: (218.5 / 414) * 100 + "%",
    width: (176 / 414) * 100 + "%",
    height: (246 / 896) * 100 + "%",
  },
};

export default function WeatherScreen({ onWeatherSelect = () => {} }) {
  return (
    <div className="relative bg-[#c2c3d9] font-sans min-h-screen flex justify-center items-center overflow-hidden">
      {/* Fixed aspect ratio container */}
      <div className="relative w-full max-w-md aspect-[414/896]">
        {/* Background cloud image */}
        <img
          src={unionIcon}
          alt="clouds"
          className="fixed top-[100px] left-0 w-full h-auto object-cover z-0"
        />

        {/* Header */}
        <div className="pt-2 pb-4 px-4 text-center z-10 relative">
          <p className="text-black text-sm font-light mb-1">
            Good morning, Abi. What’s the
          </p>
          <h1 className="text-3xl font-light tracking-[0.25em]">WEATHER</h1>
          <p className="text-black text-sm font-light">like today?</p>
        </div>

        {/* Weather Cards */}
        {weatherOptions.map((weather) => {
          const style = cardPositions[weather.name] || {};
          return (
            <button
              key={weather.name}
              onClick={() => onWeatherSelect(weather.name)}
              className="absolute rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center bg-cover bg-center z-10 transition-transform duration-200 hover:scale-105"
              style={{
                top: style.top,
                left: style.left,
                width: style.width,
                height: style.height,
                backgroundImage: `url(${weather.background})`,
              }}
            >
              <img
                src={weather.icon}
                alt={weather.name}
                className="w-[72px] h-[72px] mb-2 object-contain" 
              />
              <span className="text-white text-sm font-bold drop-shadow tracking-wide">
                {weather.name.toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
