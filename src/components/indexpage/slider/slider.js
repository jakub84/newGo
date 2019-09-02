import React from 'react';
import './slider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Button from '../button/button';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnDotsHover: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="main-content">
          <div className="text-content">
            <h1>This is headline</h1>
            <p>
              Bacon ipsum dolor amet filet mignon brisket
              {' '}
              <strong>
                {' '}
                pork chop tongue pork belly pork corned beef biltong doner sausage picanha. Shank
                beef ribs short loin capicola picanha landjaeger
              </strong>
              {' '}
              swine pastrami brisket ground round frankfurter flank pork chop ham.
            </p>
            <div className="btns-content">
              <Button linkContent="call to action" linkTo="/" />
              <Button linkContent="call to action" linkTo="/" />
            </div>
          </div>
          <div className="image-content hide">
            <div className="image ">image</div>
          </div>
          {/* <div className="slider-navigation">
                        <div className="nav-cirkle active"></div>
                        <div className="nav-cirkle"></div>
                        <div className="nav-cirkle"></div>
                        <div className="nav-cirkle"></div>
                    </div> */}
        </div>
      </div>
      <div>
        <div className="main-content">
          <div className="text-content">
            <h1>This is headline</h1>
            <p>
              Bacon ipsum dolor amet filet mignon brisket
              {' '}
              <strong>
                {' '}
                pork chop tongue pork belly pork corned beef biltong doner sausage picanha. Shank
                beef ribs short loin capicola picanha landjaeger
              </strong>
              {' '}
              swine pastrami brisket ground round frankfurter flank pork chop ham.
            </p>
            <div className="btns-content">
              <Button linkContent="call to action" linkTo="/" />
              <Button linkContent="call to action" linkTo="/" />
            </div>
          </div>
          <div className="image-content">
            <div className="image">image</div>
          </div>
          {/* <div className="slider-navigation">
                        <div className="nav-cirkle active"></div>
                        <div className="nav-cirkle"></div>
                        <div className="nav-cirkle"></div>
                        <div className="nav-cirkle"></div>
                    </div> */}
        </div>
      </div>
      <div>
        <div className="main-content">
          <div className="text-content">
            <h1>This is headline</h1>
            <p>
              Bacon ipsum dolor amet filet mignon brisket
              {' '}
              <strong>
                {' '}
                pork chop tongue pork belly pork corned beef biltong doner sausage picanha. Shank
                beef ribs short loin capicola picanha landjaeger
              </strong>
              {' '}
              swine pastrami brisket ground round frankfurter flank pork chop ham.
            </p>
            <div className="btns-content">
              <Button linkContent="call to action" linkTo="/" />
              <Button linkContent="call to action" linkTo="/" />
            </div>
          </div>
          <div className="image-content">
            <div className="image">image</div>
          </div>
        </div>
      </div>
      <div>
        <div className="main-content">
          <div className="text-content">
            <h1>This is headline</h1>
            <p>
              Bacon ipsum dolor amet filet mignon brisket
              {' '}
              <strong>
                {' '}
                pork chop tongue pork belly pork corned beef biltong doner sausage picanha. Shank
                beef ribs short loin capicola picanha landjaeger
              </strong>
              {' '}
              swine pastrami brisket ground round frankfurter flank pork chop ham.
            </p>
            <div className="btns-content">
              <Button linkContent="call to action" linkTo="/" />
              <Button linkContent="call to action" linkTo="/" />
            </div>
          </div>
          <div className="image-content">
            <div className="image">image</div>
          </div>
          {/* <div className="slider-navigation">
                        <div className="nav-cirkle active"></div>
                        <div className="nav-cirkle"></div>
                        <div className="nav-cirkle"></div>
                        <div className="nav-cirkle"></div>
                    </div> */}
        </div>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
