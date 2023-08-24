import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useCart = () => {
  const { state, dispach } = useContext(CartContext)!;

  return { state, dispach };
};

export default useCart;
