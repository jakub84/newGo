import React from 'react';
import './header.scss';
import { Link } from 'gatsby';
import Navigation from '../navigation/navigation';
import SimpleSlider from '../slider/slider';

const header = ({ logo }) => (
  <header className="header" id="header">
    <div className="container">
      <nav>
        <div className="nav-container ">
          <div className="logo-container white-logo">
            <Link to="/">
              <img src={logo} alt="galeria obrazu" />
            </Link>
          </div>
          <div className="navigation">
            <Navigation />
          </div>
        </div>
      </nav>
      <SimpleSlider id="simple-slider" />
    </div>
  </header>
);

export default header;
