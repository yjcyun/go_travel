import React, { Component } from 'react'
import { Field } from 'redux-form'
import { connect } from 'react-redux'
import { forgotPassword } from '../../redux/actions/authActions'
import { forgotPassForm } from '../../constants/formFields'
import FormInput from '../FormInput'
import Alert from '../Alert'
import AuthFormTemplate from './AuthFormTemplate'

class PasswordForgot extends Component {
  // RENDER FormInput.jsx
  renderInput = props => <FormInput {...props} />

  // FORM ONSUBMIT HANDLER
  onSubmit = formValues => {
    this.props.forgotPassword(formValues);
  };

  // FORM FIELDS
  renderInputFields =
    forgotPassForm.map(login => (
      <Field
        key={login.name}
        name={login.name}
        label={login.label}
        type={login.type}
        component={this.renderInput}
      />
    ));

  // ALERT
  alertMessage = () => {
    if (this.props.alert) {
      return <Alert message='Incorrect email or password' />
    }
  }

  render() {
    return (
      <AuthFormTemplate
        fields={this.renderInputFields}
        title='Forgot Password?'
        onSubmit={this.onSubmit}
        alert={this.alertMessage()}
        linkto='/signup'
        button1='Submit'
        button2='Sign Up'
      />
    )
  }
}

const mapStateToProps = state => {
  return { alert: state.alert[0] }
}

export default connect(mapStateToProps, { forgotPassword })(PasswordForgot);