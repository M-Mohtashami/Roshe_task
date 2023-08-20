import { ReactNode } from "react";

type PropsType ={
    children: ReactNode;
}
const MainLayout = ({children}:PropsType) => {
  return (
    <>
    <header></header>
    <main className="max-w-[1440px]">
{children}
    </main>
    <footer></footer>
    </>
  )
}

export default MainLayout