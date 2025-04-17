import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavButton from './NavButton';
import DropdownMenuItems from './DropdownMenuItems';
import Logo from "../../assets/react.svg?react";
import "./navbar.css";

const Navbar = ({ navbarItems, onButtonClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (e, id) => {
    e.preventDefault();
    setActiveDropdown(prevId => prevId === id ? null : id);
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
            <DropdownMenuItems
              items={item.DropdownMenu}
              onItemClick={onButtonClick}
              onMouseLeave={() => setActiveDropdown(null)}
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
          onClick={() => onButtonClick(item.component)}
        />
      </div>
    );
  };

  return (
    <nav className="navbar">
      {navbarItems.map(renderNavItem)}
      <Logo className="logo" id="React-logo" />
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
          component: PropTypes.string
        })
      )
    })
  ).isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default Navbar;