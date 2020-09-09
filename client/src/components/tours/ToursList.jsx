import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTours } from '../../redux/actions/tourActions'
import styled from 'styled-components';
import ToursItem from './ToursItem';

class ToursList extends Component {
  componentDidMount() {
    this.props.fetchTours();
  }

  // RENDER ALL TOURS
  renderTours = () => {
    console.log(this.props.tours)
    return this.props.tours.map(tour =>
      <ToursItem key={tour.id} {...tour} />
    )
  }

  render() {
    if (!this.props.tours) {
      return <div>Loading...</div>
    }

    return (
      <CardLayout>
        {this.renderTours()}
      </CardLayout>
    )
  }
}

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 2rem;
`

const mapStateToProps = state => {
  return { tours: Object.values(state.tours) }
}

export default connect(mapStateToProps, { fetchTours })(ToursList)