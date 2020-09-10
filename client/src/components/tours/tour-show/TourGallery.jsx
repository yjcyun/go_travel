import React, { useState } from 'react'
import Title from '../../Title'
import styled from 'styled-components'

const TourGallery = ({ image }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const renderImage = () => {
    return image.map((img, index) => (
      <img
        src={`/tours/${img}`}
        key={img}
        alt={img}
        onClick={() => setImageIndex(index)}
      />
    ))
  }


  return (
    <div className='mb-10'>
      <TitleWrapper>
        <Title title='Tour Highlights' center />
      </TitleWrapper>
      <Gallery>
        <div>
          <img src={`/tours/${image[imageIndex]}`} alt={image[0]} />
        </div>
        <Thumbnails>
          {renderImage()}
        </Thumbnails>
      </Gallery>
    </div>
  )
}


const TitleWrapper = styled.div`
  text-align: center;
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin: 2rem 0;

  img {
    border-radius: 1rem;
  }

  @media(min-width: 768px) {
    grid-template-columns: 4fr 1fr;
  }
`

const Thumbnails = styled.div`
  display:  grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  grid-gap: 0.5rem;
  cursor: pointer;

  @media(min-width: 768px) {
    display: block;
  }

`


export default TourGallery
