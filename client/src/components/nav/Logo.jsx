import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <LogoWrapper large>
      <Link to='/'>
        <img src='/logo.png' alt='Logo' />
        <span>GoTravel</span>
      </Link>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  img {
    margin-right: 1rem;
    width: 40px;
  }

   a{
     display: flex;
     align-items: center;
   }

 
  @media (min-width: 768px) {
    span {
      font-size: ${props => props.large ? '2rem' : ''}
    }

    img {
      width: ${props => props.large ? '60px' : '40px'}
    }
  }
`

export default Logo