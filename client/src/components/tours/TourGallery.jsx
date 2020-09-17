import React, { useState } from 'react'
import Title from '../utils/Title'
import styled from 'styled-components'

const TourGallery = ({ image1, image2, image3 }) => {
  const [image, setImage] = useState(image1);
  const renderImage = () => {
    return (
      <>
        <img
          src={`/tours/${image1}`}
          key={image1}
          alt={image1}
          onClick={() => setImage(image1)}
        />
        <img
          src={`/tours/${image2}`}
          key={image2}
          alt={image2}
          onClick={() => setImage(image2)}
        />
        <img
          src={`/tours/${image3}`}
          key={image3}
          alt={image3}
          onClick={() => setImage(image3)}
        />
      </>
    )
  }


  return (
    <div className='mb-10'>
      <TitleWrapper>
        <Title title='Tour Highlights' center />
      </TitleWrapper>
      <Gallery>
        <div>
          <img src={`/tours/${image}`} alt={image} />
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
