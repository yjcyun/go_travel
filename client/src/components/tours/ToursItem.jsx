import React from 'react'

const ToursItem = ({name, price, maxGroupSize, description, imageCover}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{maxGroupSize}</div>
      <div>{description}</div>
      <img src={`/tours/${imageCover}`} alt={name}/>
    </div>
  )
}

export default ToursItem