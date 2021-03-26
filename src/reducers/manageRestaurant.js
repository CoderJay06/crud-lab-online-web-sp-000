import cuid from 'cuid';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   restaurants: restaurantsReducer,
   reviews: reviewsReducer
});

export default rootReducer;

function restaurantsReducer(state = [], action) {
   switch (action.type) {
      case "ADD_RESTAURANT":
         // Update and return state
         const newRestaurant = {
            id: cuid(),
            text: action.text
         };
         return [...state, newRestaurant];

         case "DELETE_RESTAURANT":
            // Remove restaurant and associated reviews by id, return updated state
            console.log('state: ', state, 'action: ', action)
            // debugger
            return [ ...state.filter(restaurant => restaurant.id !== action.id)];
         
         case "UPDATE_RESTAURANT":
            // Updates selected restaurant and store, returns state
            console.log('state: ', state, 'action: ', action)
            const updatedText = action.text

            return [
               ...state.filter(restaurant => {
                  if (restaurant.id === action.id) {
                     restaurant.text = updatedText;
                     return restaurant
                  }
               })
            ]
         default: 
            break;
   }
   return state;
}

function reviewsReducer(state = [], action) {
   switch (action.type) {
      case "ADD_REVIEW":
         // Add review to associated restaurants reviews
         const newReview = {
            id: cuid(),
            text: action.review.text,
            restaurantId: action.review.restaurantId
         };
         // return updated state
         return [...state, newReview];
         
      case "DELETE_REVIEW":
         // delete review associated with restaurant
         
         let reviewIdx = state.findIndex(review => review.id === action.id)
         return [
               ...state.slice(0, reviewIdx),
               ...state.slice(reviewIdx + 1)
            ];
      default: 
         break;
   };
   return state;
}

// export default function manageRestaurants(state = {
//    restaurants: [],
//    reviews: []
// }, action) {
//    switch (action.type) {
//       case "ADD_RESTAURANT":
//          // Update and return state
//          const newRestaurant = {
//             id: cuid(),
//             text: action.text
//          };
         
//          return {
//             ...state,
//             restaurants: [...state.restaurants.concat([newRestaurant])]
//          };
//       case "DELETE_RESTAURANT":
//          // Remove restaurant and associated reviews by id, return updated state
//          return {
//             ...state,
//             restaurants: [
//                ...state.restaurants.filter(restaurant => restaurant.id !== action.id)
//             ],
//             reviews: [
//                ...state.reviews.filter(review => review.restaurantId !== action.id)
//             ]
//          };
//       case "ADD_REVIEW":
//          // Add review to associated restaurants reviews
//          const newReview = {
//             id: cuid(),
//             text: action.review.text,
//             restaurantId: action.review.restaurantId
//          };
//          // return updated state
//          return {
//             ...state,
//             reviews: [...state.reviews.concat([newReview])]
//          };
//       case "DELETE_REVIEW":
//          // delete review associated with restaurant
//          return {
//             ...state,
//             reviews: [
//                ...state.reviews.filter(review => review.id !== action.id)
//             ]
//          }
//       default: 
//          break;
//    };
//    return state;
// }
