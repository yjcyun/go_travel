import React from 'react'
import { Textarea, InputWrapper, Label, Error } from '../../globalStyle';

const FormTextarea = (props) => {
  const { label, input, meta, white, placeholder } = props;
  const errorInput = meta.error && meta.touched;

  return (
    <InputWrapper>
      <Label white={white}>{label}</Label>
      <Textarea
        {...input}
        error={errorInput}
        placeholder={placeholder}
        rows='20'
      />
      {errorInput
        ? <Error>{meta.error}</Error>
        : null}
    </InputWrapper>
  )
}


export default FormTextarea