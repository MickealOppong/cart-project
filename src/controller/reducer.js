import { ADD_TO_BASKET, CLEAR_LIST, DECREASE_QTY, INCREASE_QTY, REMOVE_ITEM } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, items: [] }
  }
  if (action.type === ADD_TO_BASKET) {

  }
  if (action.type === REMOVE_ITEM) {
    let newItems = state.items.filter((product) => product.id !== action.payload.id)
    return { ...state, items: newItems }
  }
  if (action.type === INCREASE_QTY) {
    return {
      ...state, items: state.items.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = product.quantity + 1;
        }
        return product;
      })
    }

  }
  if (action.type === DECREASE_QTY) {
    return {
      ...state, items: state.items.filter((product) => {
        if (product.id === action.payload.id) {
          product.quantity = product.quantity - 1;
          if (product.quantity === 0) {
            return;
          }
        }
        return product;
      })
    }
  }

  return state;
}
export default reducer;