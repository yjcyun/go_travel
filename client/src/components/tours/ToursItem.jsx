import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ToursItem = ({ name, price, duration, summary, imageCover, slug, id }) => {
  return (
    <Link to={`/tour/${id}`}>
      <TourCard>
        <CardImg>
          <img src={`/tours/${imageCover}`} alt={name} />
        </CardImg>
        <CardBody>
          <h3>{name}</h3>
          <p>{summary}</p>
          <small>Read more <span>&#8594;</span></small>
        </CardBody>
        <Badge>
          <div>{duration} days</div>
          <div><span>$</span> {price}</div>
        </Badge>
      </TourCard>
    </Link>
  )
}

const TourCard = styled.div`
  box-shadow: rgba(2,12,27,0.7) 0px 5px 10px -15px;
  background: #fff;
  border-radius: 0.7rem;
  position: relative;

  span {
    color: var(--accent-clr);
  }
`

const CardImg = styled.div`
  img {
    width: 100%;
    height: 200px;
    border-top-left-radius:0.7rem;
    border-top-right-radius:0.7rem;
  }
`

const CardBody = styled.div`
  padding: 1rem;

  p {
    margin: 1.5rem 0;
  }
`

const Badge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  div {
    background-color: #fff;
    padding: 0.2rem 0.8rem;
    border-radius: 2rem;
    display: inline-block;
    margin-right: 0.5rem;
  }
`

export default ToursItem