import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CgMenuRightAlt } from 'react-icons/cg';
import { navLinks } from '../../constants/navLinks';
import { logout } from '../../redux/actions/authActions';
import HeaderMobile from './HeaderMobile';
import MenuDropdown from './MenuDropdown';
import Logo from './Logo';
import styled from 'styled-components';

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
            <NavItem key={nav.text} onClick={() => renderDropdown()} dark={props.dark}>
              <img src={`/users/${props.auth.user.photo}`} alt='' className='avatar' /><span>{name}</span>
            </NavItem>
            {dropDown && <MenuDropdown close={renderDropdown} />}
          </Fragment>
        )
      }
    }

    return (
      <NavItem key={nav.text} dark={props.dark}>
        <NavLink to={`${nav.url}`}>
          {nav.text}
        </NavLink>
      </NavItem>
    )
  })

  return (
    <HeaderWrapper home={props.home}>
      <div className='body-container'>
        <Logo />
        <NavsList>
          {renderLinks}
        </NavsList>
        <MenuBar>
          <CgMenuRightAlt onClick={() => setOpen(!open)} style={{ color: '#fff' }} />
        </MenuBar>
        {open && <HeaderMobile open={open} setOpen={setOpen} isSignedIn={props.auth} />}
      </div>
    </HeaderWrapper>
  )
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

const HeaderWrapper = styled.nav`
  background-color: ${props=>props.home? '' : '#444'};

  .body-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    position: relative;
    transition: all 0.2s;
    width: 100%;
    padding: 0 1rem;
  }
  
`

const NavsList = styled.ul`
  text-transform: capitalize;
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
  padding: 0 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  a, span {
    color: #fff;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .avatar {
    width: 45px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`

export default connect(mapStateToProps, { logout })(Header)