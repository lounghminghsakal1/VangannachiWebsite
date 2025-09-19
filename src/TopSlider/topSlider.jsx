import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import image from '../assets/topSlideImage.png';

const TopSlider = () => {
  const slides = [
    {
      id: 1,
      img: image, 
      title: "Improves Hair Growth",
    },
    {
      id: 2,
      img: image,
      title: "Reduces Premature Grey Hair",
    },
    {
      id: 3,
      img: image,
      title: "Fights Dandruff",
    },
  ];

  return (
    <div className="w-full h-screen border-4 mx-auto py-10">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="rounded-xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center h-screen">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-64 h-64 object-cover rounded-full border-4 border-green-500"
              />
              <p className="mt-4 text-lg font-semibold">{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSlider;
