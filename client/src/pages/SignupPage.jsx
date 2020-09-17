import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { signUp } from '../redux/actions/authActions';
import { signupForm } from '../constants/formFields';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';
import AuthPageTemplate from '../components/auth/AuthPageTemplate'
import Alert from '../components/utils/Alert';
import FormInput from '../components/utils/FormInput';

class SignupPage extends Component {
  // INPUT FIELDS
  renderInput = props => <FormInput {...props} white />

  // FORM ONSUBMIT HANDLER
  onSubmit = formValues => {
    this.props.signUp(formValues);
  };

  // FORM FIELDS
  renderInputFields =
    signupForm.map(login => (
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
      return (<Alert message='This login email already exsists. Please try a different email address to register.' />
      )
    }
  }

  // RENDER COMPONENT
  render() {
    return (
      <AuthPageTemplate auth>
        <AuthFormTemplate
          fields={this.renderInputFields}
          title='Welcome, create an account'
          onSubmit={this.onSubmit}
          alert={this.alertMessage()}
          linkto='/login'
          button1='Sign Up'
          button2='Login'
          white
          auth
        />
      </AuthPageTemplate>
    )
  }
}

const mapStateToProps = state => {
  return { alert: state.alert[0] }
}

export default connect(mapStateToProps, { signUp })(SignupPage);