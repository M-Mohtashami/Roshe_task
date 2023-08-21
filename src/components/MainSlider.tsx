import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    image: 'assets/images/slider02.webp',
  },
  {
    id: 2,
    image: 'assets/images/slider03.jpg',
  },
];
const MainSlider = () => {
  return (
    <div className="w-full h-96 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-full"
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide className="w-full" key={slide.id}>
              <img className="w-full" src={slide.image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MainSlider;
