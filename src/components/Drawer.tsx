import React, { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: (value: boolean) => void;
};

export default function Drawer({ children, isOpen, handleClose }: PropsType) {
  return (
    <main
      className={
        ' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform duration-500 ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 translate-x-0 '
          : ' transition-all delay-75 opacity-0 -translate-x-full  ')
      }
    >
      <section
        className={
          ' w-[300px] max-w-sm left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' -translate-x-0 ' : ' -translate-x-full ')
        }
      >
        <article className="relative w-full max-w-sm pb-10 flex flex-col space-y-6 overflow-y-auto h-full">
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full "
        onClick={() => {
          handleClose(false);
        }}
      ></section>
    </main>
  );
}
