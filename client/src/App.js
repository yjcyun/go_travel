import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions';
import ToursList from './components/tours/ToursList';
import Header from './components/Header';
import TourShow from './components/tours/tour-show/TourShow';
import history from './history';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Route exact path={['/', '/tour']} component={ToursList} />
        <Route path='/tour/:id' component={TourShow} />
      </Router>
    );
  }
}

export default connect(null, { fetchUser })(App);