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
                slidesPerView={3}   // number of cards visible at once
                navigation
                loop={true}
                className="mt-10"
            >
            <div className='flex border-4 justify-around mt-10'>
                {cardsData.map((data,index) => (
                    <SwiperSlide key={index}>
                    <div className='flex-col border-2'>
                        <img src={data.src} alt="" className='mx-auto w-64'/>
                        <h3 className='text-green-500 text-center'>{data.name}</h3>
                        <p className='text-green-500 text-center'>{data.price}</p>
                        <button className='bg-green-600 hover:bg-green-700 text-white px-2 py-2 w-full rounded-full font-semibold transistion duration 200 '>Select Options</button>
                    </div>
                    </SwiperSlide>
                ))}
            </div>
            </Swiper>
            <button className='bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-full font-semibold transistion duration 200 w-48 block mt-6 mx-auto'>View All</button>
        </div>
    );
}

export default PureHoneyProducts;