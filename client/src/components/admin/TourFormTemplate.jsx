import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { tourForm } from '../../constants/formFields'
import { createTour } from '../../redux/actions/tourActions'
import { ButtonWrapper, Button, TourFormWrapper } from '../../globalStyle'
import Dropzone from 'react-dropzone'
import FormInput from '../FormInput'
import styled from 'styled-components'
import FormSelect from '../FormSelect'

class TourFormTemplate extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({ files })
    };
    this.state = {
      files: []
    };
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

  renderDropzoneInput = ({ input, name, meta }) => {
    const files = input.value;
    return (
      <>
        <Dropzone
          name={name}
          onDrop={filesToUpload => input.onChange(filesToUpload)}
        >
          <div>Try dropping some files here, or click to select files to upload</div>
        </Dropzone>
        {meta.touched && meta.error &&
          <span className='error'>{meta.error}</span>}
        {files && Array.isArray(files) && (
          <ul>
            {files.map((file, i) => <li key={i}>{file.name}</li>)}
          </ul>
        )}
      </>
    )
  }

  // FORM SUBMIT HANDLER
  onSubmit = formValues => {
    console.log(formValues);
    this.props.createTour(formValues);
  };

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>{file.name}</li>
    ));
    console.log(files);

    return (
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

            <Dropzone onDrop={this.onDrop}>
              {({ getRootProps, getInputProps }) => (
                <section className="container">
                  <aside>
                    <h4>Images</h4>
                  </aside>
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                  <ul>{files}</ul>
                </section>
              )}
            </Dropzone>

          </div>
          <ButtonWrapper>
            <Button type='submit' dark>Create</Button>
          </ButtonWrapper>
        </Form>
      </TourFormWrapper>
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
})(TourFormTemplate);



export default connect(
  null, { createTour }
)(tourReduxForm);
