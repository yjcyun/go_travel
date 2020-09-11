import React, { useState } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CgMenuRightAlt } from 'react-icons/cg';
import { navLinks } from '../../constants/navLinks';
import { logout } from '../../redux/actions/authActions';
import HeaderMobile from './HeaderMobile';
import styled from 'styled-components';
import Logo from './Logo';

const Header = (props) => {
  const [open, setOpen] = useState(false);
  console.log(props);
  // RENDER NAV LINKS
  const renderLinks = navLinks.map(nav => {
    if (props.auth.isSignedIn && nav.text === 'login') {
      return (
        <NavItem key={nav.text} onClick={()=>props.logout()}>
          logout
        </NavItem>
      )
    }

    return (
      <NavItem key={nav.text} >
        <NavLink to={`${nav.url}`}>
          {nav.text}
        </NavLink>
      </NavItem>
    )
  })

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
  cursor: pointer;
`


export default connect(mapStateToProps, { logout })(Header)