import React from "react";
import ClearDayIcon from "./assets/clear-day.svg";
import CloudyIcon from "./assets/cloudy.svg";
import HeavyShowersIcon from "./assets/heavy-showers.svg";
import HeavySnowIcon from "./assets/heavy-snow.svg";
import PartlyCloudyNightIcon from "./assets/partly-cloudy-night.svg";
import Group21Icon from "./assets/group-21.svg";
import Union from "./assets/Union.svg";

const WeatherScreen = ({ onSelect }) => {
  return (
    <div className="weather-screen">
      <img src={Union} alt="cloud background" className="background-cloud" />
      <h2 className="weather-header">Good morning, Abi. What’s the <span>WEATHER</span> like today?</h2>

      <div className="weather-grid">
        <div
          className="weather-card sunny"
          onClick={() => onSelect("ClearDay")}
        >
          <img src={ClearDayIcon} alt="Sunny" className="weather-icon" />
          <div className="weather-label">SUNNY</div>
        </div>

        <div
          className="weather-card cloudy"
          onClick={() => onSelect("Cloudy")}
        >
          <img src={CloudyIcon} alt="Cloudy" className="weather-icon" />
          <div className="weather-label">CLOUDY</div>
        </div>

        <div
          className="weather-card rainy"
          onClick={() => onSelect("HeavyShowers")}
        >
          <img
            src={HeavyShowersIcon}
            alt="Heavy Showers"
            className="weather-icon"
          />
          <div className="weather-label">RAINY</div>
        </div>

        <div
          className="weather-card breezy"
          onClick={() => onSelect("Group21")}
        >
          <img src={Group21Icon} alt="Breezy" className="weather-icon" />
          <div className="weather-label">BREEZY</div>
        </div>

        <div
          className="weather-card foggy"
          onClick={() => onSelect("PartlyCloudyNight")}
        >
          <img
            src={PartlyCloudyNightIcon}
            alt="Foggy"
            className="weather-icon"
          />
          <div className="weather-label">FOGGY</div>
        </div>

        <div
          className="weather-card cold"
          onClick={() => onSelect("HeavySnow")}
        >
          <img src={HeavySnowIcon} alt="Heavy Snow" className="weather-icon" />
          <div className="weather-label">COLD</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;