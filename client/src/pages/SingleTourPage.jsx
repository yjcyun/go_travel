import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTour } from '../redux/actions/tourActions';
import TourBanner from '../components/tours/TourBanner';
import TourGallery from '../components/tours/TourGallery';
import TourReviews from '../components/tours/TourReviews';
import TourShowHeader from '../components/tours/TourShowHeader';
import TourShowHeaderImg from '../components/tours/TourShowHeaderImg';
import TourShowOverview from '../components/tours/TourShowOverview';
import styled from 'styled-components';
import Footer from '../components/utils/Footer';

class SingleTourPage extends Component {
  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id);
  }

  render() {
    if (!this.props.tour) {
      return <div>Loading...</div>
    }

    const { name } = this.props.tour;
    return (
      <TourShowContainer>
        <div className='body-container'>
          <h1>{name.toUpperCase()}</h1>
          <TourShowHeader {...this.props.tour} {...this.props.auth}/>
          <TourShowHeaderImg {...this.props.tour} />
          <TourShowOverview {...this.props.tour} />
          <TourGallery {...this.props.tour} />
          <TourReviews {...this.props.tour} />
          <TourBanner {...this.props.tour} {...this.props.auth} />
        </div>
        <Footer light />
      </TourShowContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    tour: state.tours[ownProps.match.params.id],
    auth: state.auth 
  }
}

const TourShowContainer = styled.div`
  background: #f4f4f4;
  padding: 5rem 1rem 0;

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

export default connect(mapStateToProps, { fetchTour })(SingleTourPage)