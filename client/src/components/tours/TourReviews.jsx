import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings';
import { FaQuoteLeft } from 'react-icons/fa'
import { AiOutlineMinus } from 'react-icons/ai'
import Title from '../utils/Title';


const TourReviews = ({ reviews }) => {
  const betterDate = date => {
    return new Date(date).toLocaleString('en-us', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  const renderReviews = () => {
    if(!reviews) return <div>No reviews yet</div>;

    return reviews.filter((el, index) => index < 3).map(({ review, _id, user, rating, createdAt }) => (
      <ReviewCard key={_id}>
        <ReviewHeader>
          <img src={`/users/${user.photo}`} alt={user.photo} />
          <div>
            <div className='username'>{user.name}</div>
            <div>
              <StarRatings
                rating={rating}
                starDimension='17px'
                starSpacing='0px'
                starRatedColor='#FDCC0D'
              />
            </div>
            <small><AiOutlineMinus className='icon'/>{betterDate(createdAt)}</small>
          </div>
        </ReviewHeader>
        <div>
          {review}
        </div>
        <FaQuoteLeft className='quote-icon' />
      </ReviewCard>
    ))
  }

  return (
    <div className='mb-10'>
      <TitleWrapper>
        <Title title='Customer Reviews' center />
      </TitleWrapper>
      <Reviews>
        {renderReviews()}
      </Reviews>
    </div>
  )
}

const TitleWrapper = styled.div`
  text-align: center;
`

const Reviews = styled.div`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1.5rem;

  @media (min-width: 768px) {
    margin: 4rem 1.5rem;
  }
`

const ReviewCard = styled.div`
  padding: 0 1rem;
  margin-bottom: 2rem;
  position: relative;
  font-size: 0.9rem;

  .quote-icon {
    position: absolute;
    top: -1rem;
    left: -1rem;
    font-size: 4rem;
    color: rgba(29, 154, 172, 0.3);
    z-index: -1;
  }
`

const ReviewHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;

  img {
    width: 70px;
    height: 70px;
    margin-right: 0.5rem;
  }

  .username {
    font-weight: 500;
    text-transform: uppercase;
  }

  .icon {
    color: var(--accent-clr);
    padding-top: 3px;
  }
`

export default TourReviews