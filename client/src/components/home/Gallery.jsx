import React from 'react'
import Title from '../utils/Title';
import styled from 'styled-components'

const Gallery = props => {
  return (
    <div className='body-container extra-margin'>
      <Title title='Photo Gallery' />
      {props.tours
        .filter(tour => tour.id === '5c88fa8cf4afda39709c2951')
        .map(tour => {
          return (
            <EachGallery key={tour.images[0]}>
              {tour.images.map(img => (
                <img
                  className='img'
                  key={img}
                  src={`tours/${img}`}
                  alt={img}
                />
              ))}
            </EachGallery>
          )
        })}
    </div>
  )
}

const EachGallery = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 5rem auto;
  grid-template-columns: 1fr;
  
  @media(min-width: 768px) {
    .img:nth-child(1) {
      grid-area: first;
    }
    .img:nth-child(2) {
      grid-area: second;
    }
    .img:nth-child(3) {
      grid-area: third;
    }
    .img:nth-child(4) {
      grid-area: fourth;
    }
    .img:nth-child(5) {
      grid-area: fifth;
    }
    .img:nth-child(6) {
      grid-area: sixth;
    }
    grid-template-columns: none;
    grid-template-areas: 
      'first second third third'
      'fourth fourth third third'
      'fourth fourth fifth sixth'
  }
`

export default Gallery