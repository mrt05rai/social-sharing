import React, { Component } from 'react';
import * as MetaData from '../utils/MetaData';
import FormInput from '../component/FormInput'
import Button from '../component/Button'
import Link from '../component/LinkComponent'
import Login from './Login'
import SignUp from './SignUp'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginForm: true
    }
  }

  render() {
    const {
      isLoginForm
    } = this.state
    return (
      isLoginForm ? <Login {...this.props} onClick={() => this.setState({ isLoginForm: false })} /> : <SignUp {...this.props} onClick={() => this.setState({ isLoginForm: true })} />
    );
  }
}

export default App;
