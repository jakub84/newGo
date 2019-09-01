import React from 'react';
import './header.scss';
import { Link } from 'gatsby';
import Navigation from '../navigation/navigation';
import SimpleSlider from '../slider/slider';

function header(props) {
  return (
    <header className="header" id="header">
      <div className="container">
        <nav>
          <div className="nav-container ">
            <div className="logo-container white-logo">
              <Link to="/">
                <img src={props.logo} alt="galeria obrazu" />
              </Link>
            </div>
            <div className="navigation">
              <Navigation />
            </div>
          </div>
        </nav>
        <SimpleSlider id="simple-slider" />
        {/* <div className="main-content">
                    <div className="text-content">
                        <h1>This is headline</h1>
                        <p>Bacon ipsum dolor amet filet mignon brisket <strong> pork chop tongue pork belly pork corned beef biltong doner sausage picanha. Shank beef ribs short loin capicola picanha landjaeger</strong> swine pastrami brisket ground round frankfurter flank pork chop ham.</p>
                        <div className="btns-content">
                            <Button

                                linkContent="Oferta"
                                linkTo="/" />
                            <Button

                                linkContent="Allegro"
                                linkTo="/" />
                        </div>
                    </div>
                    <div className="image-content">
                        <div className="image">image</div>
                    </div>
                    <div className="slider-navigation">
                        <div className="nav-cirkle active"></div>
                        <div className="nav-cirkle"></div>
                        <div className="nav-cirkle"></div>
                        <div className="nav-cirkle"></div>
                    </div>
                </div> */}
      </div>
    </header>
  );
}

export default header;
