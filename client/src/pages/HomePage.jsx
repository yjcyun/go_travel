import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTours } from '../redux/actions/tourActions'
import styled from 'styled-components'
import ToursItem from '../components/tours/tour-list/ToursItem'
import AboutUs from '../components/home/AboutUs'
import Services from '../components/home/Services'
import Hero from '../components/home/Hero'
import Gallery from '../components/home/Gallery'
import Subscribe from '../components/home/Subscribe'
import FeaturedTours from '../components/home/FeaturedTours'
import Footer from '../components/utils/Footer'


class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTours();
  }

  // RENDER FEATURED TOURS
  featuredTours = () => {
    return this.props.tours
      .filter(tour => tour.featured)
      .map(tour => {
        return (
          <ToursItem key={tour.id} {...tour} />
        )
      })
  }

  render() {
    if (!this.props.tours) {
      return <div>Loading...</div>
    }

    return (
      <HomePageWrapper>
        <Hero />
        <AboutUs />
        <Services />
        <Subscribe />
        {/* FEATURED TOURS */}
        <FeaturedTours featuredTours={this.featuredTours} />
        <Gallery tours={this.props.tours} />
        <Footer />
      </HomePageWrapper>
    )
  }
}

const HomePageWrapper = styled.div`
  margin: 1.5rem;
`

const mapStateToProps = state => {
  return { tours: Object.values(state.tours) }
}

export default connect(mapStateToProps, { fetchTours })(HomePage)