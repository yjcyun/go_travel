import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/auth/LoginForm'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const LoginPage = ({ isSignedIn }) => {
  if (isSignedIn.isSignedIn && isSignedIn.token) {
    return <Redirect to='/' />
  }
  
  return (
    <LoginPageWrapper>
      <LoginFormImg></LoginFormImg>
      <LoginForm />
    </LoginPageWrapper>
  )
}

const LoginPageWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr;
  height: 100vh;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: none;
  }
`

const LoginFormImg = styled.div`
  background-image: url('/background-1.jpg');
  background-size: cover;
  background-position:center;
`

// BRING REDUX STATE
const mapStateToProps = state => {
  return { isSignedIn: state.auth }
}

export default connect(mapStateToProps)(LoginPage)