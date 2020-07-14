// Pure function
import {CART_ITEMS, SHOES_ITEMS, SHOES_TOTAL} from "./types";

export function rootReducer(state, action) {
  switch (action.type) {
    case SHOES_ITEMS:
      // console.log('action SHOES_ITEMS:', action)
      return {...state, cartItems: action.itemsTotal}
    case SHOES_TOTAL:
      // console.log('action SHOES_TOTAL:', action)
      return {...state, cartTotal: action.itemsTotalParse}
    case CART_ITEMS:
      // console.log('action SHOES_TOTAL:', action)
      return {...state, carts: action.carts}
    default: return state
  }
}
