import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router'
// import { Redirect } from 'react-router-dom'
import * as MetaData from '../utils/MetaData';
import FormInput from '../component/FormInput'
import Button from '../component/Button'
import Link from '../component/LinkComponent'
import * as controller from '../utils/ValidationController';

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
		// if (nextProps.signup.changingStatus === 'success') {
			<Redirect to="/home" />
			// window.location = "/home"
			// this.props.history.push("/home");
			console.log("nextprops>>>>>>>>>>>inside it ", nextProps)
		// }
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
      <div className="accnt_form_wrap wdth100">
        <h2 className="text-center">{MetaData.LOG_IN}</h2>
        <form className="cmmnt_form">
					{error && <p>{errorMessage}</p>}
          {this.getFormInputFields()}
          <div className="form-group wdth100">
            <Button
              className="pay paymnt_btn"
              label={MetaData.LOG_IN}
              onClick={(e) => this.logIn(e)}
            />
            <Link onClick={onClick} >{MetaData.SIGN_UP}</Link>
          </div>
        </form>
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
