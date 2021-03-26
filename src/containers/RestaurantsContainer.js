import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';
import { addRestaurant, 
         deleteRestaurant, 
         updateRestaurant } from '../actions/restaurants';

// will connect to Redux and pass appropriate props down to children

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants} 
                     deleteRestaurant={this.props.deleteRestaurant}
                     updateRestaurant={this.props.updateRestaurant} />
      </div>
    )
  }
}

// map state and dispatch to props
export default connect(
   (state) => ({ restaurants: state.restaurants }),
   { addRestaurant, deleteRestaurant, updateRestaurant }
)(RestaurantsContainer);
