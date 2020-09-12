import React from 'react'
import { Field } from 'redux-form'
import { editProfile } from '../../constants/profileFields'
import { connect } from 'react-redux'
import { loadUser, updateUserProfile } from '../../redux/actions/authActions'
import { reduxForm } from 'redux-form'
import { FormWrapper, ButtonWrapper, Button } from '../../globalStyle'
import FormInput from '../FormInput'

const EditProfile = ({ user, updateUserProfile, handleSubmit }) => {
  // RENDER FormInput.jsx
  const renderInput = props => <FormInput {...props} white />

  // RENDER INPUT FIELD
  const renderInputFields =
    editProfile.map(profile => {
      if (user.user) {
        return (
          <Field
            key={profile.name}
            name={profile.name}
            label={profile.label}
            type={profile.type}
            component={renderInput}
            placeholder={profile.name === 'name' ? user.user.name : user.user.email}
            disabled={profile.name === 'email'}
          />
        )
      }
    });

  // FORM ONSUBMIT HANDLER
  const onSubmit = formValues => {
    updateUserProfile('profile', formValues)
  };

  // RENDER COMPONENT
  if (!user.user) {
    return null;
  }

  return (
    <FormWrapper>
      <h2>Your Account Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderInputFields}
        <ButtonWrapper>
          <Button type='submit' login>save setting</Button>
        </ButtonWrapper>
      </form>
    </FormWrapper>
  )
}

// REDUX STATE
const mapStateToProps = state => {
  return { user: state.auth }
}

// FORM VALIDATE
const validate = ({ name }) => {
  const errors = {};
  if (!name) errors.name = 'Enter your name';
  return errors;
}

// CONFIGURE REDUX-FORM
const editForm = reduxForm({
  form: 'profileForm',
  validate
})(EditProfile);

// EXPORT COMPONENT
export default connect(
  mapStateToProps, { loadUser, updateUserProfile }
)(editForm)