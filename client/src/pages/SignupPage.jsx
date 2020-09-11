import React from 'react'
import SignupForm from '../components/auth/SignupForm'
import AuthPageTemplate from '../components/auth/AuthPageTemplate'

const SignupPage = () => {
  return (
    <AuthPageTemplate>
      <SignupForm />
    </AuthPageTemplate>
  )
}

export default SignupPage