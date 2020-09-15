import React, { Component } from 'react'
import _ from 'lodash'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { tourForm } from '../../constants/formFields'
import { createTour, fetchTour, updateTour } from '../../redux/actions/tourActions'
import { ButtonWrapper, Button, TourFormWrapper, ProfilePageWrapper } from '../../globalStyle'
import Dropzone from 'react-dropzone'
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

  renderSelect = (props) => {
    return (
      <FormSelect  {...props} />
    )
  }
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

    console.log(this.props.tour)
    return (
      <ProfilePageWrapper>
        <ProfileSidebar />
        <ProfileBody>
          <h2>Edit Tour</h2>
          {/* _.pick(this.props.tour, 'name', 'price', 'maxGroupSize', 'duration', 'summary', 'description') */}
          <TourFormWrapper>
            <small style={{ color: 'tomato' }}>* fields are required</small>
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              {tourForm.map(tour => {
                return (
                  <Field
                    initialValues={{ name: 'Hello?' }}
                    key={tour.label}
                    name={tour.name}
                    label={tour.label}
                    type={tour.type}
                    min={tour.min}
                    value={tour.value}
                    component={this.renderInput}
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
  return { tour: state.tours[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps, { updateTour, fetchTour }
)(tourReduxForm);
