import React from 'react'
import styled from 'styled-components'

const FormInput = (props) => {
  return (
    <InputWrapper>
      <Label>{props.label}</Label>
      <Input {...props.input} type={props.type} autoComplete='off' />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
`

const Input = styled.input`
  border: 1px solid silver;
  border-radius: 5px;
  padding: 0.7rem 1.5rem;
  background-color:  var(--background-clr);
  display: block;
  width: 100%;

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
`

export default FormInput