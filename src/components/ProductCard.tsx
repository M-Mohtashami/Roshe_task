import React, { useState } from 'react';
import Button from './Button';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { BiShuffle } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import useCart from '../hooks/useCart';

type PropsType = {
  product: ProductType;
};
const ProductCard = ({ product }: PropsType) => {
  const [state, dispach] = useCart();
  console.log(state);

  const [price, setPrice] = useState<number>();
  const [showDetails, setShowDetails] = useState(false);
  const quantity = product.details.filter((detail) => detail.count > 0);

  const addToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      images: product.images,
      ...(quantity.find((quant) => quant.price === price) || quantity[0]),
      count: 1,
    };
    dispach({ type: 'add to cart', payload: cartItem });
  };
  return (
    <div className="relative max-w-[250px] bg-white flex flex-col items-center justify-between group">
      <div className="relative w-full h-60 overflow-hidden flex flex-col items-center ">
        <a href={`/${product.id}`}>
          <img
            className="aspect-square"
            src={product.images[0]}
            alt={product.name}
          />
        </a>
        <div className="w-2/3 bg-white shadow-md flex items-center justify-center gap-3 p-2 opacity-0 transition duration-700 ease-in-out transform group-hover:-translate-y-[140%] group-hover:opacity-100">
          <Button onClick={() => setShowDetails(true)}>
            <BsCart2 size={24} className=" hover:text-[#5F754D]" />
          </Button>
          <Button>
            <BiShuffle size={24} className=" hover:text-[#5F754D]" />
          </Button>
          <Button>
            <AiOutlineHeart size={24} className="hover:text-[#5F754D]" />
          </Button>
        </div>
        <div
          className={`absolute bottom-0 top-0 w-full bg-white flex flex-col items-center justify-between gap-3 p-2 ${
            showDetails ? '' : 'translate-y-full'
          }  transition duration-700 ease-in-out transform origin-bottom`}
        >
          <Button onClick={() => setShowDetails(false)}>
            <div className="w-full flex items-center justify-end">
              <AiOutlineClose size={24} className="hover:text-red-600" />
              {' بستن'}
            </div>
          </Button>
          <div className="flex-1 flex flex-col items-center justify-between gap-3">
            <div className="w-full flex items-center justify-start gap-3 flex-wrap">
              {product.details.map((detail) => {
                if (detail.count > 0) {
                  return (
                    <div className="border-2 border-gray-600 p-2">
                      <Button onClick={() => setPrice(detail.price)}>
                        {detail.capacity}
                        {' میلی لیتر'}
                      </Button>
                    </div>
                  );
                }
                return (
                  <div className="border-2 p-2 opacity-40">
                    {detail.capacity}
                    {' میلی لیتر'}
                  </div>
                );
              })}
            </div>
            {price && (
              <span className="text-[#5F754D] font-bold">
                {Intl.NumberFormat('fa-IR').format(price)}
                {' تومان'}
              </span>
            )}
          </div>

          <Button onClick={addToCart}>
            <div className="w-full p-2 text-white bg-[#5F754D] flex items-center justify-center gap-3 ">
              <BsCart2 size={24} className=" text-white" />
              {' خرید'}
            </div>
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 items-center px-4 pb-4 pt-1 font-semibold ">
        <h3 className="text-gray-600">{product.name}</h3>
        <span className="text-[#5F754D] font-bold">
          {quantity.length > 1 ? 'از ' : ''}
          {Intl.NumberFormat('fa-IR').format(quantity[0].price!)}
          {' تومان'}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
