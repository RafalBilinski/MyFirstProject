import React from 'react';
import PropTypes from 'prop-types';
import NavButton from './NavButton';

const DropdownMenu = ({ items, onItemClick, onMouseLeave }) => (
  <div className="dropdown-content" onMouseLeave={onMouseLeave}>
    {items.map(item => (
      <NavButton
        key={item.id}
        id={item.id}
        name={item.name}
        onClick={() => onItemClick(item.component)}
      />
    ))}
  </div>
);

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      component: PropTypes.string
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default DropdownMenu;