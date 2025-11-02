import { useReducer, type ReactNode } from 'react';
import { cartReducer, type CartState } from '../reducers/cartReducer';
import { CartContext } from '../contexts/CartContext';

type CartProviderProps = {
  initialCart?: CartState;
  children: ReactNode;
};

export function CartProvider({
  initialCart = { cart: [] },
  children,
}: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  return <CartContext value={{ state, dispatch }}>{children}</CartContext>;
}
