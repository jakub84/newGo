import React, { Component } from 'react';
import './ContentSection.scss';

import splash from '../../../static/assets/fx/splash.svg';

function ContentSection(props) {
  return (
    <div className={`content-section ${props.type}`} id={props.id}>
      <div className="container">
        <h2>{props.title}</h2>
        <div className="separator" />
        <p>{props.content}</p>
        {props.children}
      </div>
      <img src={splash} alt="splash" />
    </div>
  );
}

export default ContentSection;
