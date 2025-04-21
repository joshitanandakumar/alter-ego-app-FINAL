// WeatherScreen.js
import React from "react";
import "./WeatherScreen.css";


const weatherOptions = [
  { id: "sunny", label: "Sunny", bg: "sunnycard.svg", icon: "sunny.svg" },
  { id: "rainy", label: "Rainy", bg: "rainycard.svg", icon: "rainy.svg" },
  { id: "foggy", label: "Foggy", bg: "foggycard.svg", icon: "foggy.svg" },
  { id: "cloudy", label: "Cloudy", bg: "cloudycard.svg", icon: "cloudy.svg" },
  { id: "breezy", label: "Breezy", bg: "breezycard.svg", icon: "breezy.svg" },
  { id: "cold", label: "Cold", bg: "coldcard.svg", icon: "cold.svg" },
];

const WeatherScreen = ({ selectedWeather, setSelectedWeather, onNext }) => {
  const handleWeatherSelect = (id) => {
    setSelectedWeather(id);
    onNext();
  };

  return (
    <div className="weather-screen">
      <h1 className="weather-title">What's the weather like?</h1>
      <div className="weather-grid">
        {weatherOptions.map((weather) => (
          <button
            key={weather.id}
            className={`weather-card ${selectedWeather === weather.id ? "selected" : ""}`}
            style={{ backgroundImage: `url(/images/${weather.bg})` }}
            onClick={() => handleWeatherSelect(weather.id)}
          >
            <img
              src={`/images/${weather.icon}`}
              alt={weather.label}
              className="weather-icon"
            />
            <span className="weather-label">{weather.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeatherScreen;