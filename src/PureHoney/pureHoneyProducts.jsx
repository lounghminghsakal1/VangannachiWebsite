import hairOilImg from '../assets/Honey.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const PureHoneyProducts = function () {
    const cardsData = [
        {id:1,name:"Amla Honey",price:"Rs. 870.00",src:hairOilImg},
        {id:2,name:"Moringa Honey",price:"Rs. 630.00",src:hairOilImg},
        {id:3,name:"Kombu Honey",price:"Rs. 1,899.00",src:hairOilImg},
        {id:4,name:"Mountain Honey",price:"Rs. 2300.00",src:hairOilImg},
    ];

    return(
        <div className="mt-20">
            <h2 className="text-green-600 text-center text-3xl">Pure Honey Products</h2> 
            <p className="text-center mt-4">Purely Sweet. Naturally Strong</p>
           <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}   // number of cards visible at once
                navigation
                loop={true}
                className="mt-10"
                breakpoints={{
                    640:{
                        slidesPerView:3,
                        spaceBetween:15,
                    },
                    1024:{
                        slidesPerView:4,
                        spaceBetween:20, 
                    },
                }}
            >
                {cardsData.map((data,index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col mx-2'>
                            <img src={data.src} alt="" className='rounded-2xl'/>
                            <h2 className='text-green-600 h-12 font-semibold text-center'>{data.name}</h2>
                            <p className='mt-2 text-green-600 font-semibold text-center'>{data.price}</p>
                            <button className='mt-2 bg-green-700 rounded-full text-white p-3 w-full'>Add to Cart</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className='bg-green-700 hover:bg-green-600 text-white p-4 rounded-full font-semibold w-32 block mt-14 mx-auto'>View All</button>
        </div>
    );
}

export default PureHoneyProducts;