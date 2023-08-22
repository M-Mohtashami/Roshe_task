/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { MutableRefObject, useCallback, useRef } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 10,
  // using "ratio" endpoints
  breakpoints: {
    // when window width is >= 320px
    [580]: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    [1000]: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    [1125]: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
};

const products = [
  {
    name: 'ادو پرفیوم زنانه دزیره رانسه',
    images: ['assets/images/Product01.jpeg', 'assets/images/Product02.jpeg'],
    details: [
      {
        price: 8890000,
        capacity: 100,
        count: 10,
      },
      {
        price: 5590000,
        capacity: 50,
        count: 0,
      },
    ],
  },
  {
    name: 'ادو پرفیوم زنانه دزیره رانسه',
    images: ['assets/images/Product01.jpeg', 'assets/images/Product02.jpeg'],
    details: [
      {
        price: 8890000,
        capacity: 100,
        count: 10,
      },
      {
        price: 5590000,
        capacity: 50,
        count: 0,
      },
    ],
  },
  {
    name: 'ادو پرفیوم زنانه دزیره رانسه',
    images: ['assets/images/Product01.jpeg', 'assets/images/Product02.jpeg'],
    details: [
      {
        price: 8890000,
        capacity: 100,
        count: 10,
      },
      {
        price: 5590000,
        capacity: 50,
        count: 0,
      },
    ],
  },
  {
    name: 'ادو پرفیوم زنانه دزیره رانسه',
    images: ['assets/images/Product01.jpeg', 'assets/images/Product02.jpeg'],
    details: [
      {
        price: 8890000,
        capacity: 100,
        count: 10,
      },
      {
        price: 5590000,
        capacity: 50,
        count: 0,
      },
    ],
  },
  {
    name: 'ادو پرفیوم زنانه دزیره رانسه',
    images: ['assets/images/Product01.jpeg', 'assets/images/Product02.jpeg'],
    details: [
      {
        price: 8890000,
        capacity: 100,
        count: 10,
      },
      {
        price: 5590000,
        capacity: 50,
        count: 0,
      },
    ],
  },
  {
    name: 'ادو پرفیوم زنانه دزیره رانسه',
    images: ['assets/images/Product01.jpeg', 'assets/images/Product02.jpeg'],
    details: [
      {
        price: 8890000,
        capacity: 100,
        count: 10,
      },
      {
        price: 5590000,
        capacity: 50,
        count: 0,
      },
    ],
  },
  {
    name: 'ادو پرفیوم زنانه دزیره رانسه',
    images: ['assets/images/Product01.jpeg', 'assets/images/Product02.jpeg'],
    details: [
      {
        price: 8890000,
        capacity: 100,
        count: 10,
      },
      {
        price: 5590000,
        capacity: 50,
        count: 0,
      },
    ],
  },
  {
    name: 'ادو پرفیوم زنانه دزیره رانسه',
    images: ['assets/images/Product01.jpeg', 'assets/images/Product02.jpeg'],
    details: [
      {
        price: 8890000,
        capacity: 100,
        count: 10,
      },
      {
        price: 5590000,
        capacity: 50,
        count: 0,
      },
    ],
  },
];

const ProductSection = () => {
  const newestRef = useRef(null);
  const handlePrev = useCallback((sliderRef: MutableRefObject<any>) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback((sliderRef: MutableRefObject<any>) => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="space-y-3 mt-32">
      <div className="flex items-center gap-5 p-4">
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
          className="mx-10"
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
  );
};

export default ProductSection;