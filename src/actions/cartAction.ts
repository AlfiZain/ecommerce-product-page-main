import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM } from '../constants/cartTypes';
import type { Item } from '../types/item';

export type AddItemAction = {
  type: typeof ADD_ITEM;
  payload: { item: Item };
};

export type RemoveItemAction = {
  type: typeof REMOVE_ITEM;
  payload: { id: string };
};

export type ClearCartAction = {
  type: typeof CLEAR_CART;
};

export type CartActionTypes =
  | AddItemAction
  | RemoveItemAction
  | ClearCartAction;

export function addItem(item: Item): AddItemAction {
  return {
    type: ADD_ITEM,
    payload: { item },
  };
}

export function removeItem(id: string): RemoveItemAction {
  return {
    type: REMOVE_ITEM,
    payload: { id },
  };
}

export function clearCart(): ClearCartAction {
  return {
    type: CLEAR_CART,
  };
}
