import React from "react";
import ClearDayIcon from "./assets/clear-day.svg";
import CloudyIcon from "./assets/cloudy.svg";
import HeavyShowersIcon from "./assets/heavy-showers.svg";
import HeavySnowIcon from "./assets/heavy-snow.svg";
import PartlyCloudyNightIcon from "./assets/partly-cloudy-night.svg";
import Group21Icon from "./assets/group-21.svg";

const weatherOptions = [
  { label: "ClearDay", displayName: "SUNNY", icon: ClearDayIcon },
  { label: "Cloudy", displayName: "CLOUDY", icon: CloudyIcon },
  { label: "HeavyShowers", displayName: "RAINY", icon: HeavyShowersIcon },
  { label: "HeavySnow", displayName: "COLD", icon: HeavySnowIcon },
  { label: "PartlyCloudyNight", displayName: "FOGGY", icon: PartlyCloudyNightIcon },
  { label: "Group21", displayName: "BREEZY", icon: Group21Icon },
];

const WeatherIcons = ({ onSelect }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", justifyItems: "center" }}>
      {weatherOptions.map(({ label, displayName, icon }) => (
        <button
          key={label}
          onClick={() => onSelect(label)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#e0e8ff",
            border: "none",
            borderRadius: "1rem",
            width: "140px",
            height: "140px",
            cursor: "pointer",
          }}
        >
          <img src={icon} alt={displayName} style={{ width: 48, height: 48, marginBottom: "0.5rem" }} />
          <span style={{ fontWeight: "bold", color: "#333" }}>{displayName}</span>
        </button>
      ))}
    </div>
  );
};

export default WeatherIcons;
