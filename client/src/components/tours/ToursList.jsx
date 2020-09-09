import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTours } from '../../redux/actions/tourActions'
import ToursItem from './ToursItem';

class ToursList extends Component {
  componentDidMount() {
    this.props.fetchTours();
  }

  // RENDER ALL TOURS
  renderTours = () => {
    return this.props.tours.map(tour =>
      <ToursItem key={tour.id} {...tour}/>
    )
  }

  render() {
    return (
      <div>
        ToursList
        {this.renderTours()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tours: state.tours }
}

export default connect(mapStateToProps, { fetchTours })(ToursList)