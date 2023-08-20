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

const Header = () => {
  return (
    <>
      <div className="hidden w-full md:flex items-center justify-between gap-8">
        <div className="h-16">
          <img
            className="w-full h-full"
            src="assets/images/logo-rosheh.png"
            alt="rosheh"
          />
        </div>
        <div className="flex items-center justify-center gap-5 font-bold">
          {menuItems.map((menuItem: MenuItem) => {
            return menuItem.element;
          })}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
