import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar/Navbar.jsx";
import DrumPads from "./components/DrumPads/DrumPads.jsx";
import BarChart from "./components/BarChart/BarChart.jsx";
import Home from "./components/Home/Home.jsx";
import "./main.css";

const navbarItems = [
  { id: "home", name: "Home", component: null },
  { id: "drum-machine", name: "Drum Machine", component: "DrumPads" },
  { id: "bar-chart", name: "Bar chart", component: "BarChart" },
  { id: "about", name: "About", component: null },
  { id: "contact", name: "Contact", component: null },
];

function App() {
  const [currentButton, setCurrentButton] = useState(null); // Stan przechowujący nazwę komponentu

  // Funkcja renderująca odpowiedni komponent
  const renderComponent = () => {
    switch (currentButton) {
      case "DrumPads":
        return <DrumPads />;
      case "BarChart":
        return <BarChart title="US GDP over years"/>;
      default:
        return <Home />; // Domyślny komponent
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
