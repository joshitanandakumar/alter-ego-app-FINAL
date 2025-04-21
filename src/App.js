import React, { useState } from "react";
import alterEgoMapping from "./alterEgoMapping.json";
import WeatherScreen from "./WeatherScreen";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedWeather, setSelectedWeather] = useState("");
  const [vibe, setVibe] = useState("");
  const [energy, setEnergy] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  // ✅ Updated to just use weatherType directly (like "Sunny", "Cold", etc.)
  const handleWeatherSelect = (weatherType) => {
    setSelectedWeather(weatherType);
    setCurrentStep(2);
  };

  const handleVibeSelect = (selectedVibe) => {
    setVibe(selectedVibe);
    setCurrentStep(3);
  };

  const handleEnergySelect = (selectedEnergy) => {
    setEnergy(selectedEnergy);
    const key = `${selectedWeather}_${selectedEnergy}_${vibe}`;
    const character = alterEgoMapping[key] || "Unknown";
    setAlterEgo(character);
    setCurrentStep(4);
  };

  const handleReset = () => {
    setSelectedWeather("");
    setVibe("");
    setEnergy("");
    setAlterEgo("");
    setCurrentStep(1);
  };

  return (
    <div className="app-container" style={{ padding: "2rem", textAlign: "center" }}>
      {currentStep === 1 && (
        <WeatherScreen onWeatherSelect={handleWeatherSelect} />
      )}

      {currentStep === 2 && (
        <>
          <h2>Step 2: What vibe are you going for?</h2>
          <div>
            <button onClick={() => handleVibeSelect("Chill")}>Chill</button>
            <button onClick={() => handleVibeSelect("Work")}>Work</button>
            <button onClick={() => handleVibeSelect("Thrill")}>Thrill</button>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <>
          <h2>Step 3: How's your social battery?</h2>
          <div>
            <button onClick={() => handleEnergySelect("Low")}>Low</button>
            <button onClick={() => handleEnergySelect("Medium")}>Medium</button>
            <button onClick={() => handleEnergySelect("High")}>High</button>
          </div>
        </>
      )}

      {currentStep === 4 && (
        <>
          <h2>Your Alter Ego is:</h2>
          <h1>{alterEgo}</h1>
          <p>
            Based on a <strong>{selectedWeather}</strong> day with{" "}
            <strong>{energy}</strong> energy and a <strong>{vibe}</strong> vibe.
          </p>
          <button onClick={handleReset}>Try Again</button>
        </>
      )}
    </div>
  );
}

export default App;
