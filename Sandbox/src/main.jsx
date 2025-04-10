import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar/Navbar.jsx";
import DrumPads from "./components/DrumPads/DrumPads.jsx";
import BarChart from "./components/BarChart/BarChart.jsx";
import Home from "./components/Home/Home.jsx";
import Resume_EN from "./components/Resume_EN/Resume_EN.jsx";
import Resume_PL from "./components/Resume_PL/Resume_PL.jsx";
import "./main.css";

const navbarItems = [
  { id: "home", name: "Home", component: null },
  { 
    id: "resume", 
    name: "Resume",
    isDropdown: true,
    submenu: [
      { id: "resume-en", name: "Resume EN", component: "Resume_EN" },
      { id: "resume-pl", name: "Resume PL", component: "Resume_PL" }
    ]
  },
  { 
    id: "projects", 
    name: "Projects",
    isDropdown: true,
    submenu: [
      { id: "drum-machine", name: "Drum Machine", component: "DrumPads" },
      { id: "bar-chart", name: "Bar Chart", component: "BarChart" }
    ]
  }
];

function App() {
  const [currentButton, setCurrentButton] = useState(null);

  const renderComponent = () => {
    switch (currentButton) {
      case "DrumPads":
        return <DrumPads />;
      case "BarChart":
        return <BarChart title="US GDP vs years"/>;
      case "Resume_EN":
        return <Resume_EN />; 
      case "Resume_PL":
          return <Resume_PL />; 
      default:
        return <Home />;
    }
  };

  return (
    <StrictMode>
      <Navbar navbarItems={navbarItems} onButtonClick={setCurrentButton} />
      <div className="content">{renderComponent()}</div>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
