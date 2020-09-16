import React from 'react'
import { Input, InputWrapper, Label, Error } from '../../globalStyle';

const FormFile = (props) => {
  const { label, input, type, meta, white } = props;
  const errorInput = meta.error && meta.touched;
  delete input.value;
  return (
    <InputWrapper>
      <Label white={white}>{label}</Label>
      <Input
        {...input}
        error={errorInput}
        type={type}
      />
      {errorInput
        ? <Error>{meta.error}</Error>
        : null}
    </InputWrapper>
  )
}

export default FormFile