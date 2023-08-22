import React from 'react';
import Button from './Button';
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';

const footerMenu: MenuItem[] = [
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
        {'فروشگاه'}
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
        {'تماس با ما'}
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
        {'شرایط و مقررات'}
      </a>
    ),
  },
];
const socials: MenuItem[] = [
  {
    element: (
      <Button>
        <FaTelegram size={20} className="hover:text-[#5F754D]" />
      </Button>
    ),
  },
  {
    element: (
      <Button>
        <FaWhatsapp size={20} className="hover:text-[#5F754D]" />
      </Button>
    ),
  },
  {
    element: (
      <Button>
        <FaYoutube size={20} className="hover:text-[#5F754D]" />
      </Button>
    ),
  },
  {
    element: (
      <Button>
        <FaInstagram size={20} className=" hover:text-[#5F754D]" />
      </Button>
    ),
  },
  {
    element: (
      <Button>
        <FaTwitter size={20} className=" hover:text-[#5F754D]" />
      </Button>
    ),
  },
  {
    element: (
      <Button>
        <FaFacebook size={20} className=" hover:text-[#5F754D]" />
      </Button>
    ),
  },
];

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between md:flex-row">
      <div className="w-48">
        <img
          className="w-full h-full"
          src="assets/images/logo-rosheh-white.png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-3 font-bold text-sm text-white">
          {footerMenu.map((menu, idx) => {
            return <span key={idx}>{menu.element}</span>;
          })}
        </div>
        <div className="flex items-center justify-center gap-3 font-bold text-sm text-white">
          {socials.map((icon, idx) => {
            return (
              <span
                className="p-3 flex items-center justify-center rounded-full bg-black text-white"
                key={idx}
              >
                {icon.element}
              </span>
            );
          })}
        </div>
        <div className="text-white text-xs ">
          {' ۱۴۰۲ | تمامی حقوق برای روشه محفوظ است.'}
        </div>
      </div>
      <div className="relative p-2">
        <img
          className="absolute right-4 w-20 z-50"
          src="assets/images/namad.png"
          alt=""
        />
        <div className="bg-white skew-x-12 rotate-45 z-10 w-24 h-24" />
      </div>
    </div>
  );
};

export default Footer;
