import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../nav/Logo'
import { FormWrapper, ButtonWrapper, Button, Hr } from '../../globalStyle'

class AuthFormTemplate extends Component {
  render() {
    const { title, alert, onSubmit, fields, forgotpass, button1, button2, linkto } = this.props;
    return (
      <FormWrapper>
        <Logo large />
        <h2>{title}</h2>
        {alert}
        <form onSubmit={this.props.handleSubmit(onSubmit)}>
          {fields}
          {forgotpass}
          <ButtonWrapper>
            <Button type='submit' dark>{button1}</Button>
            <Hr><span>or</span></Hr>
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