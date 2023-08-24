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
  id?: string;
  name: string;
  description?: string;
  images: string[];
  details: ProductDetail[];
};
interface CartItemType extends ProductDetail {
  id?: string;
  name: string;
  description?: string;
  images: string[];
}

type ArticleType = {
  title: string;
  author: string;
  category: string;
  comments: number;
  createdAt: Date;
  image: string;
};

type ActionType = {
  type: 'add to cart' | 'remove from cart' | 'update cart';
  payload: CartItemType;
};

type CartContextType = {
  state: CartItemType[];
  dispach: (value: ActionType) => void;
};