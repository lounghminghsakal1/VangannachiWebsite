import image from '../assets/hairDandruff.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const ShopByConcern = function () {
    const cardsData = [
        {id:1,title:"BALDNESS",src:image},
        {id:2,title:"DANDRUFF",src:image},
        {id:3,title:"HAIR FALL",src:image},
        {id:4,title:"GREY HAIR",src:image},
        {id:5,title:"HAIR GROWTH",src:image},
    ];

    return(
        <div>
            <h2 className="text-green-700 text-center mb-10 text-3xl font-semibold">Shop By Concern</h2>
            <div className="flex justify-around mx-6">
                <Swiper
                modules={[Navigation]}
                spaceBetween={2}
                slidesPerView={1.2}   // number of cards visible at once
                navigation
                loop={true}
                breakpoints={{
                    640: { // tablet (sm >= 640px)
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                    },
                    768: { // md screens (>=768px)
                    slidesPerView: 3,
                    spaceBetween: 20,
                    },
                    1024: { // lg screens (>=1024px)
                    slidesPerView: 4,
                    spaceBetween: 25,
                    },
                    1280: { // xl screens (>=1280px)
                    slidesPerView: 5,
                    spaceBetween: 30,
                    },
  }}
            >
                {cardsData.map((data,index) => (
                    <SwiperSlide key={index} className=''>
                        <div className="flex-col ">
                            <img src={data.src} alt="" className='w-80 h-96 rounded-b-2xl'/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
}

export default ShopByConcern;