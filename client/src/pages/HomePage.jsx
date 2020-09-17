import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTours } from '../redux/actions/tourActions'
import styled from 'styled-components'
import Header from '../components/nav/Header'
import ToursItem from '../components/tours/tour-list/ToursItem'
import { CardLayout } from '../globalStyle'
import Title from '../components/utils/Title'
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
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

  // RENDER PHOTO GALLERY
  renderGallery = () => {
    return this.props.tours
      .filter(tour => tour.images.length > 0)
      .map(tour => {
        return tour.images.map(el => {
          console.log(el)
          return (
            <div key={el}>
              <img src={`/tours/${el}`} alt={el} />
            </div>
          )
        })
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
        {/* ABOUT US */}
        <AboutUs className='body-container extra-margin'>
          <div className='about-text'>
            <Title title='About Us' />
            <h3>We are Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aliquid magni.</h3>
            <p>Our team Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dignissimos neque quis, tempore aliquam expedita unde similique libero et totam ipsum praesentium necessitatibus, facilis provident ducimus quas! Aliquam, odit cupiditate. Dolores, dignissimos neque quis, tempore aliquam expedita unde similique libero et totam ipsum praesentium necessitatibus, facilis provident ducimus quas! Aliquam, odit cupiditate.</p>
            <p>Read more <span>&#8594;</span></p>
          </div>
          <div className='about-image'>
            <img src='background-1.jpg' alt='background-1' />
          </div>
        </AboutUs>
        {/* SERVICES */}
        <Services className='body-container extra-margin'>
          <Title title='Our Services' />
          <div className='icons'>
            <EachService>
              <img src='/trip-planning.png' alt='map' />
              <h4>Trip planning</h4>
              <div className='blob'></div>
            </EachService>
            <EachService>
              <img src='/compass.png' alt='compass' />
              <h4>Car rental</h4>
              <div className='blob'></div>
            </EachService>
            <EachService>
              <img src='/tent.png' alt='tent' />
              <h4>Accomodations</h4>
              <div className='blob'></div>
            </EachService>
            <EachService>
              <img src='/rv.png' alt='rv car' />
              <h4>Bookings</h4>
              <div className='blob'></div>
            </EachService>
          </div>
        </Services>
        {/* FEATURED TOURS */}
        <FeaturedTours className='body-container extra-margin'>
          <Title title='Popular Tours' />
          <CardLayout home>
            {this.featuredTours()}
          </CardLayout>
        </FeaturedTours>
        {/* PHOTO GALLERY */}
        <FeaturedGallery className='body-container extra-margin'>
          <Title title='Photo Gallery' />
          {this.renderGallery()}
        </FeaturedGallery>
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
  border-radius: 0.5rem;
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
`

const AboutUs = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
  grid-gap: 5rem;

  .about-text {
    margin-top: 4rem;
  }

  .about-text h3 {
    margin: 2rem 0;
    font-weight: 500;
  }

  .about-text p:last-child{
    margin: 1rem 0;
    font-weight: 500;
    color: var(--accent-clr);
    cursor: pointer;
  }

  img {
    border-radius: 0.5rem;
  }
`

const Services = styled.section`
  .icons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 5rem auto;
  }
`

const EachService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  img {
    width: 5rem;
    margin-bottom: 2rem;
  }

  h4 {
    font-weight: 500;
    font-size: 1.2rem;
  }

  .blob {
    position: absolute;
    width: 5rem;
    left: 5rem;
    height: 4rem;
    background-color: var(--accent-light);
    opacity: 0.2;
    border-radius: 45%;
    z-index:-1;
  }
`

const FeaturedGallery = styled.section`

`

const mapStateToProps = state => {
  return { tours: Object.values(state.tours) }
}

export default connect(mapStateToProps, { fetchTours })(HomePage)