import type { CartActionTypes } from '../actions/cartAction';
import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM } from '../constants/cartTypes';
import type { Item } from '../types/item';

export type CartState = {
  cart: Item[];
};

export function cartReducer(
  state: CartState,
  action: CartActionTypes,
): CartState {
  switch (action.type) {
    case ADD_ITEM: {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.item.id,
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            return item.id === existingItem.id
              ? { ...item, qty: item.qty + action.payload.item.qty }
              : item;
          }),
        };
      }

      return { ...state, cart: [...state.cart, action.payload.item] };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }

    case CLEAR_CART: {
      return { ...state, cart: [] };
    }

    default:
      return state;
  }
}
