import React from 'react'
import styled from 'styled-components'

const Title = ({ title, center }) => {
  return (
    <TitleContainer>
      <h2>
        {title}
      </h2>
      <Accent center={center}></Accent>
    </TitleContainer>

  )
}

const TitleContainer = styled.div`
  display: inline-block;

  h2 {
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
  }
 
`
const Accent = styled.div`
  height: 3px;
  width: 4rem;
  background-color: var(--accent-clr);
  margin: ${props => props.center ? '0.5rem auto 0' : '0.5rem 0 0'};
`

export default Title