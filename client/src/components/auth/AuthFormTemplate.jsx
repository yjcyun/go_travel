import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { FormWrapper, ButtonWrapper, Button, AuthHr } from '../../globalStyle'
import Logo from '../nav/Logo'

class AuthFormTemplate extends Component {
  render() {
    const { title, alert, onSubmit, fields, forgotpass, button1, button2, linkto, white} = this.props;
    return (
      <FormWrapper>
        <Logo largeLogo light/>
        <h2>{title}</h2>
        <p>Login as admin and try all the features or create a new account</p>
        {alert}
        <form onSubmit={this.props.handleSubmit(onSubmit)}>
          {fields}
          {forgotpass}
          <ButtonWrapper>
            <Button type='submit' dark>{button1}</Button>
            <AuthHr white={white}><span>or</span></AuthHr>
            <Link to={linkto}>
              <Button>{button2}</Button>
            </Link>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    )
  }
}

// FORM VALIDATION
const validate = ({ email, password, passwordConfirm, name }) => {
  const errors = {};
  const emailCheck = value => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  if (!email) {
    errors.email = 'Enter your email address';
  } else if (emailCheck(email)) {
    errors.email = 'Enter a valid email';
  }
  if (!name) errors.name = 'Enter your name';
  if (!password) errors.password = 'Enter your password';
  if (!passwordConfirm) errors.passwordConfirm = 'Re-enter your password';
  if (password !== passwordConfirm) errors.passwordConfirm = 'Passwords must match'

  return errors;
}

// CONFIGURE REDUX-FORM
export default reduxForm({
  form: 'authForm',
  validate
})(AuthFormTemplate);