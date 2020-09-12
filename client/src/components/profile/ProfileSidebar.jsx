import React from 'react'
import { BsPeopleFill } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ProfileSidebar = () => {
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/me/profile";
  }

  return (
    <SideNavWrapper>
      <ul>
        <NavList>
          <NavLink to='/me/profile' activeClassName='selected' isActive={checkActive}>
            <MdDashboard /> Profile
          </NavLink>
        </NavList>
        <NavList>
          <NavLink to='/me/bookings' activeClassName='selected'>
            <BsPeopleFill /> My Bookings
          </NavLink>
        </NavList>
        <NavList>
          <NavLink to='/me/reviews' activeClassName='selected'>
            <BsPeopleFill /> My Reviews
          </NavLink>
        </NavList>
      </ul>
    </SideNavWrapper>
  )
}

const SideNavWrapper = styled.aside`
  background-color: var(--accent-clr);
  height: auto;
  width: 300px;
  padding: 5rem 0 5rem 1rem;
  color: #fff;
`;

const NavList = styled.li`
  margin: 0.5rem 0;
  transition: all 0.2s;

  a {
    color: #fff;
    text-transform: uppercase;
    padding: 1rem 0 1rem 2rem;
    display:block;
    letter-spacing: 0.1rem;
  }

  :hover, .selected {
    background-color:var(--accent-light);
    display:block;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
`

export default ProfileSidebar