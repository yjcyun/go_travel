import React from 'react'
import styled from 'styled-components'

const TourShowHeaderImg = ({ imageCover, name, ...otherProps }) => {
  return (
    <HeaderImage>
      <img src={`/tours/${imageCover}`} alt={name} />
   
    </HeaderImage>
  )
}

const HeaderImage = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export default TourShowHeaderImg