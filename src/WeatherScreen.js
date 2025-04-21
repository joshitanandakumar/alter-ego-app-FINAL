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
import unionIcon from "./assets/Union.svg"; // top cloud layer

const weatherOptions = [
  { name: "Sunny", icon: sunnyIcon, background: sunnyCard },
  { name: "Rainy", icon: rainyIcon, background: rainyCard },
  { name: "Foggy", icon: foggyIcon, background: foggyCard },
  { name: "Cloudy", icon: cloudyIcon, background: cloudyCard },
  { name: "Breezy", icon: breezyIcon, background: breezyCard },
  { name: "Cold", icon: coldIcon, background: coldCard },
];

export default function WeatherScreen({ onWeatherSelect = () => {} }) {
  const leftColumn = weatherOptions.slice(0, 3);
  const rightColumn = weatherOptions.slice(3, 6);

  return (
    <div className="min-h-screen bg-[#c2c3d9] relative font-sans overflow-hidden px-6 pt-10 pb-6">
      {/* Union Icon Layer */}
      <img
        src={unionIcon}
        alt="clouds"
        className="absolute top-0 left-0 w-full h-auto object-cover z-0"
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-8 mt-10">
        <p className="text-black text-sm font-light mb-1">Good morning, Abi. What’s the</p>
        <h1 className="text-3xl font-light tracking-wide">WEATHER</h1>
        <p className="text-black text-sm font-light">like today?</p>
      </div>

      {/* Grid */}
      <div className="relative z-10 flex gap-4 justify-center">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-1/2">
          {leftColumn.map((weather) => (
            <button
              key={weather.name}
              onClick={() => onWeatherSelect(weather.name)}
              className="relative w-full pt-[100%] rounded-xl overflow-hidden shadow-md"
              style={{
                backgroundImage: `url(${weather.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img src={weather.icon} alt={weather.name} className="w-12 h-12 mb-2" />
                <span className="text-white text-sm font-bold drop-shadow-md tracking-wide">
                  {weather.name.toUpperCase()}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 w-1/2">
          {rightColumn.map((weather) => (
            <button
              key={weather.name}
              onClick={() => onWeatherSelect(weather.name)}
              className="relative w-full pt-[100%] rounded-xl overflow-hidden shadow-md"
              style={{
                backgroundImage: `url(${weather.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img src={weather.icon} alt={weather.name} className="w-12 h-12 mb-2" />
                <span className="text-white text-sm font-bold drop-shadow-md tracking-wide">
                  {weather.name.toUpperCase()}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
