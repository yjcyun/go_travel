import React from 'react'
import { ProfileBox, ProfilePageWrapper } from '../globalStyle'
import ProfileSidebar from '../components/profile/ProfileSidebar'
import ToursList from '../components/admin/ToursList'

const AdminToursPage = () => {
  return (
    <ProfilePageWrapper>
      <ProfileBox>
        <ProfileSidebar />
        <ToursList />
      </ProfileBox>
    </ProfilePageWrapper>
  )
}

export default AdminToursPage
