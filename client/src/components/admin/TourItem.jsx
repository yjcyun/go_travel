import React from 'react'
import { Link } from 'react-router-dom'
import { FiEdit, FiDelete } from 'react-icons/fi';
import styled from 'styled-components'

const TourItem = ({ name, id, startLocation, imageCover }) => {
  return (
    <>
      <span>
        <Link to={`/tours/${id}`}>
          <Img src={`/tours/${imageCover}`} alt={name} />{name}
        </Link>
      </span>
      <span>{startLocation}</span>
      <ActionSpan>
        <Link to={`/admin/tours/edit/${id}`}><FiEdit className='icon' /></Link>
        <Link to={`/admin/tours/delete/${id}`}><FiDelete className='icon' /></Link>
      </ActionSpan>
    </>
  )
}

const Img = styled.img`
  width: 4rem;
  margin-right: 1rem; 
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

const ActionSpan = styled.span`
  justify-content: flex-end;

  a {
    margin: 0 0.3rem;

    .icon {
      vertical-align:middle;
      margin-bottom: 2px;
    }
  }

  @media (min-width: 768px ){
    a {
      margin: 0 0.5rem;
    }
  }
`

export default TourItem