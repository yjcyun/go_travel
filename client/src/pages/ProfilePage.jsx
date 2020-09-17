import React from 'react'
import { ProfileBox, ProfilePageWrapper } from '../globalStyle'
import ProfileSidebar from '../components/profile/ProfileSidebar'
import UserProfile from '../components/profile/UserProfile'

const ProfilePage = () => {
  return (
    <ProfilePageWrapper>
      <ProfileBox>
        <ProfileSidebar />
        <UserProfile />
      </ProfileBox>
    </ProfilePageWrapper>
  )
}

export default ProfilePage