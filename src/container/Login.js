import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router'
import Cookies from 'universal-cookie';
import * as MetaData from '../utils/MetaData';
import FormInput from '../component/FormInput'
import Button from '../component/Button'
import Link from '../component/LinkComponent'
import * as controller from '../utils/ValidationController';
const cookies = new Cookies();

class Login extends Component {
	constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
			error: false,
			errorMessage: ''
    };
  }

	componentWillReceiveProps (nextProps) {
    if (nextProps.login.auth.message) {
      this.setState({
        error: true,
				errorMessage: nextProps.login.auth.message
			})
    }
		if (nextProps.login.changingStatus === 'success' && nextProps.login.auth.token) {
      cookies.set('userToken', nextProps.login.auth.token, { path: '/' });
			this.props.history.push("/home");
		}
	}
  
  logIn() {
		let validate = controller.validateLogin(this.state.email, this.state.password)
		if (validate.isValid) {
			this.setState({
				error: validate.isValid,
				errorMessage: validate.errorText
			})
			return
		}
		this.props.dispatch({ type: 'LOGIN', payload: this.state });
  }

  getFormInputFields() {
    return (
      (MetaData.LOGIN_UP_FIELD).map(data => (
        <FormInput
          key={data.label}
          wrapClass={data.wClass}
          labelClass={data.lClass}
          inputClass={data.iClass}
          label={data.label}
          type={data.type}
          holder={data.holder}
          value={this.state[data.name]}
          onChange={e => this.setState({ [data.name]: e })}
        />
      ))
    );
  }

  render() {
    const {
        onClick
    } = this.props;
		const {
        error, errorMessage
    } = this.state;
    return (
      <div className="form_div">
        <h2 className="form_label">{MetaData.LOG_IN}</h2>
        <form>
					{error && <p className="error">{errorMessage}</p>}
          {this.getFormInputFields()}
          <p><input type="button" onClick={(e) => this.logIn(e)} value={MetaData.LOG_IN}/></p>
        </form>
        <Link onClick={onClick} >{MetaData.SIGN_UP}</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

Login.propTypes = {
  dispatch: PropTypes.func,
};


export default connect(mapStateToProps)(Login);
