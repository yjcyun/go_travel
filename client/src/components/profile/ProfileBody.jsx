import React from 'react'
import styled from 'styled-components'

const ProfileBody = ({children}) => {
  return (
    <ProfileBodyWrapper>
      {children}
    </ProfileBodyWrapper>
  )
}

const ProfileBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 1rem;

  @media (min-width: 996px){
    padding: 5rem;
  }
`

export default ProfileBody