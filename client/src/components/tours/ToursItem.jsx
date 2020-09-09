import React from 'react'
import { Link } from 'react-router-dom';

const ToursItem = ({ name, price, maxGroupSize, description, imageCover, slug, id }) => {
  return (
    <Link to={`/tour/${id}`}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{maxGroupSize}</div>
      <div>{description}</div>
      <img src={`/tours/${imageCover}`} alt={name} style={{ width: '200px' }} />
    </Link>
  )
}

export default ToursItem