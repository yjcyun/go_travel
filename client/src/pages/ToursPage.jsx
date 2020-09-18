import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardLayout } from '../globalStyle'
import { fetchTours } from '../redux/actions/tourActions';
import ToursItem from '../components/tours/ToursItem'
import styled from 'styled-components';
import Footer from '../components/utils/Footer';

class ToursPage extends Component {
  componentDidMount() {
    this.props.fetchTours();
  }

  // RENDER ALL TOURS
  renderTours = () => {
    return this.props.tours.map(tour =>
      <ToursItem key={tour.id} {...tour} />
    )
  }

  render() {
    if (!this.props.tours) {
      return <div>Loading...</div>
    }

    return (
      <ToursPageWrapper>
        <CardLayout className='body-container'>
          {this.renderTours()}
        </CardLayout>
        <Footer light />
      </ToursPageWrapper>
    )
  }
}

const ToursPageWrapper = styled.div`
  background: #f4f4f4;
`

const mapStateToProps = state => {
  return { tours: Object.values(state.tours) }
}

export default connect(mapStateToProps, { fetchTours })(ToursPage)