import React from 'react';
import PropTypes from 'prop-types';

const NavButton = ({ id, name, onClick, className = "navbar-btn" }) => (
  <button 
    className={className}
    id={`${id}-btn`}
    onClick={onClick}
  >
    {name}
  </button>
);

NavButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default NavButton;