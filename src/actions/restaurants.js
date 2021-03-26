// restautrant actions file
// import { bindActionCreators } from 'redux';

export const addRestaurant = restaurant => {
   return {
      type: "ADD_RESTAURANT",
      text: restaurant
   };
};

export const deleteRestaurant = restaurantId => {
   return {
      type: "DELETE_RESTAURANT",
      id: restaurantId
   };
};


export const updateRestaurant = restaurant => {
   return {
      type: "UPDATE_RESTAURANT",
      text: restaurant.text,
      id: restaurant.id
   };
};