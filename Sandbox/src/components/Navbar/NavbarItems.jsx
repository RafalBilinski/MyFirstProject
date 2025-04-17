// This file contains the navbar items and their corresponding components.
// It exports a function to render the component based on the current button clicked.
import DrumPads from "../DrumPads/DrumPads.jsx";
import BarChart from "../BarChart/BarChart.jsx";
import Home from "../Home/Home.jsx";
import Resume_EN from "../Resume_EN/Resume_EN.jsx";
import Resume_PL from "../Resume_PL/Resume_PL.jsx";

// This function takes the current button clicked and returns
// the corresponding component to render.
export const renderComponent = (currentButton) => {
  switch (currentButton) {
    case "DrumPads":
      return <DrumPads />;
    case "BarChart":
      return <BarChart />;
    case "Resume_EN":
      return <Resume_EN />; 
    case "Resume_PL":
      return <Resume_PL />; 
    default:
      return <Home />;
  }
};
// This is the list of navbar items.
const navbarItems = [
  { id: "home", name: "Home", component: null },
  { 
    id: "resume", 
    name: "Resume",
    isDropdown: true,
    DropdownMenu: [
      { id: "resume-en", name: "Resume EN", component: "Resume_EN" },
      { id: "resume-pl", name: "Resume PL", component: "Resume_PL" }
    ]
  },
  { 
    id: "projects", 
    name: "Projects",
    isDropdown: true,
    DropdownMenu: [
      { id: "drum-machine", name: "Drum Machine", component: "DrumPads" },
      { id: "bar-chart", name: "Bar Chart", component: "BarChart" }
    ]
  }
];

export default navbarItems;