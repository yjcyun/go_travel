import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import AuthPageTemplate from '../components/auth/AuthPageTemplate'

const LoginPage = () => {
  return (
    <AuthPageTemplate>
      <LoginForm />
    </AuthPageTemplate>
  )
}

export default LoginPage