import {BiMenu} from 'react-icons/bi'
import Button from './Button';
import { useMenu } from '../hooks/useMenu';
import { useEffect, useState } from 'react';
import Drawer from './Drawer';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import useCart from '../hooks/useCart';
import CartItem from './CartItem';

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [state] = useCart();
  const handleOpenCart = () => {
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };
  const handleOpenMobile = () => {
    setOpenMobile(true);
  };
  const handleCloseMobile = () => {
    setOpenMobile(false);
  };
  const [menuItems, menuIcons, mobileIcons] = useMenu({ handleOpenCart });
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const tp = state.reduce(
      (acc: number, item: CartItemType) => acc + item.price * item.count,
      0
    );
    setTotalPrice(tp);
  }, [state]);
  return (
    <>
      <div className="md:hidden w-full flex items-center justify-between gap-8 px-2">
        <div className="flex items-center justify-center gap-5 font-bold">
          <Button onClick={handleOpenMobile}>
            <BiMenu size={24} className=" hover:text-[#5F754D]" />
          </Button>
        </div>
        <div className="h-16">
          <a href="/">
            <img
              className="w-full h-full"
              src="assets/images/logo-rosheh.png"
              alt="rosheh"
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Button>{menuIcons[menuIcons.length - 1].element}</Button>
        </div>
      </div>

      <div className="hidden w-full md:flex items-center justify-between gap-8 px-10">
        <div className="h-16">
          <a href="/">
            <img
              className="w-full h-full"
              src="assets/images/logo-rosheh.png"
              alt="rosheh"
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-5 font-bold">
          {menuItems.map((menuItem: MenuItem) => {
            return <div key={crypto.randomUUID()}>{menuItem.element}</div>;
          })}
        </div>
        <div className="flex items-center justify-center gap-5">
          {menuIcons.map((menuIcon: MenuItem) => {
            return <div key={crypto.randomUUID()}>{menuIcon.element}</div>;
          })}
        </div>
      </div>
      <Drawer isOpen={openCart} handleClose={handleCloseCart}>
        <div className="w-full h-16 flex items-center justify-between px-2">
          <span className="text-xl font-bold">{'سبد خرید'}</span>
          <div>
            <Button onClick={handleCloseCart}>
              <AiOutlineClose size={24} className="hover:text-red-600" />
            </Button>
          </div>
        </div>
        <div className="px-2 overflow-y-auto">
          {state.map((item: CartItemType) => {
            return <CartItem item={item} />;
          })}
        </div>
        <div className="w-full absolute bottom-0 flex flex-col items-center justify-between px-2">
          <span className="text-xl text-[#5F754D] font-bold">
            {Intl.NumberFormat('fa-IR').format(totalPrice)}
            {' تومان'}
          </span>
          <div className="m-2 w-full rounded-full bg-[#5F754D] text-white p-2">
            <Button onClick={handleCloseCart}>{'تکمیل سفارش'}</Button>
          </div>
        </div>
      </Drawer>
      <Drawer isOpen={openMobile} handleClose={handleCloseMobile}>
        <form className="relative w-full">
          <input
            className="p-4 w-full h-16 shadow-md placeholder-gray-500 placeholder:font-bold"
            type="search"
            placeholder="برای جستجو..."
          />
          <AiOutlineSearch
            size={24}
            className="absolute top-6 left-4 text-gray-500 "
          />
        </form>
        <div className="flex flex-col items-center justify-start space-y-5 divide-y text-sm font-bold">
          {menuItems.map((menuItem: MenuItem) => {
            return <div className="w-full px-4">{menuItem.element}</div>;
          })}
          {mobileIcons.map((mobile: MenuItem) => {
            return mobile.element;
          })}
        </div>
      </Drawer>
    </>
  );
};

export default Header;
