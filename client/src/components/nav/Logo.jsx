import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = ({ largeLogo,dark }) => {
  return (
    <LogoWrapper large={largeLogo} dark={dark}>
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
     color: ${props => props.dark ? '#fff' : '#000'};
   }

 
  @media (min-width: 768px) {
    span {
      font-size: ${props => props.large ? '2rem' : '1.5rem'}
    }

    img {
      width: ${props => props.large ? '60px' : '50px'}
    }
  }
`

export default Logo