import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../nav/Logo'

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
            <Button type='submit' login>{button1}</Button>
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

// STYLES
const FormWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;

  h2 {
    margin: 1.5rem 0;
  }

  @media (min-width: 996px) {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
`

const ButtonWrapper = styled.div`
  display: block;
  margin: 2rem 0;
`

const Button = styled.button`
  cursor: pointer;
  padding: 0.8rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--accent-clr);
  margin: 1rem 0;
  background-color: ${props => props.login ? 'var(--accent-clr)' : 'transparent'};
  color: ${props => props.login ? '#fff' : '000'};
`

const Hr = styled.div`
  height: 1px;
  width: 80%;
  margin: 0.2rem auto;
  background-color: silver;
  position: relative;

  span {
    position: absolute;
    left: calc(50% - 1.5rem);
    top: -0.8rem;
    background-color: var(--background-clr);
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`
// CONFIGURE REDUX-FORM
export default reduxForm({
  form: 'authForm',
  validate
})(AuthFormTemplate);