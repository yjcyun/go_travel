import React from 'react'
import PasswordForgot from '../components/auth/PasswordForgot'
import AuthPageTemplate from '../components/auth/AuthPageTemplate'

const ForgotPasswordPage = () => {
  return (
    <AuthPageTemplate>
      <PasswordForgot />
    </AuthPageTemplate>
  )
}

export default ForgotPasswordPage