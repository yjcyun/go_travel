import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { AiOutlinePoweroff, AiOutlineUser } from 'react-icons/ai'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/authActions'

const MenuDropdown = (props) => {
  return (
    <DropdownMenu>
      <DropItem>
        <NavLink to='/me/profile'>
          <DropLink>
            <span>Profile</span>
            <span className='icon'><AiOutlineUser /></span>
          </DropLink>
        </NavLink>
      </DropItem>
      <DropItem onClick={() => props.logout()}>
        <DropLink>
          <span>logout</span>
          <span className='icon'><AiOutlinePoweroff /></span>
        </DropLink>
      </DropItem>
    </DropdownMenu>
  )
}

const DropdownMenu = styled.div`
  position: absolute;
  width: 12rem;
  height: auto;
  right: 0;
  bottom: -7rem;
  background: #fff;
  z-index:2;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  display:flex;
  flex-direction: column;

`

const DropItem = styled.li`
  list-style: none;
`

const DropLink = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  transition: all 0.2s;
  
  .icon {
    margin-top:2px;
  }

  :hover {
    background-color: var(--accent-light);
    color: #fff;
  }
`


export default connect(null, { logout })(MenuDropdown)
