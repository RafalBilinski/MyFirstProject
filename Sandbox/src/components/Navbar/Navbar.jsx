import "./navbar.css";
import React from "react";
import Logo from "../../assets/react.svg?react";


// Navbar Component
class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

// Obsługa zdarzeń
  handleClick(e) {
    const component = e.target.getAttribute("component"); // Pobranie nazwy komponentu
    console.log(`Button clicked: ${component}`);
    if (this.props.onButtonClick) {
      this.props.onButtonClick(component); // Wywołanie funkcji przekazanej w props
    }
  }

  generateButtons() {
    const { navbarItems } = this.props; // Pobieranie obiektu navbarItems z props
    return navbarItems.map((item) => (
      <a href={`#${item.id}`} key={item.id} className="navbar-link">
        <button
          className="navbar-btn"
          id={item.id + "-btn"} // Ustawienie id przycisku
          component={item.component} // Przechowuje nazwę komponentu
          onClick={this.handleClick}
        >
          {item.name} {/* Wyświetlanie nazwy przycisku */}
        </button>
      </a>
    ));
  }

// Wymagana metoda renderująca
  render() {
    return (
      <div className="navbar" id="navbar">
        {this.generateButtons()}
        <Logo className="logo" id="react-logo" />
      </div>
    );
  }
}

export default Navbar;
