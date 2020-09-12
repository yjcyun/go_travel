import React, { useState, Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CgMenuRightAlt } from 'react-icons/cg';
import { navLinks } from '../../constants/navLinks';
import { logout } from '../../redux/actions/authActions';
import HeaderMobile from './HeaderMobile';
import styled from 'styled-components';
import Logo from './Logo';
import MenuDropdown from './MenuDropdown';

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const renderDropdown = () => setDropDown(!dropDown);

  // RENDER NAV LINKS
  const renderLinks = navLinks.map(nav => {
    if (props.auth.isSignedIn && nav.text === 'login') {
      if (props.auth.user) {
        const name = props.auth.user.name.split(' ')[0];
        return (
          <Fragment key={nav.text}>
            <NavItem key={nav.text} onClick={() => renderDropdown()}>
              <img src={`/users/${props.auth.user.photo}`} alt='' className='avatar' /> {name}
            </NavItem>
            {dropDown && <MenuDropdown close={renderDropdown}/>}
          </Fragment>
        )
      }
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
  position: relative;

  @media (min-width: 720px) {
    display:flex;
    align-items: center;
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
  display: flex;
  align-items: center;

  .avatar {
    width: 45px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`

export default connect(mapStateToProps, { logout })(Header)