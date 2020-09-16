import React, { useEffect } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthToken } from './utils/setAuthToken';
import { loadUser } from './redux/actions/authActions';
import { store } from './redux/store';
import Header from './components/nav/Header';
import TourShow from './components/tours/tour-show/TourShow';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import history from './history';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ForgotPwdConfirmPage from './pages/ForgotPwdConfirmPage';
import ProfilePage from './pages/ProfilePage';
import BookingsPage from './pages/BookingsPage';
import AdminToursPage from './pages/AdminToursPage';
import TourEdit from './components/admin/TourEdit';
import TourCreate from './components/admin/TourCreate';
import './app.css';
import TourDelete from './components/admin/TourDelete';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';

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
      <Route exact path='/' component={HomePage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
      <Route path='/forgot-password' component={ForgotPasswordPage} />
      <Route path='/forgot-password-confirm' component={ForgotPwdConfirmPage} />
    </>
  )

  // FOR OTHER PAGES, SHOW NAVBAR
  const defaultContainer = () => (
    <div className='body-container'>
      <Header />

      <Route exact path='/tours' component={ToursPage} />
      <Route path='/tours/:id' component={TourShow} />
      <Route path='/me/profile' component={ProfilePage} />
      <Route path='/me/bookings' component={BookingsPage} />
      <Route exact path='/admin/tours' component={AdminToursPage} />
      <Route exact path='/admin/tours/create' component={TourCreate} />
      <Route path='/admin/tours/edit/:id' component={TourEdit} />
      <Route path='/admin/tours/delete/:id' component={TourDelete} />
    </div>
  )

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path={['/login', '/signup', '/forgot-password', '/forgot-password-confirm', '/']} component={loginContainer} />
          <Route component={defaultContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default connect(null)(App);