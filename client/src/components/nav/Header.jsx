import React, { useState } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CgMenuRightAlt } from 'react-icons/cg';
import { navLinks } from '../../constants/navLinks';
import HeaderMobile from './HeaderMobile';
import styled from 'styled-components';
import Logo from './Logo';

const Header = () => {
  const [open, setOpen] = useState(false);

  // RENDER NAV LINKS
  const renderLinks = navLinks.map(nav => (
    <NavItem key={nav.text}>
      <NavLink to={`${nav.url}`} >
        {nav.text}
      </NavLink>
    </NavItem>
  ))

  return (
    <HeaderWrapper>
      <Logo />
      <NavsList>
        {renderLinks}
      </NavsList>
      <MenuBar>
        <CgMenuRightAlt onClick={() => setOpen(!open)} />
      </MenuBar>
      {open && <HeaderMobile open={open} setOpen={setOpen} />}
    </HeaderWrapper>
  )
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  position: relative;
  transition: all 0.2s;
`

const NavsList = styled.ul`
  text-transform: uppercase;
  display: none;

  @media (min-width: 720px) {
    display:flex;
  }
`

const MenuBar = styled.div`
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 720px) {
    display: none;
  }
`

const NavItem = styled.li`
  list-style: none;
  padding: 0 1rem;
`


export default connect(mapStateToProps)(Header)