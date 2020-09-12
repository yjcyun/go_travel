import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import styled from 'styled-components'

class ProfileFormTemplate extends Component {
  render() {
    const { title, onSubmit, fields, button } = this.props;
    return (
      <FormWrapper>
        <h2>{title}</h2>
        <form onSubmit={this.props.handleSubmit(onSubmit)}>
          {fields}
          <ButtonWrapper>
            <Button type='submit' login>{button}</Button>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    )
  }
}

// FORM VALIDATION
const validate = ({ email, name }) => {
  const errors = {};
  const emailCheck = value => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  if (!email) {
    errors.email = 'Enter your email address';
  } else if (emailCheck(email)) {
    errors.email = 'Enter a valid email';
  }
  if (!name) errors.name = 'Enter your name';
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

const ButtonWrapper = styled.div`
  display: inline-block;
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
  text-transform: uppercase;
`
// CONFIGURE REDUX-FORM
export default reduxForm({
  form: 'profileForm',
  validate
})(ProfileFormTemplate);