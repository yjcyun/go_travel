import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyle';
import { deleteTour, fetchTour } from '../../redux/actions/tourActions'
import Modal from '../utils/Modal'
import styled from 'styled-components';

class TourDelete extends Component {
  // LOAD CURRENT TOUR
  componentDidMount() {
    this.props.fetchTour(this.props.match.params.id);
  }

  // RENDER MODAL CONTENT
  renderContent = () => {
    if (!this.props.tour) {
      return 'Are you sure you want to delete this tour?'
    }
    return `Are you sure you want to delete ${this.props.tour.name} ?`
  }

  // RENDER MODAL BUTTONS
  renderActions = () => (
    <ModalButton>
      <Button onClick={() => this.props.deleteTour(this.props.match.params.id)} dark>Delete</Button>
      <Link to='/admin/tours'>
        <Button>Cancel</Button>
      </Link>
    </ModalButton>
  )

  // RENDER COMPONENT
  render() {
    return (
      <div>
        <Modal
          title='Delete Tour'
          content={this.renderContent()}
          actions={this.renderActions()}
        />
      </div>
    )
  }
}

const ModalButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  
  a{
     width: 100%;
  }
`

const mapStateToProps = (state, ownProps) => {
  return { tour: state.tours[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { deleteTour, fetchTour })(TourDelete)