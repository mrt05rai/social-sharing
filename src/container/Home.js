import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Home = (props) => {
  const {
    name
  } = props;
  return (
    <p>Welcome !!!</p>
  );
};

Home.propTypes = {
  name: PropTypes.string
};

export default Home