import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Hr, ButtonWrapper, FormWrapper } from '../../globalStyle'
import Logo from '../nav/Logo'
import Alert from '../Alert'
import styled from 'styled-components'

class PasswordForgotConfirm extends Component {
  render() {
    return (
      <FormWrapper>
        <Logo large />
        <h2>Forgot Password?</h2>
        <Alert message='Your request has been submitted! Please check your email and click on the link in the email to create a new password.' />
        <ButtonWrapper>
          <Link to='/reset-password'>
            <Button type='button' dark>Reset Password</Button>
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

export default PasswordForgotConfirm;