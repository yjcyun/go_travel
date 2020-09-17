import React from 'react'
import styled from 'styled-components'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiTrendingUp, FiUser, FiCalendar } from 'react-icons/fi'
import Title from '../utils/Title'


const TourShowOverview = (props) => {
  // PROPS FROM TourShow.jsx
  const { duration, difficulty, maxGroupSize, startDates, description, summary } = props;

  //  CAPITALZE THE FIRST LETTER OF "DIFFICULTY"
  const capitalized = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // CONVERT DATE TO MORE READABLE DATE
  const firstDate = dates => {
    return new Date(dates[0]).toLocaleString('en-us', { month: 'long', year: 'numeric' });
  }

  return (
    <TourOverviewContainer>
      <TourOverview>
        <TourOverviewLeft>
          <Title title='Tour Overview' />
          <div>
            <FiCalendar className='icon' />
            <span>Next tour</span>{firstDate(startDates)}
          </div>
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

        <TourDescription>
          <h2>{summary}</h2>
          <p>{description}</p>
        </TourDescription>
      </TourOverview>
    </TourOverviewContainer>
  )
}

const TourOverviewContainer = styled.div` 
  margin: 3rem auto 7rem;

  @media (min-width: 768px) {
    margin: 10rem 3rem 15rem 5rem;
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

const TourDescription = styled.div`
  h2 {
    color: silver;
    font-weight: 500;
    margin: 1rem 0 2rem;
  }
`
export default TourShowOverview