import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchTours } from '../../redux/actions/tourActions'
import { Button } from '../../globalStyle';
import ProfileBody from '../profile/ProfileBody'
import TourItem from './TourItem';
import styled from 'styled-components';

class ToursList extends Component {
  // LOAD ALL TOURS
  componentDidMount() {
    this.props.fetchTours();
  }

  // ITERATE THROUGH TOURS
  renderTours = () => {
    return this.props.tours.map(tour => {
      return (
        <Fragment key={tour._id}>
          <TourItem {...tour} />
        </Fragment>
      )
    })
  }

  // RENDER COMPONENT
  render() {
    if (!this.props.tours) {
      return <div>Loading...</div>
    }

    return (
      <ProfileBody>
        <Title>
          <h2>Tours List</h2>
          <Link to={`/admin/tours/create`}>
            <Button dark>Add Tour</Button>
          </Link>
        </Title>

        <Table>
          <span className='heading'>Tour Name</span>
          <span className='heading'>Location</span>
          <span className='heading'></span>
          {this.renderTours()}
        </Table>
      </ProfileBody>
    )
  }
}

// REDUX-STATE
const mapStateToProps = state => ({
  tours: Object.values(state.tours)
});

// STYLE
const Table = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  border-top: var(--border);

  .heading {
    font-weight: 500;
  }

  span {
    padding: 0.5rem 0;
    border-bottom: var(--border);
    display: flex;
    align-items: center;
    font-size: 0.8rem;

    a{
      display: flex;
      align-items: center;
      color: #000;
    }
  }

  @media(min-width:768px) {
    span{
      padding: 0.5rem;
      font-size: 1rem;

      a{
        font-size: 1rem;
      }
    }
  }
`

const Title = styled.div`
  display:grid;
  grid-template-columns: 3fr 2fr;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
  }
`

// CONNECT REDUX
export default connect(mapStateToProps, { fetchTours })(ToursList)