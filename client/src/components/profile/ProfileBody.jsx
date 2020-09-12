import React from 'react'
import styled from 'styled-components'
import EditProfile from './EditProfile'
import ChangePassword from './ChangePassword'

const ProfileBody = () => {
  return (
    <ProfileBodyWrapper>
      <EditProfile />
      <Hr />
      <ChangePassword />
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
const Hr = styled.div`
  height: 1px;
  width: 100%;
  background-color: silver;
`

export default ProfileBody