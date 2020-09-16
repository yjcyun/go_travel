import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTours } from '../redux/actions/tourActions'
import styled from 'styled-components'
import Header from '../components/nav/Header'
import ToursItem from '../components/tours/tour-list/ToursItem'
import { CardLayout } from '../globalStyle'
import Title from '../components/utils/Title'

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
      <div>
        {/* HERO */}
        <Hero>
          <Header dark />
          <Content className='body-container'>
            <h1>Start your adventure</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, est!</p>
            <Link to='/tours'><button>Explore</button></Link>
          </Content>
        </Hero>
        {/* FEATURED TOURS */}
        <FeaturedTours className='body-container'>
          <Title title='Featured Tours' />
          <CardLayout home>
            {this.featuredTours()}
          </CardLayout>
        </FeaturedTours>
      </div>
    )
  }
}

const Hero = styled.section`
  background:  
    linear-gradient(
      rgba(0,0,0,0.8), 
      rgba(0,0,0,0.9)
    ), url('/background-2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  height: 80vh;
`

const Content = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  height: calc(80vh - 5rem);
  color: #fff;
  text-align: center;
  
  h1{
    text-transform: uppercase;
    font-size: 4rem;
    line-height: 1;
    margin: 1rem auto;
  }

  a {
    margin-top: 4rem;
  }

  button {
    padding: 1rem 3rem;
    cursor: pointer;
    background-color: var(--accent-clr);
    font-size: 1.4rem;
    border: none;
    color: #fff;
  }
`

const FeaturedTours = styled.section`
  margin: 7rem auto;
`

const mapStateToProps = state => {
  return { tours: Object.values(state.tours) }
}

export default connect(mapStateToProps, { fetchTours })(HomePage)