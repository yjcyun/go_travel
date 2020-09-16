import React from 'react'
import { Input, InputWrapper, Label, Error } from '../../globalStyle';

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





export default FormInput