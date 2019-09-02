import React, { Component } from 'react';
import './navigation.scss';
import { Link } from 'gatsby';
// import { Link, animateScroll as scroll } from "react-scroll";

class navigation extends Component {
  state = {
    isOpen: false,
  }

  toogleMenu = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  closeMenu = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="navigation-container">
        <ul className={`navigation ${isOpen && 'open'}`}>
          <li>
            <Link to="/" onClick={this.closeMenu}>
              home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={this.closeMenu}>
              nasze produkty
            </Link>
          </li>
          <li>
            <Link to="/" onClick={this.closeMenu}>
              o nas
            </Link>
          </li>

          <li>
            <Link to="/" onClick={this.closeMenu}>
              kontakt
            </Link>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={this.toogleMenu}>
          <span className="nav-icon-element" />
          <span className="nav-icon-element" />
          <span className="nav-icon-element" />
        </div>
      </div>
    );
  }
}

export default navigation;
