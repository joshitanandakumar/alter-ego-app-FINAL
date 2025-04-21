import React from "react";
import ClearDayIcon from "./assets/clear-day.svg";
import CloudyIcon from "./assets/cloudy.svg";
import HeavyShowersIcon from "./assets/heavy-showers.svg";
import HeavySnowIcon from "./assets/heavy-snow.svg";
import PartlyCloudyNightIcon from "./assets/partly-cloudy-night.svg";
import Group21Icon from "./assets/group-21.svg";

const WeatherScreen = ({ onSelect }) => {
  return (
    <div className="choose-topic">
      <div className="div-2">
        <div className="overlap">
          <div className="text-wrapper-5">Weather</div>

          {/* SUNNY */}
          <div className="rectangle"></div>
          <img
            src={ClearDayIcon}
            alt="Clear Day"
            className="clear-day-instance"
            onClick={() => onSelect("ClearDay")}
          />
          <div className="text-wrapper-3">SUNNY</div>

          {/* CLOUDY */}
          <div className="rectangle-3"></div>
          <img
            src={CloudyIcon}
            alt="Cloudy"
            className="cloudy-instance"
            onClick={() => onSelect("Cloudy")}
          />
          <div className="text-wrapper-4">CLOUDY</div>

          {/* RAINY */}
          <div className="rectangle-4"></div>
          <img
            src={HeavyShowersIcon}
            alt="Heavy Showers"
            className="heavy-showers-instance"
            onClick={() => onSelect("HeavyShowers")}
          />
          <div className="text-wrapper-7">RAINY</div>

          {/* BREEZY */}
          <div className="rectangle-5"></div>
          <img
            src={Group21Icon}
            alt="Breezy"
            className="fast-winds-2"
            onClick={() => onSelect("Group21")}
          />
          <div className="text-wrapper-9">BREEZY</div>

          {/* FOGGY */}
          <div className="rectangle-2"></div>
          <img
            src={PartlyCloudyNightIcon}
            alt="Foggy"
            className="partly-cloudy-night-instance"
            onClick={() => onSelect("PartlyCloudyNight")}
          />
          <div className="text-wrapper-8">FOGGY</div>

          {/* COLD */}
          <div className="group"></div>
          <img
            src={HeavySnowIcon}
            alt="Heavy Snow"
            className="heavy-snow-instance"
            onClick={() => onSelect("HeavySnow")}
          />
          <div className="text-wrapper-9">COLD</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;
