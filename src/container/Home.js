import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import * as MetaData from '../utils/MetaData';
import Link from '../component/LinkComponent'
const cookies = new Cookies();

class Home extends Component {

  logOut () {
    cookies.remove('userToken');
    this.props.history.push("/");
  }

  render () {
    const {
      user
    } = this.props
    return (
      <div>
        <p>{`Welocme ${user.name}`}</p>
        <Link onClick={() => this.logOut()} >{MetaData.LOG_OUT}</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {user: state.login.auth.data}
}

Home.propTypes = {
  name: PropTypes.string
};

export default connect(mapStateToProps)(Home)