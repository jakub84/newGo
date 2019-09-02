import React from 'react';
import './button.scss';
import { Link } from 'gatsby';

const Button = ({ type, linkContent }) => (
  <div className={`button ${type}`}>
    <Link to="/">{linkContent}</Link>
  </div>
);

export default Button;
