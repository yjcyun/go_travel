import React from 'react'
import styled from 'styled-components'
import EditProfile from './EditProfile'
import ChangePassword from './ChangePassword'

const ProfileBody = () => {
  return (
    <ProfileBodyWrapper>
      <EditProfile />
      <ChangePassword />
    </ProfileBodyWrapper>
  )
}

const ProfileBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem;
  background-color: #fff;
  box-shadow: var(--box-shadow);
`

export default ProfileBody