import React from 'react'
import ProfileFormTemplate from './ProfileFormTemplate'
import FormInput from '../FormInput'
import { Field } from 'redux-form'
import { editProfile } from '../../constants/profileFields'
import { connect } from 'react-redux'
import { loadUser } from '../../redux/actions/authActions'
import styled from 'styled-components'

const EditProfile = (props) => {
  // RENDER FormInput.jsx
  const renderInput = props => <FormInput {...props} white />

  // RENDER INPUT FIELD
  const renderInputFields =
    editProfile.map(profile => {
      if (props.user.user) {
        return (
          <Field
            key={profile.name}
            name={profile.name}
            label={profile.label}
            type={profile.type}
            component={renderInput}
            placeholder={profile.name === 'name' ? props.user.user.name : props.user.user.email}
            disabled={profile.name === 'email'}
          />
        )
      }
    });

  console.log(props.user.user)

  // FORM ONSUBMIT HANDLER
  const onSubmit = formValues => {
    console.log(formValues)
  };

  if (!props.user.user) {
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

export default connect(mapStateToProps, { loadUser })(EditProfile)