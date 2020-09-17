import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { logIn } from '../redux/actions/authActions';
import { loginForm } from '../constants/formFields';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';
import AuthPageTemplate from '../components/auth/AuthPageTemplate'
import Alert from '../components/utils/Alert';
import styled from 'styled-components';
import FormInput from '../components/utils/FormInput';

class LoginPage extends Component {
  // RENDER FormInput.jsx
  renderInput = props => <FormInput {...props} white />

  // FORM ONSUBMIT HANDLER
  onSubmit = formValues => {
    this.props.logIn(formValues);
  };

  // FORM FIELDS
  renderInputFields =
    loginForm.map(login => (
      <Field
        key={login.name}
        name={login.name}
        label={login.label}
        type={login.type}
        component={this.renderInput}
        placeholder={login.placeholder}
      />
    ));

  // ALERT
  alertMessage = () => {
    if (this.props.alert) {
      return <Alert message='Incorrect email or password' />
    }
  }

  // FORTGOT PASSWORD LINK
  forgotPassword = () => (
    <ForgotPwd>
      <Link to='/forgot-password'>Forgot password?</Link>
    </ForgotPwd>
  )

  render() {
    return (
      <AuthPageTemplate auth>
        <AuthFormTemplate
          fields={this.renderInputFields}
          title='Hello, Welcome Back!'
          onSubmit={this.onSubmit}
          alert={this.alertMessage()}
          forgotpass={this.forgotPassword()}
          linkto='/signup'
          button1='Login'
          button2='Sign Up'
          auth
          white
        />
      </AuthPageTemplate>
    )
  }
}

const ForgotPwd = styled.div`
  text-align: right;

  a {
    color: #0000EE;
    font-size: 0.9rem;
  }
`

const mapStateToProps = state => {
  return { alert: state.alert[0] }
}

export default connect(mapStateToProps, { logIn })(LoginPage);