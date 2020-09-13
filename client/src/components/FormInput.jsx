import React from 'react'
import styled from 'styled-components'

const FormInput = (props) => {
  const { label, input, type, meta, white, placeholder, disabled } = props;
  const errorInput = meta.error && meta.touched;

  return (
    <InputWrapper>
      <Label white={white}>{label}</Label>
      <Input
        {...input}
        error={errorInput}
        type={type}
        autoComplete='off'
        placeholder={placeholder}
        disabled={disabled}
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
  border: ${props => props.error ? '1px solid tomato' : '1px solid silver'};
  border-radius: 5px;
  padding: 0.7rem 1.5rem;
  background-color:  transparent;
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
  background:  ${props => props.white ? '#fff' : 'var(--background-clr)'};
  z-index:3;
`

const Error = styled.span`
  color: tomato;
  font-size: 0.8rem;
  position: absolute;
`

export default FormInput