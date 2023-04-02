import { useReducer } from "react";
import CartContext from "./cart-context"

const cartReducer=(state,action) =>{
  if(action.type==='Add'){
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  }
  if(action.type==='Remove'){
    // console.log(action.id);
    const  updatedItems=state.items.filter(item => item.imdbID!==action.id);
    return {
      items:updatedItems,
    }
  }
  return { items: [] };
}

const CartProvider = (props) =>{
  const [cartState ,dispatchCartAction] = useReducer(cartReducer,{items:[]});
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "Add", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "Remove", id: id });
  };
  const obj = {
    items : cartState.items,
    addItem : addItemToCartHandler,
    removeItem: removeItemFromCartHandler 
  } 
  return <CartContext.Provider value={obj}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;