import React from "react";
import ClearDayIcon from "./assets/clear-day.svg";
import CloudyIcon from "./assets/cloudy.svg";
import Group21Icon from "./assets/group-21.svg";
import HeavyShowersIcon from "./assets/heavy-showers.svg";
import HeavySnowIcon from "./assets/heavy-snow.svg";
import PartlyCloudyNightIcon from "./assets/partly-cloudy-night.svg";
import UnionIcon from "./assets/Union.svg";

// Weather card backgrounds
import sunnyCard from "./assets/sunnycard.svg";
import rainyCard from "./assets/rainycard.svg";
import foggyCard from "./assets/foggycard.svg";
import cloudyCard from "./assets/cloudycard.svg";
import breezyCard from "./assets/breezycard.svg";
import coldCard from "./assets/coldcard.svg";

// Ordered like your Figma layout
const weatherOptions = [
  { label: "ClearDay", name: "Sunny", icon: ClearDayIcon, bg: sunnyCard },
  { label: "HeavyShowers", name: "Rainy", icon: HeavyShowersIcon, bg: rainyCard },
  { label: "PartlyCloudyNight", name: "Foggy", icon: PartlyCloudyNightIcon, bg: foggyCard },
  { label: "Cloudy", name: "Cloudy", icon: CloudyIcon, bg: cloudyCard },
  { label: "Group21", name: "Breezy", icon: Group21Icon, bg: breezyCard },
  { label: "HeavySnow", name: "Cold", icon: HeavySnowIcon, bg: coldCard },
];

const WeatherScreen = ({ onSelect }) => {
  return (
    <div style={styles.container}>
      <img src={UnionIcon} alt="Clouds" style={styles.backgroundTop} />

      <div style={styles.header}>
        <p style={styles.greeting}>Good morning, Abi. What’s the</p>
        <h1 style={styles.weatherTitle}>WEATHER</h1>
        <p style={styles.subtitle}>like today?</p>
      </div>

      <div style={styles.columnWrapper}>
        <div style={styles.column}>
          <WeatherCard option={weatherOptions[0]} onSelect={onSelect} width={176} height={231} />
          <WeatherCard option={weatherOptions[1]} onSelect={onSelect} width={176} height={167} />
          <WeatherCard option={weatherOptions[2]} onSelect={onSelect} width={176} height={188} />
        </div>
        <div style={styles.column}>
          <WeatherCard option={weatherOptions[3]} onSelect={onSelect} width={176} height={194} />
          <WeatherCard option={weatherOptions[4]} onSelect={onSelect} width={176} height={191} />
          <WeatherCard option={weatherOptions[5]} onSelect={onSelect} width={176} height={246} />
        </div>
      </div>
    </div>
  );
};

const WeatherCard = ({ option, onSelect, width, height }) => (
  <button
    key={option.label}
    onClick={() => onSelect(option.label)}
    style={{
      ...styles.card,
      width,
      height,
      backgroundImage: `url(${option.bg})`,
    }}
  >
    <img src={option.icon} alt={option.name} style={styles.icon} />
    <span style={styles.label}>{option.name.toUpperCase()}</span>
  </button>
);

const styles = {
  container: {
    backgroundColor: "#c2c3d9",
    minHeight: "100vh",
    padding: "3rem 1.2rem 4rem",
    textAlign: "center",
    position: "relative",
    fontFamily: "'Inter', sans-serif",
    overflow: "hidden",
  },
  backgroundTop: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "auto",
    zIndex: 0,
  },
  header: {
    position: "relative",
    zIndex: 1,
    marginBottom: "2.5rem",
    marginTop: "5rem",
  },
  greeting: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "135%",
    margin: 0,
  },
  weatherTitle: {
    fontSize: "45px",
    fontWeight: 400,
    letterSpacing: "4px",
    margin: "0.2rem 0",
    lineHeight: "135%",
    fontFamily: "'Major Mono Display', monospace",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "135%",
    margin: 0,
  },
  columnWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "1.2rem",
    position: "relative",
    zIndex: 1,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  card: {
    border: "none",
    borderRadius: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  },
  icon: {
    width: "48px",
    height: "48px",
    marginBottom: "0.7rem",
  },
  label: {
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "1rem",
    fontFamily: "'Inter', sans-serif",
    letterSpacing: "1px",
  },
};

export default WeatherScreen;
