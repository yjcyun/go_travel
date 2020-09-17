import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ToursItem = ({ name, price, duration, summary, imageCover, slug, id }) => {
  return (
    <Link to={`/tours/${id}`}>
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
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  background: #fff;
  position: relative;
  color: #000;
  border-radius: 0.5rem;

  span {
    color: var(--accent-clr);
  }
`

const CardImg = styled.div`
  img {
    width: 100%;
    height: 200px;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`

const CardBody = styled.div`
  padding: 1rem;

  p {
    margin: 1.5rem 0;
  }
  
  small {
    color: var(--accent-clr);
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