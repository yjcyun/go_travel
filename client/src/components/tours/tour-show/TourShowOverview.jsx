import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiTrendingUp, FiUser, FiCalendar } from 'react-icons/fi'
import Title from '../../Title'
import OverviewFilter from './OverviewFilter'

const TourShowOverview = (props) => {
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [filteredItem, setFilteredItem] = useState(props['description']);

  // PROPS FROM TourShow.jsx
  const { duration, difficulty, maxGroupSize, startDates } = props;

  //  CAPITALZE THE FIRST LETTER OF "DIFFICULTY"
  const capitalized = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // TODO: doesn't work. ex. January 2020
  const firstDate = dates => {
    return dates[0].toLocaleString('en-us', { month: 'long', year: 'numeric' });
  }

  // FILTER BASED ON HEADER
  const handleFilter = (option, index) => {
    const optionsContent = Object.keys(props);
    let filteredContent = optionsContent.filter(el => el === option).toString();

    setFilteredItem(props[filteredContent]);
    setSelectedFilterIndex(index);
  }

  // RENDER ARRAY
  const renderArray = (arr) => {
    return arr.map((event, idx) => (
      <Fragment key={idx}>
        <p>Day {event.day}</p>
        <p>{event.description}</p>
      </Fragment>
    ))
  };

  return (
    <TourOverviewContainer>
      <Title title='Tour Overview' />
      <TourOverview>
        <TourOverviewLeft>
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

        <div>
          <OverviewFilter
            handleFilter={handleFilter}
            selectedFilterIndex={selectedFilterIndex}
          />
          <OverviewContent>
            {Array.isArray(filteredItem)
              ? renderArray(filteredItem)
              : <p>{filteredItem}</p>
            }
          </OverviewContent>
        </div>
      </TourOverview>
    </TourOverviewContainer>
  )
}

const TourOverviewContainer = styled.div` 
  margin: 3rem auto;

  @media (min-width: 768px) {
    margin: 10rem 3rem;
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

const OverviewContent = styled.div`
  line-height: 1.7;
`
export default TourShowOverview