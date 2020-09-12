import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate'
import FormInput from '../FormInput'
import { Field } from 'redux-form'
import { editProfile } from '../../constants/profileFields'
import { connect } from 'react-redux'
import { loadUser, updateUserProfile } from '../../redux/actions/authActions'
import styled from 'styled-components'

const EditProfile = ({ user, updateUserProfile }) => {
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
    updateUserProfile(formValues)
  };

  if (!user.user) {
    return null;
  }

  return (
    <div>
      <ProfileFormTemplate
        title='Your Account Profile'
        fields={renderInputFields}
        component={renderInput}
        onSubmit={onSubmit}
        button='save setting'
      />
    </div>
  )
}

const mapStateToProps = state => {
  return { user: state.auth }
}

export default connect(
  mapStateToProps, { loadUser, updateUserProfile }
)(EditProfile)