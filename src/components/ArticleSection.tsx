/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, useCallback, useRef } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArticleCard from './ArticleCard';

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

const articles = [
  {
    id: 111,
    title: 'طراحی داخلی سبز',
    author: 'امید',
    category: 'مقیاس',
    comments: 0,
    image: 'assets/images/article02.jpg',
    createdAt: new Date(),
  },
  {
    id: 222,
    title: 'طراحی داخلی سبز',
    author: 'امید',
    category: 'مقیاس',
    comments: 0,
    image: 'assets/images/article02.jpg',
    createdAt: new Date(),
  },
  {
    id: 333,
    title: 'طراحی داخلی سبز',
    author: 'امید',
    category: 'مقیاس',
    comments: 0,
    image: 'assets/images/article02.jpg',
    createdAt: new Date(),
  },
];

const ArticleSection = () => {
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
      <div className="flex flex-col items-center justify-center gap-3 my-8">
        <span className="text-[#5F754D]">{'آخرین مقالات'}</span>
        <h2 className="text-4xl font-bold">
          {'حرفه‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ای یادبگیریم'}
        </h2>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-10">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="flex items-center gap-5 p-4 lg:hidden">
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
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <ArticleCard article={article} />
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

export default ArticleSection;
