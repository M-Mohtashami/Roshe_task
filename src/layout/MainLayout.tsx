import { ReactNode } from "react";
import Header from './../components/Header';

type PropsType = {
  children: ReactNode;
};
const MainLayout = ({ children }: PropsType) => {
  return (
    <>
      <div className="w-full h-full bg-gray-100  flex flex-col items-center justify-between font-iran-sans ">
        <header className="fixed top-0 w-full p-5 bg-white shadow-md flex items-center justify-center z-50">
          <div className="max-w-[1440px] w-full">
            <Header />
          </div>
        </header>
        <main className="max-w-[1440px] w-full flex-1 mt-20 p-8">
          {children}
        </main>
        <footer className="w-full h-20 bg-white shadow-md border-t border-gray-300 flex items-center justify-center">
          <div className="max-w-[1440px]">footer</div>
        </footer>
      </div>
    </>
  );
};

export default MainLayout