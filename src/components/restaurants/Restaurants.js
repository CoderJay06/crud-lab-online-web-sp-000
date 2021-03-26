import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
   
  renderRestaurants = () => {
     return this.props.restaurants.map(restaurant => 
      <Restaurant key={restaurant.id} 
                  restaurant={restaurant} 
                  deleteRestaurant={this.props.deleteRestaurant}
                  updateRestaurant={this.props.updateRestaurant} />
     );
  }

  render() {
    return(
      <ul>
         {/* {this.props.restaurants.length > 0 ? this.props.restaurants[0].text : null} */}
        Restaurants Component
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;