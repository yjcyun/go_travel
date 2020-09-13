import React from 'react'
import styled from 'styled-components'
import ProfileSidebar from '../components/profile/ProfileSidebar'
import UserProfile from '../components/profile/UserProfile'
import { ProfilePageWrapper } from '../globalStyle'

const ProfilePage = () => {
  return (
    <ProfilePageWrapper>
      <ProfileSidebar />
      <UserProfile />
    </ProfilePageWrapper>
  )
}

export default ProfilePage