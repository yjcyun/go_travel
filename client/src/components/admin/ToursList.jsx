import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ProfileBody from '../profile/ProfileBody'
import { fetchTours } from '../../redux/actions/tourActions'
import { Link } from 'react-router-dom';

class ToursList extends Component {
  componentDidMount() {
    this.props.fetchTours();
  }

  renderTours = () => {
    return this.props.tours.map(tour =>
      <Fragment key={tour._id}>
        <div>
          <Link to={`/admin/tours/${tour.id}`}>
            {tour.name}
          </Link>
        </div>
        <div></div>
      </Fragment>
    )
  }

  render() {
    if (!this.props.tours) {
      return <div>Loading...</div>
    }

    return (
      <ProfileBody>
        {this.renderTours()}
      </ProfileBody>
    )
  }
}

const mapStateToProps = state => ({
  tours: Object.values(state.tours)
});


export default connect(mapStateToProps, { fetchTours })(ToursList)
