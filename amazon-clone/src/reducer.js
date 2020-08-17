export const initialState = {
  basket: [{
    id:"32546789",
    title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) ",
    price: 598.99,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX385_.jpg"
  },
  {
    id:"32546789",
    title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) ",
    price: 598.99,
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX385_.jpg"
  },
],
  user: null,
};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

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

      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0){
        // item exists! remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id})`)
      }

      return { ...state, basket: newBasket } ;
    default:
      return state;  
  }
} 

export default reducer;

