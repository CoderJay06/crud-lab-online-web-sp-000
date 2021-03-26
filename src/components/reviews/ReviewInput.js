import React, { Component } from 'react';
import Reviews from './Reviews';

// sets a property of restaurantId on the review input component from the parent components id
// associates the review with the restaurant with a foreign key on the review
class ReviewInput extends Component {
  state = {
     text: ''
  };

  handleOnChange = event => {
     this.setState({text: event.target.value});
  }

  handleOnSubmit = event => {
     event.preventDefault();

     // set property of restaurantId and text on new review obj
     const newReview = {
        text: this.state.text,
        restaurantId: this.props.restaurantId // foreign key
     };

     // Update store with local state (add review to store)
     this.props.addReview(newReview);
   
     // reset state
     this.setState({text: ''});
  }

  render() {
    return (
      <div>
        Review Input
         <form className="review-form" onSubmit={this.handleOnSubmit} >
            <label>Add Review</label>
            <input type="text" value={this.state.text} onChange={this.handleOnChange} />
            <br />
            <input type="submit" />
         </form>
      </div>
    );
  }
};

export default ReviewInput;
