import React from 'react'
import styled from 'styled-components';

const TourBanner = ({ duration }) => {
  // imageCover, name
  return (
    <BannerWrapper>
      <BannerText>
        <h2>What are you waiting for? </h2>
        <p>{duration} Days. 1 Adventure. Infinite memories. Make it yours today!</p>
      </BannerText>
      <BannerButton>
        <button>Book Tour Now</button>
      </BannerButton>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  background: var(--accent-clr);
  border-radius: 1rem;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 996px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  @media (max-width: 768px){
    width: 100%;
  }
`

const BannerText = styled.div`
  color: white;

  h2 {
    font-size: 2.5rem;

    @media (max-width: 1100px) {
      font-size: 2rem;
  }
  }
`

const BannerButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  button {
    text-transform: uppercase;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 996px) {
    justify-content: center;
    margin-top: 2rem;
  }
`

export default TourBanner
