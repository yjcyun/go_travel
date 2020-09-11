import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../constants/navLinks'
import styled from 'styled-components'

const HeaderMobile = ({ open, setOpen }) => {
  // PREVENT SCROLL WHEN OPENED
  useEffect(() => {
    open && (document.body.style.overflow = 'hidden');
    !open && (document.body.style.overflow = '');
  }, [open]);

  // RENDER NAV LINKS
  const renderLinks = navLinks.map(nav => (
    <NavItem key={nav.text}>
      <NavLink to={`${nav.url}`} onClick={() => setOpen(false)}>
        {nav.text}
      </NavLink>
    </NavItem>
  ))

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
  left: 0;
  width: 100%;
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
`

const NavItem = styled.li`
  list-style: none;
  padding: 0.5rem 0;

  a{
    color: #fff;
  }
`


export default HeaderMobile
