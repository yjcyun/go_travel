import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, ProfilePageWrapper, TourFormWrapper, ButtonWrapper } from '../../globalStyle'
import { createTour } from '../../redux/actions/tourActions'
import ProfileSidebar from '../profile/ProfileSidebar'
import ProfileBody from '../profile/ProfileBody'
import TourFormTemplate from './TourFormTemplate'
import FormInput from '../utils/FormInput'
import FormSelect from '../utils/FormSelect'
import FormFile from '../utils/FormFile'
import styled from 'styled-components'
import { tourForm } from '../../constants/formFields'

class TourCreate extends Component {

  // RENDER FORM INPUT/SELECT
  renderInput = props => <FormInput {...props} white />
  renderSelect = props => <FormSelect {...props} white />
  // FILE UPLOAD COMPONENT
  fileUpload = props => <FormFile {...props} white />

  // FORM SUBMIT HANDLER
  onSubmit = formValues => {
    if (formValues.startDate) {
      const time = new Date(formValues.startDate);
      const convertedDate = time.toISOString();
      formValues.startDate = convertedDate;
    }
    this.props.createTour(formValues);
  };

  // RENDER COMPONENT
  render() {
    return (
      <ProfilePageWrapper>
        <ProfileSidebar />
        <ProfileBody>
          <h2>Create New Tour</h2>
          <TourFormWrapper>
            <small style={{ color: 'tomato' }}>* fields are required</small>
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
              {/* IMAGES */}
              <div>
                <Field
                  name='imageCover'
                  type='file'
                  label='Cover Image'
                  component={this.fileUpload}
                  accept='image/*'
                />
                <Field
                  name='image1'
                  type='file'
                  label='Image 1'
                  component={this.fileUpload}
                  accept='image/*'
                />
                <Field
                  name='image2'
                  type='file'
                  label='Image2'
                  component={this.fileUpload}
                  accept='image/*'
                />
                <Field
                  name='image3'
                  type='file'
                  label='Image3'
                  component={this.fileUpload}
                  accept='image/*'
                />
              </div>
              <ButtonWrapper>
                <Button type='submit' dark>Create</Button>
              </ButtonWrapper>
            </Form>
          </TourFormWrapper>
        </ProfileBody>
      </ProfilePageWrapper>
    )
  }
}
// FORM VALIDATE
const validate = ({ name, price, maxGroupSize, duration, summary }) => {
  const errors = {};

  if (!name) errors.name = 'Enter tour name';
  if (!price) errors.price = 'Enter tour price';
  if (!maxGroupSize) errors.maxGroupSize = 'Enter number of participants';
  if (!duration) errors.duration = 'Enter tour duration';
  if (!summary) errors.summary = 'Enter tour summary';

  return errors;
}

// STYLE
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
`

// WRAP REDUX-FORM 
const tourReduxForm = reduxForm({
  form: 'tourForm',
  validate
})(TourCreate);

// WRAP REDUX
export default connect(
  null, { createTour }
)(tourReduxForm);