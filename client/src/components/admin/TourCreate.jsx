import React, { Component } from 'react'
import { connect } from 'react-redux'
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
          <TourEditWrapper>
            <h2>Create New Tour</h2>
            <TourFormTemplate />
          </TourEditWrapper>
        </ProfileBody>
      </ProfilePageWrapper>
    )
  }
}

const TourEditWrapper = styled.div`
  margin: 5rem; 
`

export default connect(null)(TourCreate)
