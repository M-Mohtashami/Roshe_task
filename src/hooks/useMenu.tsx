/* eslint-disable @typescript-eslint/no-unused-vars */
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { BiShuffle } from 'react-icons/bi';
import Button from '../components/Button';
import useCart from './useCart';
import { useEffect, useState } from 'react';

export const useMenu = (options: UseMenuOptions) => {
  const { state } = useCart();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const totalcount = state.reduce(
      (acc: number, item: CartItemType) => acc + item.count,
      0
    );
    setCount(totalcount);
  }, [state]);
  const menuItems: MenuItem[] = [
    {
      element: (
        <a
          className="hover:text-[#5F754D]"
          href="https://rosheh.com/brands/"
          target="_blank"
        >
          {'برندها'}
        </a>
      ),
    },
    {
      element: (
        <a
          className="hover:text-[#5F754D]"
          href="https://rosheh.com/brands/"
          target="_blank"
        >
          {'پوست'}
        </a>
      ),
    },
    {
      element: (
        <a
          className="hover:text-[#5F754D]"
          href="https://rosheh.com/brands/"
          target="_blank"
        >
          {'مو'}
        </a>
      ),
    },
    {
      element: (
        <a
          className="hover:text-[#5F754D]"
          href="https://rosheh.com/brands/"
          target="_blank"
        >
          {'آرایش'}
        </a>
      ),
    },
    {
      element: (
        <a
          className="hover:text-[#5F754D]"
          href="https://rosheh.com/brands/"
          target="_blank"
        >
          {'عطر'}
        </a>
      ),
    },
    {
      element: (
        <a
          className="flex items-center gap-1 text-[#5F754D]"
          href="https://rosheh.com/brands/"
          target="_blank"
        >
          <div>{'صفحه'}</div>
          <div className="rotate-180 pb-3">{' برعکس'}</div>
        </a>
      ),
    },
  ];
  const menuIcons: MenuItem[] = [
    {
      element: (
        <Button>
          <AiOutlineUser size={24} className="hover:text-[#5F754D]" />
        </Button>
      ),
    },
    {
      element: (
        <Button>
          <AiOutlineSearch size={24} className="hover:text-[#5F754D]" />
        </Button>
      ),
    },
    {
      element: (
        <Button>
          <AiOutlineHeart size={24} className="hover:text-[#5F754D]" />
        </Button>
      ),
    },
    {
      element: (
        <Button>
          <BiShuffle size={24} className=" hover:text-[#5F754D]" />
        </Button>
      ),
    },
    {
      element: (
        <Button onClick={options.handleOpenCart}>
          <div className="relative">
            <LiaShoppingBagSolid size={24} className=" hover:text-[#5F754D]" />
            <span className="px-1 rounded-full text-white text-[8px] absolute top-0 bg-[#5F754D]">
              {count}
            </span>
          </div>
        </Button>
      ),
    },
  ];
  const mobileIcons: MenuItem[] = [
    {
      element: (
        <Button>
          <div className="flex items-center gap-2 p-2">
            <AiOutlineHeart size={20} className="hover:text-[#5F754D]" />
            {'لیست لایک ها'}
          </div>
        </Button>
      ),
    },
    {
      element: (
        <Button>
          <div className="flex items-center gap-2 p-2">
            <BiShuffle size={20} className=" hover:text-[#5F754D]" />
            {'مقایسه'}
          </div>
        </Button>
      ),
    },
    {
      element: (
        <Button>
          <div className="flex items-center gap-2 p-2">
            <AiOutlineUser size={20} className="hover:text-[#5F754D]" />
            {'ورود/عضویت'}
          </div>
        </Button>
      ),
    },
  ];
  return [menuItems, menuIcons, mobileIcons];
};
