/* eslint-disable @typescript-eslint/no-unused-vars */
import { AiOutlineUser, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { BiShuffle } from 'react-icons/bi';
import Button from '../components/Button';

export const useMenu = (options: UseMenuOptions) => {
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
          <LiaShoppingBagSolid size={24} className=" hover:text-[#5F754D]" />
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
