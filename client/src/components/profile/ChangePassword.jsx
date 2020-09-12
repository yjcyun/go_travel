import React from 'react'
import { changePassword } from '../../constants/profileFields';
import { Field } from 'redux-form'
import { connect } from 'react-redux'
import { loadUser } from '../../redux/actions/authActions'
import ProfileFormTemplate from './ProfileFormTemplate'
import FormInput from '../FormInput';

const ChangePassword = (props) => {
  // RENDER FormInput.jsx
  const renderInput = props => <FormInput {...props} white />

  // RENDER INPUT FIELD
  const renderInputFields =
    changePassword.map(profile => {
      if (props.user.user) {
        return (
          <Field
            key={profile.name}
            name={profile.name}
            label={profile.label}
            type={profile.type}
            component={renderInput}
          />
        )
      }
    });

  // FORM ONSUBMIT HANDLER
  const onSubmit = formValues => {
    console.log(formValues)
  };

  return (
    <div>
      <ProfileFormTemplate
        title='Change Password'
        fields={renderInputFields}
        component={renderInput}
        onSubmit={onSubmit}
        button='change password'
      />
    </div>
  )
}

const mapStateToProps = state => {
  return { user: state.auth }
}

export default connect(mapStateToProps, { loadUser })(ChangePassword)
