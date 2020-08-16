export const initialState = {
  basket: []
};

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_To_BASKET':
      // Logic for adding item to basket
      break;
    case 'REMOVE_FROM_BASKET':
      // Logic from removing from basket
      break;  
    default:
      return state;  
  }
} 

export default reducer;

