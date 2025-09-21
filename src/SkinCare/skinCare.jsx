import hairOilImg from '../assets/skinCare.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const SkinCare = function () {
    const cardsData = [
        {id:1,name:"Natural Aloevera jel",price:"Rs. 1,200.00",src:hairOilImg},
        {id:2,name:"Kunkumathi Thailam ",price:"Rs. 1799.00",src:hairOilImg},
        {id:3,name:"Detan Face Pack",price:"Rs. 1,500.00",src:hairOilImg},
        {id:4,name:"Herbal Bath Powder",price:"Rs. 5405.00",src:hairOilImg},
    ];

    return(
        <div className="mt-20">
            <h2 className="text-green-600 text-center text-3xl">Skin Care</h2> 
            <p className="text-center mt-4">No Chemicals, No Compromise</p>
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

export default SkinCare;