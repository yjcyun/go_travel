import React from 'react'
import styled from 'styled-components'

const OverviewFilter = ({ handleFilter, selectedFilterIndex }) => {
  const optionsHeader = ['description', 'locations'];
  return (
    <FilterButtonWrapper>
      {optionsHeader.map((option, index) => {
        return (
          <FilterButton
            key={index}
            onClick={() => handleFilter(option, index)}
            active={selectedFilterIndex === index}
          >
            {option}
          </FilterButton>
        )
      })}
    </FilterButtonWrapper>
  )
}

const FilterButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  border-bottom: var(--border);
  margin-bottom: 0.5rem;
`

const FilterButton = styled.div`
  text-transform: uppercase;
  padding: 0 2rem;
  padding-bottom: 0.5rem;
  border-bottom: ${props => props.active ? '3px solid var(--accent-clr)' : ''}

`

export default OverviewFilter
