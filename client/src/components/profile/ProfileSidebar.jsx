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
      <p className='header'>User</p>
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
        {/* ADMIN ONLY */}
        <Admin>
          <p className='header'>Admin</p>
          <NavList>
            <NavLink to='/admin/tours' activeClassName='selected'>
              <BsPeopleFill /> Manage tours
          </NavLink>
          </NavList>
          <NavList>
            <NavLink to='/admin/users' activeClassName='selected'>
              <BsPeopleFill /> manage users
          </NavLink>
          </NavList>
          <NavList>
            <NavLink to='/admin/reviews' activeClassName='selected'>
              <BsPeopleFill /> manage reviews
          </NavLink>
          </NavList>
          <NavList>
            <NavLink to='/admin/bookings' activeClassName='selected'>
              <BsPeopleFill /> manage bookings
          </NavLink>
          </NavList>
        </Admin>
      </ul>
    </SideNavWrapper>
  )
}

const SideNavWrapper = styled.aside`
  background-color: var(--accent-clr);
  height: auto;
  width: 330px;
  padding: 5rem 0 5rem 1rem;
  color: #fff;

  .header {
    padding-left: 2rem;
    background-color: var(--accent-dark);
    padding: 0.5rem 0 0.5rem 2rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
`;

const NavList = styled.li`
  margin: 0.5rem 0;
  transition: all 0.2s;

  a {
    color: #fff;
    text-transform: uppercase;
    padding: 1rem 0 1rem 2rem;
    display:block;
  }

  :hover, .selected {
    background-color:var(--accent-light);
    display:block;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
`

const Admin = styled.div`
  margin-top: 4rem;
`

export default ProfileSidebar