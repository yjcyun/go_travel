import React from 'react'
import styled from 'styled-components'

const FormInput = (props) => {
  const { label, input, type, meta } = props;
  const errorInput = meta.error && meta.touched;

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input
        {...input}
        error={errorInput}
        type={type}
        autoComplete='off'
      />
      {errorInput
        ? <Error>{meta.error}</Error>
        : null}
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  position: relative;
  margin-top: 2.5rem;
`

const Input = styled.input`
  border: 1px solid silver;
  border: ${props => props.error ? '1px solid tomato' : '1px solid silver'};
  border-radius: 5px;
  padding: 0.7rem 1.5rem;
  background-color:  var(--background-clr);
  display: block;
  width: 100%;
  position: relative;

  &[type=password] {
    letter-spacing: 0.2rem;
  }
`

const Label = styled.label`
  position: absolute;
  left: 1.3rem;
  top: -0.9rem;
  padding: 0 0.5rem;
  background:  var(--background-clr);
  z-index:3;
`

const Error = styled.span`
  color: tomato;
  font-size: 0.8rem;
  position: absolute;
`

export default FormInput