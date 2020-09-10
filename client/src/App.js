import React, { Component } from 'react';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions';
import ToursList from './components/tours/tour-list/ToursList';
import Header from './components/nav/Header';
import TourShow from './components/tours/tour-show/TourShow';
import history from './history';
import './app.css';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path={['/', '/tour']} component={ToursList} />
            <Route path='/tour/:id' component={TourShow} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default connect(null, { fetchUser })(App);