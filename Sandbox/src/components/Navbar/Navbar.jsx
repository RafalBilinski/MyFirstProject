import React, { useState } from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/react.svg?react";
import "./navbar.css";
import "animate.css";

// NavButton component
const NavButton = ({ id, name, onClick, className = "navbar-btn" }) => (
  <button className={className} id={`${id}-btn`} onClick={onClick}>
    {name}
  </button>
);

NavButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

// DropdownMenu component
const DropdownMenu = ({ items, onItemClick, onMouseLeave }) => (
  <div className="dropdown-content" onMouseLeave={onMouseLeave}>
    {items.map((item) => (
      <NavButton
        key={item.id}
        id={item.id}
        name={item.name}
        onClick={() => onItemClick(item.component)} //
      />
    ))}
  </div>
);

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      component: PropTypes.string,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

// Main Navbar component
const Navbar = ({ navbarItems, setCurrentComponent }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (e, id) => {
    e.preventDefault();
    setActiveDropdown((prevId) => (prevId === id ? null : id));
  };

  const hideDropdown = () => {
    setActiveDropdown(null);
  };

  const setCurrentComponentAndHide = (component) => {
    setCurrentComponent(component);
    hideDropdown();
  };

  const renderNavItem = (item) => {
    if (item.isDropdown) {
      return (
        <div key={item.id} className="navbar-link">
          <NavButton
            id={item.id}
            name={item.name}
            onClick={(e) => handleDropdownClick(e, item.id)}
          />
          {activeDropdown === item.id && (
            <DropdownMenu
              items={item.DropdownMenu}
              onItemClick={setCurrentComponentAndHide}
              onMouseLeave={hideDropdown}
            />
          )}
        </div>
      );
    }

    return (
      <div key={item.id} className="navbar-link">
        <NavButton
          id={item.id}
          name={item.name}
          onClick={() => setCurrentComponent(item.component)}
        />
      </div>
    );
  };

  return (
    <nav className="navbar">
      {navbarItems.map(renderNavItem)}
      <div className="logo-container" id="react-logo-container">
      <Logo className="logo" id="react-logo" />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navbarItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      component: PropTypes.string,
      isDropdown: PropTypes.bool,
      DropdownMenu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          component: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  setCurrentComponent: PropTypes.func.isRequired,
};

export default Navbar;
