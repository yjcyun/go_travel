import React from 'react'
import { Link } from 'react-router-dom'
import { FiEdit, FiDelete } from 'react-icons/fi';
import styled from 'styled-components'

const TourItem = ({ name, id, guides, imageCover }) => {
  const leadGuide = (guides) => {
    if (guides.length === 0) return <span></span>
    return <span>{guides[0].name}</span>
  }
  
  return (
    <>
      <span>
        <Link to={`/tours/${id}`}>
          <Img src={`/tours/${imageCover}`} alt={name} />{name}
        </Link>
      </span>
      {leadGuide(guides)}
      <ActionSpan>
        <Link to={`/admin/tours/edit/${id}`}><FiEdit className='icon' /></Link>
        <div><FiDelete className='icon' /></div>
      </ActionSpan>
    </>
  )
}

const Img = styled.img`
  width: 4rem;
  margin-right: 1rem; 
`

const ActionSpan = styled.span`
  justify-content: flex-end;

  div {
    margin: 0 0.5rem;

    .icon {
      vertical-align:middle;
      margin-bottom: 2px;
    }
  }
`

export default TourItem