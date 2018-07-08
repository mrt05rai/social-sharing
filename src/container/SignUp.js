import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Route, Redirect } from 'react-router'
import * as MetaData from '../utils/MetaData';
import FormInput from '../component/FormInput'
import Button from '../component/Button'
import Link from '../component/LinkComponent'
import * as controller from '../utils/ValidationController';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
			name: '',
      email: '',
      password: '',
			error: false,
			errorMessage: ''
    };
  }
  
	componentWillReceiveProps (nextProps) {
		if (nextProps.signup.changingStatus === 'success') {
			// <Redirect to="/" />
			window.location = "/"
			// this.props.history.push("/");
		}
	}

  signUp() {
		const  {
			error
		} = this.state
		let validate = controller.validateSignUpForm(this.state.name, this.state.email, this.state.password)
		if (validate.isValid || error) {
			this.setState({
				error: validate.isValid,
				errorMessage: validate.errorText
			})
			return
		}
		this.props.dispatch({ type: 'SIGN_UP', payload: this.state });
  }

  getFormInputFields() {
    return (
      (MetaData.SIGN_UP_FIELD).map(data => (
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
        <h2 className="text-center">{MetaData.SIGN_UP}</h2>
        <form className="cmmnt_form">
					{error && <p>{errorMessage}</p>}
          {this.getFormInputFields()}
          <div className="form-group wdth100">
            <Button
              className="pay paymnt_btn"
              label={MetaData.SIGN_UP}
              onClick={(e) => this.signUp(e)}
            />
            <Link onClick={onClick} >{MetaData.LOG_IN}</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {signup: state.signup}
};

SignUp.propTypes = {
  dispatch: PropTypes.func,
};


export default connect(mapStateToProps)(SignUp);