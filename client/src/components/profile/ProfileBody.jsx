import React from 'react'
import styled from 'styled-components'
import EditProfile from './EditProfile'
import ChangePassword from './ChangePassword'

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
`


export default ProfileBody