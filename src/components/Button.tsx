import { ReactNode } from 'react';
type PropsType = {
  children: ReactNode;
  onClick?: () => void;
};
const Button = ({ children, onClick }: PropsType) => {
  return (
    <button className="w-full" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
