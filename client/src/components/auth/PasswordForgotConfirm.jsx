import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../nav/Logo'
import Alert from '../Alert'

class PasswordForgotConfirm extends Component {
  render() {
    return (
      <FormWrapper>
        <Logo large />
        <h2>Forgot Password?</h2>
        <Alert message='Your request has been submitted! Please check your email and click on the link in the email to create a new password.' />
        <ButtonWrapper>
          <Link to='/reset-password'>
            <Button type='button' login>Reset Password</Button>
          </Link>
          <Hr><span>or</span></Hr>
          <Link to='/'>
            <Button>Home</Button>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    )
  }
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
export default PasswordForgotConfirm;