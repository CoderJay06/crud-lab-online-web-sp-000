// reviews actions

export const addReview = review => {
   return {
      type: "ADD_REVIEW",
      review
   };
};

export const deleteReview = reviewId => {
   return {
      type: "DELETE_REVIEW",
      id: reviewId
   };
};