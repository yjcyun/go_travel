import React from 'react'
import { ProfilePageWrapper } from '../globalStyle'
import ProfileSidebar from '../components/profile/ProfileSidebar'
import UserProfile from '../components/profile/UserProfile'

const ProfilePage = () => {
  return (
    <ProfilePageWrapper>
      <ProfileSidebar />
      <UserProfile />
    </ProfilePageWrapper>
  )
}

export default ProfilePage