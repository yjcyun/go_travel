import React from 'react'
import styled from 'styled-components'
import ProfileSidebar from '../components/profile/ProfileSidebar'
import ProfileBody from '../components/profile/ProfileBody'

const ProfilePage = () => {
  return (
    <ProfilePageWrapper>
      <ProfileSidebar />
      <ProfileBody />
    </ProfilePageWrapper>
  )
}

const ProfilePageWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
`

export default ProfilePage