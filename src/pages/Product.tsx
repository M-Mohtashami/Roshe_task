/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { MutableRefObject, useCallback, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperRef } from 'swiper';
// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import Button from '../components/Button';
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsDash,
  BsPlus,
} from 'react-icons/bs';
import { BiShuffle } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdContentCopy } from 'react-icons/md';
import { products, swiperParams } from '../components/ProductSection';
import ProductCard from '../components/ProductCard';

type PropsType = {
  product: ProductType;
};
const Product = ({ product }: PropsType) => {
  const [desc, setDesc] = useState(false);
  const [count, setCount] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef>();
  const quantity = product.details.filter((detail) => detail.count > 0);
  const [price, setPrice] = useState<number>(quantity[0].price);
  const newestRef = useRef(null);
  const handlePrev = useCallback((sliderRef: MutableRefObject<any>) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback((sliderRef: MutableRefObject<any>) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const handleDecrease = useCallback(() => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  }, []);

  return (
    <div className="w-full p-8 flex flex-col items-center justify-between gap-12 bg-white">
      <div className="w-full flex flex-col md:flex-row items-start justify-start gap-24">
        <div className="w-full md:w-1/2">
          <Swiper
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2 bg-white"
          >
            {product.images.map((image) => (
              <SwiperSlide key={image}>
                <div className="py-6 px-8">
                  <img src={image} alt={product.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper "
          >
            {product.images.map((image) => (
              <SwiperSlide key={image} className="p-1">
                <img src={image} alt={product.name} className="w-[90%]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-start gap-8 mt-20">
          <h3 className="text-gray-600 text-2xl font-bold">{product.name}</h3>
          <span className="font-bold">
            {quantity.length > 1 ? 'از ' : ''}
            {Intl.NumberFormat('fa-IR').format(quantity[0].price!)}
            {' تومان'}
          </span>
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
          </div>
          <span className="text-[#5F754D] text-xl font-bold">
            {Intl.NumberFormat('fa-IR').format(price)}
            {' تومان'}
          </span>
          <div className="flex items-stretch">
            <div className="p-2 border rounded-s-full flex items-center justify-center transition duration-500 ease-in-out hover:bg-black hover:text-white">
              <Button onClick={handleIncrease}>
                <BsPlus size={20} />
              </Button>
            </div>
            <input
              type="text"
              value={count}
              min={1}
              className="flex items-center justify-center text-center w-10 border"
            />
            <div className="p-2 border flex items-center justify-center transition duration-500 ease-in-out hover:bg-black hover:text-white">
              <Button onClick={handleDecrease}>
                <BsDash size={20} />
              </Button>
            </div>
            <Button>
              <div className="bg-[#5F754D] w-32 p-2 border rounded-e-full flex items-center justify-center text-white">
                {'خرید'}
              </div>
            </Button>
          </div>
          <div className="flex items-center justify-start gap-2 w-full border-b p-3">
            <div className="p-2 flex items-center justify-start">
              <BiShuffle size={20} className="hover:text-red-600" />
              {'مقایسه'}
            </div>

            <div className="p-2 flex items-center justify-start">
              <AiOutlineHeart size={20} className="hover:text-red-600" />
              {'لایک'}
            </div>

            <div className=" flex items-center justify-start border-s-2 pr-2">
              <MdContentCopy size={20} className="hover:text-red-600" />
              {'کپی'}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center border-t border-b pb-5">
        <div className="w-full flex items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-5">
            <div
              className={`w-full border-t-4 border-[#5F754D] transition duration-300 ease-in-out transform origin-right ${
                !desc ? 'scale-100' : 'scale-0'
              }`}
            ></div>
            <Button onClick={() => setDesc(false)}>
              <span className={`font-bold ${desc ? 'text-gray-600' : ''}`}>
                {'توضیحات'}
              </span>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div
              className={`w-full border-t-4 border-[#5F754D] transition duration-300 ease-in-out transform origin-right ${
                desc ? 'scale-100' : 'scale-0'
              }`}
            ></div>
            <Button onClick={() => setDesc(true)}>
              <span className={`font-bold ${!desc ? 'text-gray-600' : ''}`}>
                {'مشخصات'}
              </span>
            </Button>
          </div>
        </div>
        <div className="p-8">
          {desc ? <p>{'مشخصات محصول'}</p> : <p>{'توضیحات محصول'}</p>}
        </div>
      </div>
      <div className="w-full flex flex-col items-center border-b pb-5">
        <div className="w-full flex flex-col items-start justify-start gap-2">
          <span className={`text-2xl font-bold ${desc ? 'text-gray-600' : ''}`}>
            {'شاید نیاز داشته باشید'}
          </span>

          <div className={`w-8 border-t-2 border-[#5F754D]`}></div>
        </div>
        <div className="w-full flex items-center gap-5 p-4">
          <button
            onClick={() => handlePrev(newestRef)}
            className="hover:scale-125 hover:text-primary"
          >
            <BsArrowRightCircle size={25} />
          </button>
          <Swiper
            ref={newestRef}
            {...swiperParams}
            observer={true}
            className=""
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => handleNext(newestRef)}
            className="hover:scale-125 hover:text-primary"
          >
            <BsArrowLeftCircle size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
