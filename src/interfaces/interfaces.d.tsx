/* eslint-disable @typescript-eslint/no-unused-vars */
type MenuItem = {
  element: React.ReactElement;
};

type UseMenuOptions = {
  handleOpenCart: () => void;
};

type ProductDetail = {
  price: number;
  capacity: number;
  count: number;
};

type ProductType = {
  name: string;
  description?: string;
  images: string[];
  details: ProductDetail[];
};