import React from 'react'
import styled from 'styled-components'
import { InputWrapper, Label, Error } from '../../globalStyle';


const FormSelect = (props) => {
  const { label, input, meta, values, white } = props;
  const errorInput = meta.error && meta.touched;

  const renderOptions = ({ value, label }) => {
    return <option key={value} value={value}>{label}</option>
  }

  return (
    <InputWrapper>
      <Label white={white}>{label}</Label>
      <Input error={errorInput} {...input}>
        <option value=''>Select</option>
        {values ? values.map(value => renderOptions(value)) : null}
      </Input>
      {errorInput
        ? <Error>{meta.error}</Error>
        : null}
    </InputWrapper>
  )
}


const Input = styled.select`
   border: ${props => props.error ? '1px solid tomato' : 'var(--border)'};
  border-radius: 5px;
  padding: 0.7rem 1.5rem;
  background-color:  transparent;
  display: block;
  width: 100%;
  position: relative;
  font-family: 'Poppins', sans-serif;
`

export default FormSelect