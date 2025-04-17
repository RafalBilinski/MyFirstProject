import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar/Navbar.jsx";
import navbarItems, { renderComponent } from "./components/Navbar/NavbarItems.jsx";
import "./main.css";

function App() {
  const [currentButton, setCurrentButton] = useState(null);

  return (
    <StrictMode>
      <Navbar navbarItems={navbarItems} onButtonClick={setCurrentButton} />
      <div className="content">{renderComponent(currentButton)}</div>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
