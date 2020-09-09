import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ToursList from './components/tours/ToursList';
import Header from './components/Header';
import TourShow from './components/tours/TourShow';
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions';
import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path={['/', '/tour']} component={ToursList} />
        <Route path='/tour/:id' component={TourShow} />
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);