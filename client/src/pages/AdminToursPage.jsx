import React from 'react'
import { ProfilePageWrapper } from '../globalStyle'
import ProfileSidebar from '../components/profile/ProfileSidebar'
import ToursList from '../components/admin/ToursList'

const AdminToursPage = () => {
  return (
    <ProfilePageWrapper>
      <ProfileSidebar />
      <ToursList />
    </ProfilePageWrapper>
  )
}

export default AdminToursPage
