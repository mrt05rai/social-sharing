import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component {
  render () {
    console.log(">>>>> props... ", this.props)
    return (
      <p>Welcome !!!</p>
    );
  }
}

const mapStateToProps = state => {
  return {user: state.login}
}

Home.propTypes = {
  name: PropTypes.string
};

export default connect(mapStateToProps)(Home)