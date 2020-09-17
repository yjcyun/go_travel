import React, { Fragment, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../constants/navLinks'
import styled from 'styled-components'
import { logout } from '../../redux/actions/authActions';
import { connect } from 'react-redux';

const HeaderMobile = ({ open, setOpen, isSignedIn, logout }) => {
  // PREVENT SCROLL WHEN OPENED
  useEffect(() => {
    open && (document.body.style.overflow = 'hidden');
    !open && (document.body.style.overflow = '');
  }, [open]);

  // RENDER NAV LINKS
  const renderLinks = navLinks.map(nav => {
    if (isSignedIn.isSignedIn && nav.text === 'login') {
      if (isSignedIn.user) {
        return (
          <Fragment key={nav.text}>
            <NavItem onClick={() => setOpen(false)}>
              <Link to='/me/profile'>Profile</Link>
            </NavItem>
            <NavItem onClick={() => setOpen(false)}>
              <Link to='/admin/tours'>Admin</Link>
            </NavItem>
            <NavItem onClick={() => {
              logout();
              setOpen(false);
            }}>
              <span>Logout</span>
            </NavItem>
          </Fragment>
        )
      }
    }

    return (
      <NavItem key={nav.text} onClick={() => setOpen(false)}>
        <NavLink to={`${nav.url}`}>
          {nav.text}
        </NavLink>
      </NavItem>
    )

  })

  return (
    <Sidebar>
      <Navs>
        {renderLinks}
      </Navs>
    </Sidebar>
  )
}

const Sidebar = styled.div`
  position: fixed;
  top: 5rem;
  width: 100%;
  left: 0;
  height: calc(100vh - 5rem);
  background-color: var(--accent-clr);
  z-index: 100;
  display: flex; 
  transition: all 0.2s;

  @media (min-width: 768px) {
    display: none;
  }
`

const Navs = styled.ul`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3rem 0;
`

const NavItem = styled.li`
  list-style: none;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  a, span{
    
    color: #fff;
  }

  .avatar {
    width: 45px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`

export default connect(null, { logout })(HeaderMobile)
