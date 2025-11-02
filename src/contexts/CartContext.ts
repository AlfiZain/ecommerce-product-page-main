import { createContext, type Dispatch } from 'react';
import type { CartState } from '../reducers/cartReducer';
import type { CartActionTypes } from '../actions/cartAction';

export type CartContextType = {
  state: CartState;
  dispatch: Dispatch<CartActionTypes>;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
