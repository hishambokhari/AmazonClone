export const initialState = {
  basket: [{
    id:"32546789",
    title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) ",
    price: 598.99,
    rating: 4,
    image: "https://brain-images-ssl.cdn.dixons.com/7/3/10206137/u_10206137.jpg"
  },
],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      // Logic for adding item to basket
      return { 
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      // Logic from removing from basket
      return {state};
      
    default:
      return state;  
  }
} 

export default reducer;

