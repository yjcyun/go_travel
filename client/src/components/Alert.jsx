import React from 'react'
import styled from 'styled-components'

const Alert = ({ message }) => {
  return (
    <AlertPopup>
      {message}
    </AlertPopup>
  )
}

const AlertPopup = styled.div`
  background-color: white;
  padding: 1rem;
  border-left: 10px solid red;
  border-radius: 0.5rem;
`

export default Alert
