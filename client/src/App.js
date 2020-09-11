import React, { Component, useEffect } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthToken } from './utils/setAuthToken';
import { loadUser } from './redux/actions/authActions';
import { store } from './redux/store';
import ToursList from './components/tours/tour-list/ToursList';
import Header from './components/nav/Header';
import TourShow from './components/tours/tour-show/TourShow';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import history from './history';
import './app.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // ONLY RUN ONCE WHEN LOADED
  useEffect(() => {
    store.dispatch(loadUser())
    return () => {
      //cleanup
    }
  }, []);

  // FOR LOGIN/REGISTER PAGE, DON'T SHOW NAVBAR
  const loginContainer = () => (
    <>
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
    </>
  )

  // FOR OTHER PAGES, SHOW NAVBAR
  const defaultContainer = () => (
    <div className='body-container'>
      <Header />
      <Route exact path={'/'} component={ToursList} />
      <Route exact path={'/tours'} component={ToursList} />
      <Route path='/tours/:id' component={TourShow} />
    </div>
  )

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path={['/(login)', '/(signup)']} component={loginContainer} />
          <Route component={defaultContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default connect(null)(App);