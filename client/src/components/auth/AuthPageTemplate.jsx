import React from 'react'
import styled from 'styled-components'

const SignupPage = ({ children }) => {
  return (
    <AuthPageWrapper>
      <AuthFormImg></AuthFormImg>
      {children}
    </AuthPageWrapper>
  )
}

const AuthPageWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr;
  height: 100vh;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: none;
    grid-gap: 0;
  }
`

const AuthFormImg = styled.div`
  background-image: url('/background-1.jpg');
  background-size: cover;
  background-position:center;
`

export default SignupPage