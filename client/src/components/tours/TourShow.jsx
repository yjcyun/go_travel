import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTour } from '../../redux/actions/tourActions';
import styled from 'styled-components';
import Title from '../Title';
import TourShowHeader from './TourShowHeader';

class TourShow extends Component {
  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id);
  }

  render() {
    if (!this.props.tour) {
      return <div>Loading...</div>
    }
    const { name, price, duration, difficulty, description, imageCover, maxGroupSize, startDates, startLocation } = this.props.tour;

    return (
      <TourShowContainer>
        <h1>{name.toUpperCase()}</h1>
        <TourShowHeader {...this.props.tour} />

        <HeaderImage>
          <img src={`/tours/${imageCover}`} alt={name} />
          <img src={`/tours/${imageCover}`} alt={name} />
        </HeaderImage>
        <Title title='Tour Overview' />
        <TourOverview>
          <div>
            <div>Duration {duration}</div>
            <div>Difficulty {difficulty}</div>
            <div>Participants{maxGroupSize}</div>
          </div>
          <div>
            <div>{description}</div>
          </div>
        </TourOverview>

        <div>{price}</div>
        <Title title='Tour Highlights' center />
        <div>{startDates.map(date => <p key={date}>{date}</p>)}</div>

      </TourShowContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { tour: state.tours[ownProps.match.params.id] }
}

const TourShowContainer = styled.div`
  margin: 3rem auto;
`



const HeaderImage = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const TourOverview = styled.div`

`

export default connect(mapStateToProps, { fetchTour })(TourShow)