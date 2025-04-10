import "./navbar.css";
import React from "react";
import Logo from "../../assets/react.svg?react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDropdown: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmenuClick = this.handleSubmenuClick.bind(this);
  }

  // Handle regular button clicks
  handleClick(e, component) {
    if (this.props.onButtonClick) {
      this.props.onButtonClick(component);
    }
  }

  // Handle Projects button click
  handleSubmenuClick(e, id) {
    e.preventDefault();
    this.setState(prevState => ({
      activeDropdown: prevState.activeDropdown === id ? null : id
    }));
  }

  // Render buttons
  renderButton(item) {
    if (item.isDropdown) {
      return (
        <div 
          key={item.id} 
          className="navbar-link"
        >
          <div className="dropdown-container">
            <button 
              className="navbar-btn" 
              id={item.id + "-btn"}
              onClick={(e) => this.handleSubmenuClick(e, item.id)}
            >
              {item.name}
            </button>
            {this.state.activeDropdown === item.id && (
              <div className="dropdown-content"
              onMouseLeave={() => this.setState({ activeDropdown: null })}>
                {item.submenu.map(subItem => (
                  <button
                    key={subItem.id}
                    className="navbar-btn"
                    onClick={(e) => this.handleClick(e, subItem.component)}
                  >
                    {subItem.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div 
        key={item.id} 
        className="navbar-link"
        onClick={(e) => this.handleClick(e, item.component)}
      >
        <button className="navbar-btn" id={item.id + "-btn"}>
          {item.name}
        </button>
      </div>
    );
  }

  render() {
    return (
      <nav className="navbar">
        {this.props.navbarItems.map(item => this.renderButton(item))}
        <Logo className="logo" />
      </nav>
    );
  }
}

export default Navbar;
