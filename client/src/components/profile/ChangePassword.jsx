import React, { Component } from 'react'
import { changePassword } from '../../constants/profileFields';
import { Field } from 'redux-form'
import { connect } from 'react-redux'
import { loadUser, updateUserProfile } from '../../redux/actions/authActions'
import { reduxForm } from 'redux-form'
import { FormWrapper, ButtonWrapper, Button } from '../../globalStyle'
import FormInput from '../utils/FormInput'

class ChangePassword extends Component {
  // RENDER FormInput.jsx
  renderInput = props => <FormInput {...props} white />

  // FORM ONSUBMIT HANDLER
  onSubmit = formValues => {
    this.props.updateUserProfile('password', formValues);
    this.props.reset();
  };

  // RENDER COMPONENT
  render() {
    return (
      <FormWrapper>
        <h2>Change Password</h2>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          {changePassword.map(profile => {
            return (
              <Field
                key={profile.name}
                name={profile.name}
                label={profile.label}
                type={profile.type}
                component={this.renderInput}
              />
            )
          })}
          <ButtonWrapper>
            <Button type='submit' dark>change password</Button>
          </ButtonWrapper>
        </form>
      </FormWrapper >
    )
  }
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