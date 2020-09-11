import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logIn } from '../../redux/actions/authActions'
import styled from 'styled-components'
import FormInput from '../FormInput'
import Logo from '../nav/Logo'
import Alert from '../Alert'

class LoginForm extends Component {
  // RENDER FormInput.jsx
  renderInput = props => <FormInput {...props} />

  // FORM ONSUBMIT HANDLER
  onSubmit = formValues => {
    this.props.logIn(formValues);
  };

  render() {
    return (
      <FormWrapper>
        <Logo large />
        <h2>Hello, Welcome Back!</h2>
        {this.props.alert && <Alert message='Incorrect email or password' />}
        <FormRow onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name='email'
            label='Email'
            type='text'
            component={this.renderInput}
          />
          <Field
            name='password'
            label='Password'
            type='password'
            component={this.renderInput}
          />
          <ForgotPwd>
            <Link to='/forgot-password'>Forgot password?</Link>
          </ForgotPwd>


          <ButtonWrapper>
            <Button type='submit' login>Login</Button>
            <Hr><span>or</span></Hr>
            <Link to='/signup'>
              <Button>Sign Up</Button>
            </Link>
          </ButtonWrapper>
        </FormRow>
      </FormWrapper>
    )
  }
}

// FORM VALIDATION
const validate = ({ email, password }) => {
  const errors = {};
  const emailCheck = value => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  if (!email) {
    errors.email = 'Enter your email address';
  } else if (emailCheck(email)) {
    errors.email = 'Enter a valid email';
  }
  if (!password) errors.password = 'Enter your password';

  return errors;
}
// STYLES
const FormWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;

  h2 {
    margin: 1.5rem 0;
  }

  @media (min-width: 996px) {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }
`

const FormRow = styled.form``;

const ForgotPwd = styled.div`
  text-align: right;

  a {
    color: #0000EE;
    font-size: 0.9rem;
  }
`

const ButtonWrapper = styled.div`
  display: block;
  margin: 2rem 0;
`

const Button = styled.button`
  cursor: pointer;
  padding: 0.8rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--accent-clr);
  margin: 1rem 0;
  background-color: ${props => props.login ? 'var(--accent-clr)' : 'transparent'};
  color: ${props => props.login ? '#fff' : '000'};
`

const Hr = styled.div`
  height: 1px;
  width: 80%;
  margin: 0.2rem auto;
  background-color: silver;
  position: relative;

  span {
    position: absolute;
    left: calc(50% - 1.5rem);
    top: -0.8rem;
    background-color: var(--background-clr);
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`

// CONFIGURE REDUX-FORM
const reduxFormConfigure = reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);

const mapStateToProps = state => {
  return { alert: state.alert[0] }
}

export default connect(mapStateToProps, { logIn })(reduxFormConfigure);