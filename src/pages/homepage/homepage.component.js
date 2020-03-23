import React from 'react';

import './homepage.styles.scss';

import { Link } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Homepage = (props) => {
  return(
      <div className="homepage">
        <Directory />
      </div>
  );
};

export default Homepage;