import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTour } from '../../../redux/actions/tourActions';
import styled from 'styled-components';
import Title from '../../Title';
import TourShowHeader from './TourShowHeader';
import TourShowHeaderImg from './TourShowHeaderImg';
import TourShowOverview from './TourShowOverview';


class TourShow extends Component {
  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id);
  }

  render() {
    if (!this.props.tour) {
      return <div>Loading...</div>
    }

    const { name, startDates } = this.props.tour;

    return (
      <TourShowContainer>
        <h1>{name.toUpperCase()}</h1>
        <TourShowHeader {...this.props.tour} />
        <TourShowHeaderImg {...this.props.tour} />
        <TourShowOverview {...this.props.tour} />

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

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    h1{
      font-size: 3rem;
    }
  }
`



export default connect(mapStateToProps, { fetchTour })(TourShow)