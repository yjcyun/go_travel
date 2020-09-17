import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { imageForm, tourForm } from '../../constants/formFields'
import { fetchTour, updateTour } from '../../redux/actions/tourActions'
import { ButtonWrapper, Button, TourFormWrapper, ProfilePageWrapper, ProfileBox, BackButton } from '../../globalStyle'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import ProfileSidebar from '../profile/ProfileSidebar'
import ProfileBody from '../profile/ProfileBody'
import styled from 'styled-components'
import FormInput from '../utils/FormInput'
import FormSelect from '../utils/FormSelect'
import FormTextarea from '../utils/FormTextarea'
import FormFile from '../utils/FormFile'

class TourEdit extends Component {
  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id)
  }

  // RENDER FormInput.jsx
  renderInput = props => <FormInput {...props} white />
  renderSelect = props => <FormSelect {...props} white />
  renderTextarea = props => <FormTextarea {...props} white />
  // FILE UPLOAD COMPONENT
  fileUpload = props => <FormFile {...props} white />

  // FORM SUBMIT HANDLER
  onSubmit = formValues => {
    if (formValues.startDate) {
      const time = new Date(formValues.startDate);
      const convertedDate = time.toISOString();
      formValues.startDate = convertedDate;
    }
    this.props.updateTour(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.tour) {
      return <div>Loading...</div>
    }

    return (
      <ProfilePageWrapper>
        <ProfileBox>
          <ProfileSidebar />
          <ProfileBody>
            <BackButton>
              <Link to='/admin/tours'><HiOutlineArrowNarrowLeft />Go back to tour list</Link>
            </BackButton>
            <h2>Edit Tour</h2>
            <TourFormWrapper>
              <small style={{ color: 'tomato' }}>All fields are required</small>
              <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                {tourForm.map(tour => {
                  return (
                    <Field
                      key={tour.label}
                      name={tour.name}
                      label={tour.label}
                      type={tour.type}
                      min={tour.min}
                      values={tour.values}
                      component={tour.type === 'select' ? this.renderSelect : this.renderInput}
                    />
                  )
                })}
                {imageForm.map(image => (
                  <Field
                    key={image.id}
                    name={image.name}
                    label={image.label}
                    type={image.type}
                    component={this.fileUpload}
                    accept='image/*'
                  />
                ))}
                <Field
                  name='description'
                  label='Description'
                  component={this.renderTextarea}
                  placeholder='Write a description of tour'
                />
                <ButtonWrapper>
                  <Button type='submit' dark>Update</Button>
                </ButtonWrapper>
              </Form>
            </TourFormWrapper>
          </ProfileBody>
        </ProfileBox>
      </ProfilePageWrapper>
    )
  }
}

// STYLE
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
`

// FORM VALIDATE
const validate = ({ name, price, maxGroupSize, duration, summary, startDates, description, startLocation, imageCover, image1, image2, image3 }) => {
  const errors = {};

  if (!name) errors.name = 'Enter tour name';
  if (!price) errors.price = 'Enter tour price';
  if (!maxGroupSize) errors.maxGroupSize = 'Enter number of participants';
  if (!duration) errors.duration = 'Enter tour duration';
  if (!summary) errors.summary = 'Enter tour summary';
  if (!startDates) errors.startDates = 'Enter tour startDates';
  if (!description) errors.description = 'Enter tour description';
  if (!startLocation) errors.startLocation = 'Enter tour start location';
  if (!imageCover) errors.imageCover = 'Enter tour thumbnail';
  if (!image1) errors.image1 = 'Enter tour image1';
  if (!image2) errors.image2 = 'Enter tour image2';
  if (!image3) errors.image3 = 'Enter tour image3';

  return errors;
}

const tourReduxForm = reduxForm({
  form: 'tourForm',
  validate
})(TourEdit);

const mapStateToProps = (state, ownProps) => {
  let initialValues = state.tours[ownProps.match.params.id];

  return {
    tour: state.tours[ownProps.match.params.id],
    initialValues: initialValues
  }
}

export default connect(
  mapStateToProps, { updateTour, fetchTour }
)(tourReduxForm);
