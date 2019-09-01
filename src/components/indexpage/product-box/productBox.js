import React from 'react';
import './productBox.scss';

function ProductBox(props) {
  return (
    <div className="product-box">
      <div className="icon-container">
        <img src={props.icon} alt="icon" />
      </div>
      <h4>{props.title}</h4>
      <div className="separator product" />
      <p className="product-description">{props.content}</p>
      {props.children}
    </div>
  );
}

export default ProductBox;
