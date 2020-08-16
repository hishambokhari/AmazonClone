export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch(action.type) {
    case 'ADD_To_BASKET':
      // Logic for adding item to basket
      return { state};
      break;
    case 'REMOVE_FROM_BASKET':
      // Logic from removing from basket
      return {state};
      break;  
    default:
      return state;  
  }
} 

export default reducer;

