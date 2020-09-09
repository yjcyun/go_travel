import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTour } from '../../redux/actions/tourActions';


class TourShow extends Component {
  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id);
  }

  render() {
    if (!this.props.tour) {
      return <div>Loading...</div>
    }
    
    const { name } = this.props.tour;

    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { tour: state.tours }
}

export default connect(mapStateToProps, { fetchTour })(TourShow)