import Button from './Button';
import { AiOutlineClose } from 'react-icons/ai';
import useCart from '../hooks/useCart';

type PropsType = {
  item: CartItemType;
};
const CartItem = ({ item }: PropsType) => {
  const { dispach } = useCart();
  const deleteItem = () => {
    dispach({ type: 'remove from cart', payload: item });
  };
  return (
    <div className="relative w-full flex items-center justify-start gap-3 p-2 border-t hover:bg-gray-100">
      <div className="w-16 h-16">
        <img
          className="w-full aspect-square"
          src={item.images[0]}
          alt={item.name}
        />
      </div>
      <div className=" flex flex-col items-start justify-start gap-2">
        <div className="w-full flex flex-nowrap">
          <span>{`${item.name}${
            item.capacity ? ' - ' + item.capacity + ' میلی لیتر' : ''
          }`}</span>
        </div>
        <div className="w-full flex items-center flex-nowrap">
          <span className="text-gray-400 pl-2 text-xs">
            {item.count + ' X'}
          </span>
          <span className="text-[#5F754D] font-bold">
            {Intl.NumberFormat('fa-IR').format(item.price!)}
            {' تومان'}
          </span>
        </div>
      </div>
      <div className="absolute top-2 left-0 flex items-center justify-end">
        <Button onClick={deleteItem}>
          <AiOutlineClose size={16} className="hover:text-red-600" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
