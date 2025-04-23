import React, { useState } from "react";
import alterEgoMapping from "./alterEgoMapping.json";
import WeatherScreen from "./WeatherScreen";
import PlansScreen from "./PlansScreen";
import Battery from "./Battery"; // ✅ Import Battery screen
import './index.css'
import leo from "./assets/leofinal.PNG";
import thamizh from "./assets/thamizh.PNG";
import velu from "./assets/velu.PNG";
import kaththi from "./assets/kathirfinal.PNG";
import parthiban from "./assets/parthifinal.PNG";
import veera from "./assets/veera.PNG";
import jd from "./assets/jd.PNG";
import sachein from "./assets/sachein.PNG";
import kuruvi from "./assets/kuruvi.PNG";
import jagadish from "./assets/jagadish.PNG";

const characterImages = {
  "Leo Das": leo,
  "Thamizh": thamizh,
  "Velu": velu,
  "Kathiresan": kaththi,
  "Parthiban": parthiban,
  "Veera Raghavan": veera,
  "JD": jd,
  "Sachein": sachein,
  "Kuruvi": kuruvi,
  "Jagadish": jagadish,
};

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedWeather, setSelectedWeather] = useState("");
  const [vibe, setVibe] = useState("");
  const [energy, setEnergy] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

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
  const handleFeelIt = () => {
    let playlistUrl = "";
    if (
      ["Velu", "Sachein", "Kuruvi", "Thamizh"].includes(alterEgo)
    ) {
      playlistUrl = "https://open.spotify.com/playlist/0G8kJYDfXHzaBF6mUCMCey?si=49c01944af5a4cd2";
    } else if (
      ["Parthiban", "Kathiresan", "Veera Raghavan"].includes(alterEgo)
    ) {
      playlistUrl = "https://open.spotify.com/playlist/5OYXMZ5MSdrXXrGKdh7CEc?si=48aaf58b61b2427b";
    } else if (
      ["Leo Das", "JD", "Jagadish"].includes(alterEgo)
    ) {
      playlistUrl = "https://open.spotify.com/playlist/3u8a9b98p1iBdboHPUUDuu?si=d59dad7316154e65";
    }

    if (playlistUrl) {
      window.open(playlistUrl, "_blank"); // Open the playlist in a new tab
    }
  };

  return (
    <div className="app-container">
      {currentStep === 1 && (
        <WeatherScreen onWeatherSelect={handleWeatherSelect} />
      )}

      {currentStep === 2 && (
        <PlansScreen onSelectPlan={handleVibeSelect} />
      )}

      {currentStep === 3 && (
        <Battery onEnergySelect={handleEnergySelect} />
      )}

      {currentStep === 4 && (
        <div className="min-h-screen bg-[#143768] flex flex-col justify-center items-center text-white text-center font-sans px-4 relative overflow-hidden">

          {/* Text content moved up */}
          <div className="absolute top-12 flex flex-col items-center space-y-6 text-center px-4">
            <h2
              className="text-xl md:text-2xl font-bold"
              style={{ fontFamily: "'Major Mono Display', monospace", textTransform: 'lowercase' }}
            >
              your alter ego is:
            </h2>
            <h1
              className="text-3xl md:text-5xl font-extrabold"
              style={{ fontFamily: "'Major Mono Display', monospace", textTransform: 'lowercase' }}
            >
              {alterEgo}
            </h1>

            <div className="flex flex-col items-center space-y-1 text-sm md:text-base px-6 md:px-12">
              <p>Nice to meet you, nanba.</p>
              <p className="text-wrap">
                Today’s a <strong>{selectedWeather.toLowerCase()}</strong> day, with a{" "}
                <strong>{vibe.toLowerCase()}</strong> vibe, and a{" "}
                <strong>{energy.toLowerCase()}</strong> social battery.
              </p>
            </div>

            {/* Button Section with "feel it" and "start over" */}
            <div className="flex flex-row space-x-4 pt-4">
              <button
                className="bg-white text-[#143768] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition text-sm md:text-base"
                onClick={handleFeelIt}
              >
                feel it
              </button>
              <button
                className="bg-white text-[#143768] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition text-sm md:text-base"
                onClick={handleReset}
              >
                start over
              </button>
            </div>
          </div>

          {/* Image stays at bottom */}
          {characterImages[alterEgo] && (
            <img
              src={characterImages[alterEgo]}
              alt={alterEgo}
              className={`w-[250px] glow-png mt-auto mb-[-30px] 
                ${alterEgo === "Velu" ? "w-[400px]" : ""}
                ${alterEgo === "Jagdish" ? "w-[400px]" : ""}
                ${alterEgo === "Sachein" ? "w-[400px]" : ""}
                ${alterEgo === "Thamizh" ? "ml-8" : ""}
                ${alterEgo === "Parthiban" ? "mt-[270px]" : ""} {/* Move Parthiban much lower */}
                ${alterEgo === "Kathiresan" ? "w-[200px]" : ""} {/* Make Kathiresan smaller */}
              `}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
