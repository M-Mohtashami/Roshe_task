/* eslint-disable no-case-declarations */
import { ReactNode, createContext, useReducer } from 'react';
const initialState: CartItemType[] = [];
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
      const newItem2 = state.find((item) => item.id === action.payload.id);
      if (newItem2) {
        return state.map((item) => {
          if (item.id === newItem2.id) {
            return {
              ...item,
              count: action.payload.count,
            };
          }
          return item;
        });
      } else {
        return [action.payload, ...state];
      }
  }
};

export const CartContext = createContext<CartItemType[]>(initialState);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispach] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispach }}>
      {children}
    </CartContext.Provider>
  );
}
