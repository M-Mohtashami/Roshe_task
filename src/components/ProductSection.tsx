/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useCallback, useRef } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

export const swiperParams = {
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

export const products = [
  {
    id: 'PR001',
    name: '1 ادو پرفیوم زنانه دزیره رانسه',
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
    id: 'PR002',
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
    id: 'PR003',
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
    id: 'PR004',
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
    id: 'PR005',
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
    id: 'PR006',
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
    id: 'PR007',
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
    id: 'PR008',
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
    <div className="relative space-y-3 mb-48">
      <div className="w-full h-96 bg-[#35481E] flex items-start justify-center text-white text-6xl font-bold">
        <h2 className="pt-20">{'تخفیف ها'}</h2>
      </div>
      <div className="absolute w-full top-48 flex items-center gap-5 p-4">
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
  );
};

export default ProductSection;
