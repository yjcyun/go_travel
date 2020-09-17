import React from 'react'
import AuthPageTemplate from '../components/auth/AuthPageTemplate'
import { Button, ButtonWrapper, FormWrapper, AuthHr } from '../globalStyle'
import Logo from '../components/nav/Logo'
import Alert from '../components/utils/Alert'
import { Link } from 'react-router-dom'

const ForgotPwdSubmittedPage = () => {
  return (
    <AuthPageTemplate>
      <FormWrapper>
        <Logo large />
        <h2>Forgot Password?</h2>
        <Alert message='Your request has been submitted! Please check your email and click on the link in the email to create a new password.' />
        <ButtonWrapper>
          <Link to='/reset-password'>
            <Button type='button' dark>Reset Password</Button>
          </Link>
          <AuthHr><span>or</span></AuthHr>
          <Link to='/'>
            <Button>Home</Button>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </AuthPageTemplate>
  )
}

export default ForgotPwdSubmittedPage