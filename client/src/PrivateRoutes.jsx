import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoutes = ({ component: Component, auth, ...otherProps }) => {
  // if(!auth.isSignedIn){
  //   return null;
  // }
  return (
    <Route
      {...otherProps}
      render={props => !auth.isSignedIn
        ? <Redirect to='/login' />
        : <Component {...props} />}
    />
  )
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(PrivateRoutes)