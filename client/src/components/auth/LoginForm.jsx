import React, { Component } from 'react'
import { Field } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logIn } from '../../redux/actions/authActions'
import { loginForm } from '../../constants/formFields'
import styled from 'styled-components'
import FormInput from '../FormInput'
import Alert from '../Alert'
import AuthFormTemplate from './AuthFormTemplate'

class LoginForm extends Component {
  // RENDER FormInput.jsx
  renderInput = props => <FormInput {...props} />

  // FORM ONSUBMIT HANDLER
  onSubmit = formValues => {
    this.props.logIn(formValues);
  };

  // FORM FIELDS
  renderInputFields =
    loginForm.map(login => (
      <Field
        key={login.name}
        name={login.name}
        label={login.label}
        type={login.type}
        component={this.renderInput}
      />
    ));

  // ALERT
  alertMessage = () => {
    if (this.props.alert) {
      return <Alert message='Incorrect email or password' />
    }
  }

  // FORTGOT PASSWORD LINK
  forgotPassword = () => (
    <ForgotPwd>
      <Link to='/forgot-password'>Forgot password?</Link>
    </ForgotPwd>
  )

  render() {
    return (
      <AuthFormTemplate
        fields={this.renderInputFields}
        title='Hello, Welcome Back!'
        onSubmit={this.onSubmit}
        alert={this.alertMessage()}
        forgotpass={this.forgotPassword()}
        linkto='/signup'
        button1='Login'
        button2='Sign Up'
      />
    )
  }
}

const ForgotPwd = styled.div`
  text-align: right;

  a {
    color: #0000EE;
    font-size: 0.9rem;
  }
`

const mapStateToProps = state => {
  return { alert: state.alert[0] }
}

export default connect(mapStateToProps, { logIn })(LoginForm);