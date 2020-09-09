import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ToursList from './components/tours/ToursList';
import Header from './components/Header';
import OneTour from './components/tours/OneTour';
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={ToursList} />
        <Route path='/tour/:id' component={OneTour} />
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);