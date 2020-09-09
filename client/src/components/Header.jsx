import React, { Component } from 'react'
import { connect } from 'react-redux';

class Header extends Component {
  // renderContent() {
  //   switch (this.props.auth) {
  //     case null:
  //       return 'Still deciding'
  //     case false:
  //       return 'logged out'
  //     default:
  //       return 'logged in'
  //   }
  // }

  render() {
    return (
      <div>
        Header
        Login
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header)