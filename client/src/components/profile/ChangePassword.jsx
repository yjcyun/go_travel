import React from 'react'
import { changePassword } from '../../constants/profileFields';
import { Field } from 'redux-form'
import { connect } from 'react-redux'
import { loadUser, updateUserProfile } from '../../redux/actions/authActions'
import { reduxForm } from 'redux-form'
import { FormWrapper, ButtonWrapper, Button } from '../../globalStyle'
import FormInput from '../FormInput';

const ChangePassword = ({ user, updateUserProfile, handleSubmit, reset }) => {
  // RENDER FormInput.jsx
  const renderInput = props => <FormInput {...props} white />

  // RENDER INPUT FIELD
  const renderInputFields =
    changePassword.map(profile => {
      if (!user.user) {
        return null;
      }
      return (
        <Field
          key={profile.name}
          name={profile.name}
          label={profile.label}
          type={profile.type}
          component={renderInput}
        />
      )
    });

  // FORM ONSUBMIT HANDLER
  const onSubmit = formValues => {
    updateUserProfile('password', formValues);
    reset();
  };

  // RENDER COMPONENT
  return (
    <FormWrapper>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderInputFields}
        <ButtonWrapper>
          <Button type='submit' login>change password</Button>
        </ButtonWrapper>
      </form>
    </FormWrapper>
  )
}

// REDUX STATE
const mapStateToProps = state => {
  return { user: state.auth }
}

// FORM VALIDATION
const validate = ({ passwordCurrent, password, passwordConfirm }) => {
  const errors = {};
  if (!passwordCurrent) errors.passwordCurrent = 'Enter your current password';
  if (!password) errors.password = 'Enter your new password';
  if (!passwordConfirm) errors.passwordConfirm = 'Re-enter your new password';
  if (password !== passwordConfirm) errors.passwordConfirm = 'Passwords must match'
  return errors;
}

// CONFIGURE REDUX-FORM
const changePasswordForm = reduxForm({
  form: 'passwordForm',
  validate
})(ChangePassword);

// EXPORT COMPONENT
export default connect(
  mapStateToProps, { loadUser, updateUserProfile }
)(changePasswordForm)
