import React from 'react';
import './productBox.scss';

const ProductBox = ({
  icon, title, content, children,
}) => (
  <div className="product-box">
    <div className="icon-container">
      <img src={icon} alt="icon" />
    </div>
    <h4>{title}</h4>
    <div className="separator product" />
    <p className="product-description">{content}</p>
    {children}
  </div>
);

export default ProductBox;
