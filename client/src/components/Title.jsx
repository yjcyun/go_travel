import React from 'react'
import styled from 'styled-components'

const Title = ({ title, center }) => {
  return (
    <TitleContainer>
      <Accent center={center}></Accent>
      <h2>
        {title}
      </h2>
    </TitleContainer>

  )
}

const TitleContainer = styled.div`
  display: inline-block;

  h2 {
    font-size: 2.5rem;
  }
`
const Accent = styled.div`
  height: 3px;
  width: 4rem;
  background-color: var(--accent-clr);
  margin: ${props => props.center ? '0 auto 0.5rem' : '0 0 0.5rem'};
`

export default Title