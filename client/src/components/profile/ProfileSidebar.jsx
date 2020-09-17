import React from 'react'
import { BsPeopleFill } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ProfileSidebar = (props) => {
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/me/profile";
  }


  const renderAdminNav = () => {
    if (!props.isAdmin.user) {
      return;
    } else if (props.isAdmin.user.role === 'admin') {
      return (
        <Admin>
          <p className='header'>Admin</p>
          <NavList>
            <NavLink to='/admin/tours' activeClassName='selected'>
              <BsPeopleFill /> Manage tours
              </NavLink>
          </NavList>
        </Admin>
      )
    }
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
        {/* ADMIN ONLY */}
        {renderAdminNav()}
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
  display: none;

  .header {
    background-color: var(--accent-dark);
    padding: 0.5rem 0 0.5rem 2rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }

  @media (min-width: 768px) {
    display: block;
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

const mapStateToProps = state => {
  return { isAdmin: state.auth }
}

export default connect(mapStateToProps)(ProfileSidebar)