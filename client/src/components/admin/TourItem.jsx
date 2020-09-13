import React from 'react'
import { Link } from 'react-router-dom'
import { FiEdit, FiDelete } from 'react-icons/fi';
import styled from 'styled-components'
import { isArguments } from 'lodash';

const TourItem = ({ name, id, guides, imageCover }) => {
  const leadGuide = guides[0].name
  return (
    <>
      <span>
        <Link to={`/admin/tours/${id}`}>
          <Img src={`/tours/${imageCover}`} alt={name}/>{name}
        </Link>
      </span>
      <span>{leadGuide}</span>
      <ActionSpan>
        <div><FiEdit className='icon'/></div>
        <div><FiDelete className='icon'/></div>
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