import React from 'react';
import './ContentSection.scss';

import splash from '../../../static/assets/fx/splash.svg';

const ContentSection = ({
  type, id, title, content, children,
}) => (
  <div className={`content-section ${type}`} id={id}>
    <div className="container">
      <h2>{title}</h2>
      <div className="separator" />
      <p>{content}</p>
      {children}
    </div>
    <img src={splash} alt="splash" />
  </div>
);

export default ContentSection;
