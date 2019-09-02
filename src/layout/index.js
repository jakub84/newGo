import React from 'react';
import Helmet from 'react-helmet';
import './index.scss';

const MainLayout = ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content="content" />
    </Helmet>
    {children}
  </div>
);

export default MainLayout;
