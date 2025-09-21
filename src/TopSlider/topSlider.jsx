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
    <div className="w-full h-[500px] mx-auto">
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
            <div className="flex flex-col items-center">
              <img
                src={slide.img}
                alt={slide.title}
                className="rounded h-[450px]"
              />
              <p className="my-4 text-lg font-semibold text-green-500">{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSlider;
