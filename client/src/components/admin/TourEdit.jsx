import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProfilePageWrapper } from '../../globalStyle'
import { fetchTour } from '../../redux/actions/tourActions'
import ProfileSidebar from '../profile/ProfileSidebar'
import styled from 'styled-components'
import ProfileBody from '../profile/ProfileBody'

class TourEdit extends Component {
  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id);
  }

  render() {
    return (
      <ProfilePageWrapper>
        <ProfileSidebar />
        <ProfileBody>
          <TourEditWrapper>
            <h2>Edit Tour: </h2>
          </TourEditWrapper>
        </ProfileBody>
      </ProfilePageWrapper>
    )
  }
}

const TourEditWrapper = styled.div`
  margin: 5rem; 
`

export default connect(null, { fetchTour })(TourEdit)
