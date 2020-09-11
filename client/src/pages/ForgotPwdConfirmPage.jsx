import React from 'react'
import PasswordForgotConfirm from '../components/auth/PasswordForgotConfirm'
import AuthPageTemplate from '../components/auth/AuthPageTemplate'

const ForgotPwdSubmittedPage = () => {
  return (
   <AuthPageTemplate>
     <PasswordForgotConfirm />
   </AuthPageTemplate>
  )
}

export default ForgotPwdSubmittedPage