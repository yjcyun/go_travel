import React, { Component } from 'react'
import { ProfilePageWrapper } from '../../globalStyle'
import ProfileSidebar from '../profile/ProfileSidebar'
import styled from 'styled-components'
import ProfileBody from '../profile/ProfileBody'
import TourFormTemplate from './TourFormTemplate'


class TourCreate extends Component {
  render() {
    return (
      <ProfilePageWrapper>
        <ProfileSidebar />
        <ProfileBody>
          <h2>Create New Tour</h2>
          <TourFormTemplate />
        </ProfileBody>
      </ProfilePageWrapper>
    )
  }
}


export default TourCreate
