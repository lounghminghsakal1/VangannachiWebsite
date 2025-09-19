import hairOilImg from '../assets/spices.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



const SpicesAndMasalas = function () {
    const cardsData = [
        {id:1,name:"Sambar Podi (Homemade)",price:"Rs. 700.00",src:hairOilImg},
        {id:2,name:"Turmeric Powder",price:"Rs. 590.00",src:hairOilImg},
        {id:3,name:"Spice Combo 1",price:"Rs. 3090.00",src:hairOilImg},
        {id:4,name:"Spice Combo 2",price:"Rs. 2250.00",src:hairOilImg},
    ];

    return(
        <div className="mt-20">
            <h2 className="text-green-600 text-center text-3xl">Spices &Masalas</h2> 
            <p className="text-center mt-4">Spice Up Every Meal, Naturally
</p>
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

export default SpicesAndMasalas;