import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { tourForm } from '../../constants/formFields'
import { fetchTour, updateTour } from '../../redux/actions/tourActions'
import { ButtonWrapper, Button, TourFormWrapper, ProfilePageWrapper } from '../../globalStyle'
import FormInput from '../FormInput'
import ProfileSidebar from '../profile/ProfileSidebar'
import ProfileBody from '../profile/ProfileBody'
import styled from 'styled-components'
import FormSelect from '../FormSelect'

class TourEdit extends Component {
  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id)
  }

  // RENDER FormInput.jsx
  renderInput = props => <FormInput {...props} white />
  renderSelect = props => <FormSelect {...props} white />

  // FILE UPLOAD COMPONENT
  fileUpload = ({ label, input, type }) => {
    delete input.value;
    return (
      <>
        <label>{label}</label>
        <input type={type} {...input} />
      </>
    )
  }

  // FORM SUBMIT HANDLER
  onSubmit = formValues => {
    console.log(formValues);
    this.props.updateTour(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.tour) {
      return <div>Loading...</div>
    }

    return (
      <ProfilePageWrapper>
        <ProfileSidebar />
        <ProfileBody>
          <h2>Edit Tour</h2>
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

              <div>
                <Field
                  name='imageCover'
                  type='file'
                  label='Cover Image'
                  component={this.fileUpload}
                  accept='image/*'
                />
                <Field
                  name='images'
                  type='file'
                  label='Cover Image'
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

// STYLE
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
`

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
