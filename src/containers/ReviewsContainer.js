import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';
import { addReview, deleteReview } from '../actions/reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
         {/* pass restaurantId prop */}
        <ReviewInput restaurantId={this.props.restaurant.id} 
                     addReview={this.props.addReview} /> 
        <Reviews reviews={this.props.reviews} 
                 deleteReview={this.props.deleteReview} 
                 restaurant={this.props.restaurant}
                 restaurantIsDeleted={this.props.restaurantIsDeleted} />
      </div>
    )
  }
}

// map state and dispatch to props
export default connect(
   (state) => ({ reviews: state.reviews }),
   { addReview, deleteReview }
)(ReviewsContainer);
