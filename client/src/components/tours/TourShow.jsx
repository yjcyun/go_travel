import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTour } from '../../redux/actions/tourActions';
import styled from 'styled-components';
import Title from '../Title';


class TourShow extends Component {
  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id);
  }

  render() {
    if (!this.props.tour) {
      return <div>Loading...</div>
    }
    console.log(this.props.tour);
    const { name, price, duration, difficulty, description, imageCover, maxGroupSize, ratingsAverage, startDates } = this.props.tour;

    return (
      <TourShowContainer>
        <h1>{name.toUpperCase()}</h1>
        <HeaderImage>
          <img src={`/tours/${imageCover}`} alt={name} />
          <img src={`/tours/${imageCover}`} alt={name} />
        </HeaderImage>
        <Title title='Tour Overview'/>
        <div>{description}</div>
        <div>{maxGroupSize}</div>
        <div>{price}</div>
        <div>{duration}</div>
        <Title title='Tour Highlights' center/>
        <div>{difficulty}</div>
        <div>{ratingsAverage}</div>
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
  /* grid-template-columns: 1fr 1fr; */

  
`

export default connect(mapStateToProps, { fetchTour })(TourShow)