import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { forgotPassForm } from '../constants/formFields';
import { forgotPassword } from '../redux/actions/authActions';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';
import AuthPageTemplate from '../components/auth/AuthPageTemplate'
import Alert from '../components/utils/Alert';
import FormInput from '../components/utils/FormInput';


class ForgotPasswordPage extends Component {
  // RENDER FormInput.jsx
  renderInput = props => <FormInput {...props} white />

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
      <AuthPageTemplate>
        <AuthFormTemplate
          fields={this.renderInputFields}
          title='Forgot Password?'
          onSubmit={this.onSubmit}
          alert={this.alertMessage()}
          linkto='/signup'
          button1='Submit'
          button2='Sign Up'
        />
      </AuthPageTemplate>
    )
  }
}

const mapStateToProps = state => {
  return { alert: state.alert[0] }
}

export default connect(mapStateToProps, { forgotPassword })(ForgotPasswordPage);