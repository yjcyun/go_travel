import React from 'react'
import styled from 'styled-components'
import TourMap from './TourMap'

const TourShowHeaderImg = ({ imageCover, name, ...otherProps }) => {
  return (
    <HeaderImage>
      <img src={`/tours/${imageCover}`} alt={name} />
      <MapBox>
        <TourMap {...otherProps} />
      </MapBox>
    </HeaderImage>
  )
}

const HeaderImage = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const MapBox= styled.div`
  @media (max-width: 530px) {
    height: 200px;
  }
`

export default TourShowHeaderImg