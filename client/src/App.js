import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ToursList from './components/tours/tour-list/ToursList';
import Header from './components/nav/Header';
import TourShow from './components/tours/tour-show/TourShow';
import LoginPage from './pages/LoginPage';
import './app.css';

class App extends Component {
  // FOR LOGIN/REGISTER PAGE, DON'T SHOW NAVBAR
  loginContainer = () => (
    <Route path='/login' component={LoginPage} />
  )

  // FOR OTHER PAGES, SHOW NAVBAR
  defaultContainer = () => (
    <div className='body-container'>
      <Header />
      <Route exact path={'/'} component={ToursList} />
      <Route exact path={'/tours'} component={ToursList} />
      <Route path='/tours/:id' component={TourShow} />
    </div>
  )

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/(login)' component={this.loginContainer} />
            <Route component={this.defaultContainer} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default connect(null)(App);