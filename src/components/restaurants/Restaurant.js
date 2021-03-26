import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {
   state = {
      renderEditForm: false,
      restaurant: {
         id: this.props.restaurant.id,
         text: this.props.restaurant.text,
      }
   }

  handleOnChange = event => {
   event.persist();
   this.setState(prevState => ({
      ...prevState,
      restaurant: {
         id: this.state.restaurant.id,
         text: event.target.value
      }
   }));
  }

  handleOnSubmit = event => {
     event.preventDefault();
     console.log(this.state)
     this.props.updateRestaurant(this.state.restaurant)
     this.setState({
         renderEditForm: false,
         restaurant: {
            id: this.props.restaurant.id,
            text: this.props.restaurant.text,
         }
     });
  }

  handleEditClick = () => {
    this.setState(prevState => ({
       ...prevState,
       renderEditForm: true
    }));
  }

  renderEditFormFor = () => {
   return (
     <form onSubmit={this.handleOnSubmit} >
        <input type="text" onChange={this.handleOnChange} value={this.state.restaurant.text} />
        < br />
        <input type="submit" value="Update" />
     </form>
      )
   }

  render() {
   //  const { restaurant } = this.props;
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={() => this.props.deleteRestaurant(this.state.restaurant.id)} > X </button>
          <button onClick={this.handleEditClick}>Edit</button>
          { this.state.renderEditForm ? this.renderEditFormFor() : null }
          { this.state.restaurant.text }
          <ReviewsContainer restaurant={this.props.restaurant} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
