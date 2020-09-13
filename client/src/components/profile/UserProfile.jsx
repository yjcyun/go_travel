import React from 'react'
import EditProfile from './EditProfile'
import ChangePassword from './ChangePassword'
import ProfileBody from './ProfileBody'
import { Hr } from '../../globalStyle'

const UserProfile = () => {
  return (
      <ProfileBody>
        <EditProfile />
        <Hr />
        <ChangePassword />
      </ProfileBody>
  )
}

export default UserProfile