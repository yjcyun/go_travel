import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ProfilePageWrapper } from '../../globalStyle'
import { createTour } from '../../redux/actions/tourActions'
import ProfileSidebar from '../profile/ProfileSidebar'
import ProfileBody from '../profile/ProfileBody'
import TourFormTemplate from './TourFormTemplate'

class TourCreate extends Component {

  // FORM SUBMIT HANDLER
  onSubmit = formValues => {
    if (formValues.startDate) {
      const time = new Date(formValues.startDate);
      const convertedDate = time.toISOString();
      formValues.startDate = convertedDate;
    }
    this.props.createTour(formValues);
  };

  // RENDER CREATE BUTTON
  renderActions = () => <Button type='submit' dark>Create</Button>

  // RENDER COMPONENT
  render() {
    return (
      <ProfilePageWrapper>
        <ProfileSidebar />
        <ProfileBody>
          <h2>Create New Tour</h2>
          <TourFormTemplate
            onSubmit={this.onSubmit}
            actions={this.renderActions()}
          />
        </ProfileBody>
      </ProfilePageWrapper>
    )
  }
}

export default connect(null, { createTour })(TourCreate)