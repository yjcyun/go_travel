import React from 'react'
import styled from 'styled-components'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiTrendingUp, FiUser } from 'react-icons/fi'
import Title from '../../Title'

const TourShowOverview = ({ duration, difficulty, maxGroupSize, description }) => {
  const capitalized = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <TourOverviewContainer>
      <Title title='Tour Overview' />
      <TourOverview>
        <TourOverviewLeft>
          <div>
            <AiOutlineClockCircle className='icon' />
            <span>Duration</span>{duration} Days
        </div>
          <div>
            <FiTrendingUp className='icon' />
            <span>Difficulty</span>{capitalized(difficulty)}
          </div>
          <div>
            <FiUser className='icon' />
            <span>Participants </span>{maxGroupSize} People
        </div>
        </TourOverviewLeft>

        <div>
          <div>{description}</div>
        </div>
      </TourOverview>
    </TourOverviewContainer>
  )
}

const TourOverviewContainer = styled.div` 
  margin: 3rem auto;

  @media (min-width: 768px) {
    margin: 10rem auto;
    width: 70%;
  }
`

const TourOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin: 2rem 0;

  .icon {
    font-size: 1.3rem;
    color: var(--accent-clr);
    vertical-align: middle;
    margin: 0 0.5rem 0.2rem 0;
  }
`

const TourOverviewLeft = styled.div`
  margin-bottom: 2rem; 

  div {
    margin: 1rem 0;
  }
  
  span {
    text-transform: uppercase;
    font-weight: 500;
    margin-right: 1rem;
  }
`

export default TourShowOverview