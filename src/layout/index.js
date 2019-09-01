import React from 'react';
import Helmet from 'react-helmet';
import './index.scss';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content="content" />
        </Helmet>
        {children}
      </div>
    );
  }
}
