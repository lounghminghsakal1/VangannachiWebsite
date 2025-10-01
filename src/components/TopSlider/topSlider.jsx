import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import image from '../../assets/topSlideImage.png';
import { useState } from "react";

const TopSlider = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      img: image, 
      title: "Improves Hair Growth",
      buttonText: "Boost Your health"
    },
    {
      id: 2,
      img: image,
      title: "Reduces Premature Grey Hair",
      buttonText: "Buy later"
    },
    {
      id: 3,
      img: image,
      title: "Fights Dandruff",
      buttonText: "Try Now"
    },
  ];

  return (
    <div className="w-full h-[500px] mx-auto">
      <Swiper
        modules={[Autoplay,Pagination]}
        autoplay={{delay:2000,disableOnInteraction:false, pauseOnMouseEnter:false}}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{clickable:true,el:".cards-pagination"}}
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
      <div className="w-full mt-4 mx-auto text-center p-4">
        <a href="#" className="bg-green-600 p-4 text-white rounded-full font-semibold">{slides[activeIndex]?.buttonText}</a>
      </div>
      <div className='cards-pagination mt-8 flex justify-center gap-4'></div>
    </div>
  );
};

export default TopSlider;
