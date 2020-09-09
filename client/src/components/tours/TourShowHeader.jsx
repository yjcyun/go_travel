import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings';
import { FiMapPin } from 'react-icons/fi';

const TourShowHeader = ({ startLocation, ratingsAverage, price }) => {
  return (
    <Header>
      <div className='header-box'>
        <span><FiMapPin className='header-icon' /></span> {startLocation.description}
      </div>
      <div className='header-box'>
        <span>Rating:</span>{' '}
        <StarRatings
          rating={ratingsAverage}
          starDimension='17px'
          starSpacing='0px'
          starRatedColor='#FDCC0D'
        />
      </div>
      <div className='header-box'>
        <span>Price:</span> ${price}
      </div>
      <div className='header-box button'>Book now</div>
    </Header>
  )
}

const Header = styled.div`
  margin: 0 3rem;
  display: flex;
  justify-content: space-between;

  .header-icon {
    vertical-align: middle;
    margin-bottom: 3px;
  }

  .header-box{
    border: 1px solid silver;
    border-right: none;
    padding: 1rem 2rem;
    width: 25%;
    text-align: center;
  }

  .button{
    background-color: var(--accent-clr);
    color: #fff;
  }

  span {
    color: silver;
  }
  
  .star-container {
    margin-top: 4px
  }
`
export default TourShowHeader
