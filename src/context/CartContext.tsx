/* eslint-disable no-case-declarations */
import { ReactNode, createContext, useReducer } from 'react';

const reducer = (state: CartItemType[], action: ActionType) => {
  const type = action.type;
  switch (type) {
    case 'add to cart':
      const newItem = state.find((item) => item.id === action.payload.id);
      if (newItem) {
        return state.map((item) => {
          if (item.id === newItem.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });
      } else {
        return [action.payload, ...state];
      }

    case 'remove from cart':
      return state.filter((item) => item.id !== action.payload.id);
    case 'update cart':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
  }
};

export const CartContext = createContext<CartItemType[]>([]);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispach] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ state, dispach }}>
      {children}
    </CartContext.Provider>
  );
}
