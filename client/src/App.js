import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AllTours from './components/tours/AllTours';
import Header from './components/Header';
import OneTour from './components/tours/OneTour';
import { connect } from 'react-redux';
import { fetchUser } from './redux/actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={AllTours} />
        <Route path='/tour/:id' component={OneTour} />
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);